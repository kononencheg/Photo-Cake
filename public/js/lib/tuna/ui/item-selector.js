(function() {
    tuna.namespace('tuna.ui');

    var ItemSelector = function(target, itemSelector) {
        tuna.utils.Notifier.call(this);

        this.__currentIndex = -1;

        this.__itemSelector = itemSelector;
        this._target = target;

        this.__items = [];

        this.__disabledTable = {};

        this.__nextButtonSelector = null;
        this.__prevButtonSelector = null;
    };

    tuna.extend(ItemSelector, tuna.utils.Notifier);

    ItemSelector.prototype.init = function() {
        this.__initListeners();

        this.update();
    };

    ItemSelector.prototype.update = function() {
        this.__items = Sizzle(this.__itemSelector, this._target);

        this.__syncCurrentIndex();

        this.notify('update');
    };

    ItemSelector.prototype.setNavigationButtonSelectors = function(nextSelector, prevSelector) {
        this.__nextButtonSelector = nextSelector;
        this.__prevButtonSelector = prevSelector;
    };

    ItemSelector.prototype.setNextIndex = function() {
        var nextIndex = this.__currentIndex + 1;
        while (this.__disabledTable[nextIndex]) {
            nextIndex++;
        }

        this.setCurrentIndex(nextIndex);
    };

    ItemSelector.prototype.setPrevIndex = function() {
        var nextIndex = this.__currentIndex - 1;
        while (this.__disabledTable[nextIndex]) {
            nextIndex--;
        }

        this.setCurrentIndex(nextIndex);
    };

    ItemSelector.prototype.setIndexEnabled = function(index, isEnabled) {
        this.__disabledTable[index] = !isEnabled;
    };

    ItemSelector.prototype.setCurrentIndex = function(index) {
        var result = false;

        if (this.__currentIndex !== index && !this.__disabledTable[index]) {
            if (index < 0) {
                index = this.__items.length - 1;
            } else if (index >= this.__items.length) {
                index = 0;
            }

            if (this.__currentIndex !== -1) {
                this._deselectAt(this.__currentIndex);
            }

            this.__currentIndex = index;

            this._selectAt(this.__currentIndex);

            this.notify('select');

            result = true;
        }

        return result;
    };

    ItemSelector.prototype.getCurrentItem = function() {
        return this.__items[this.__currentIndex];
    };

    ItemSelector.prototype.getCurrentIndex = function() {
        return this.__currentIndex;
    };

    ItemSelector.prototype._selectAt = function(i) {
        tuna.dom.addClass(this.__items[i], 'current');
    };

    ItemSelector.prototype._deselectAt = function(i) {
        tuna.dom.removeClass(this.__items[i], 'current');
    };

    ItemSelector.prototype.__syncCurrentIndex = function() {
        this.__currentIndex = -1;

        var i = 0,
            l = this.__items.length;

        while (i < l) {
            if (tuna.dom.hasClass(this.__items[i], 'current')) {
                if (this.__currentIndex === -1) {
                    this.__currentIndex = i;

                    this.notify('select');
                }
            }

            this.__items[i].setAttribute('data-index', i);

            i++;
        }
    };

    ItemSelector.prototype.__initListeners = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, this.__itemSelector, 'click',
            function(event) {
                tuna.dom.stopPropogation(event);

                self.setCurrentIndex(Number(this.getAttribute('data-index')));
            }
        );

        if (this.__nextButtonSelector) {
            tuna.dom.addChildEventListener(
                this._target, this.__nextButtonSelector, 'click',
                function(event) {
                    tuna.dom.preventDefault(event);
                    tuna.dom.stopPropogation(event);

                    self.setNextIndex();
                }
            );
        }

        if (this.__prevButtonSelector) {
            tuna.dom.addChildEventListener(
                this._target, this.__prevButtonSelector, 'click',
                function(event) {
                    tuna.dom.preventDefault(event);
                    tuna.dom.stopPropogation(event);

                    self.setPrevIndex();
                }
            );
        }

        this.subscribe('select', function() {
            tuna.dom.dispatchEvent(self.getCurrentItem(), 'ui-select', self);
        });
    };

    tuna.ui.ItemSelector = ItemSelector;
})();