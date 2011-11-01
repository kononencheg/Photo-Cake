(function() {
	tuna.namespace('tuna.ui');

	var ItemSelector = function(targetElement, itemSelector) {
		tuna.utils.Notifier.call(this);

		this.__currentIndex = -1;

		this.__itemSelector = itemSelector;
		this.__target = targetElement;

		this.__items = [];

		this.__nextButtonSelector = null;
		this.__prevButtonSelector = null;
	};

	tuna.extend(ItemSelector, tuna.utils.Notifier);

	ItemSelector.prototype.init = function() {
        this.__initListeners();

        this.update();
	};
	
	ItemSelector.prototype.update = function() {
		this.__items = Sizzle(this.__itemSelector, this.__target);

		this.__syncCurrentIndex();

		this.notify('update');
	};

	ItemSelector.prototype.setNavigationButtonSelectors = function(nextSelector, prevSelector) {
		this.__nextButtonSelector = nextSelector;
		this.__prevButtonSelector = prevSelector;
	};

	ItemSelector.prototype.setNextIndex = function() {
		this.setCurrentIndex(this.__currentIndex + 1);
	};

	ItemSelector.prototype.setPrevIndex = function() {
		this.setCurrentIndex(this.__currentIndex - 1);
	};

	ItemSelector.prototype.setCurrentIndex = function(index) {
		if (this.__currentIndex !== index) {
			if (index < 0) {
				index = this.__items.length - 1;
			} else if (index >= this.__items.length) {
				index = 0;
			}

            if (this.__currentIndex !== -1) {
                this.__deselectAt(this.__currentIndex);
            }

			this.__currentIndex = index;

			this.__selectAt(this.__currentIndex);

			this.notify('select');
		}
    };

    ItemSelector.prototype.getCurrentItem = function() {
        return this.__items[this.__currentIndex];
    };

    ItemSelector.prototype.getCurrentIndex = function() {
        return this.__currentIndex;
    };

	ItemSelector.prototype.__selectAt = function(i) {
        tuna.dom.addClass(this.__items[i], 'current');
	};

	ItemSelector.prototype.__deselectAt = function(i) {
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
            this.__target, this.__itemSelector, 'click',
            function(event) {
                tuna.dom.stopPropogation(event);

                self.setCurrentIndex(Number(this.getAttribute('data-index')));
            }
        );

        if (this.__nextButtonSelector) {
            tuna.dom.addChildEventListener(
                this.__target, this.__nextButtonSelector, 'click',
                function(event) {
                    tuna.dom.preventDefault(event);
                    tuna.dom.stopPropogation(event);

                    self.setNextIndex();
                }
            );
        }

        if (this.__prevButtonSelector) {
            tuna.dom.addChildEventListener(
                this.__target, this.__prevButtonSelector, 'click',
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