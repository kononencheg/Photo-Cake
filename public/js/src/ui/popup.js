(function() {
    tuna.namespace('ui');

    var Popup = function(target) {
        tuna.events.EventDispatcher.call(this);
        
        this.__target = target;
        this.__isOpen = false;

        var self = this;

        tuna.dom.addChildEventListener(
            this.__target, '.j-popup-close', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.close();
            }
        );

        tuna.dom.addChildEventListener(
            this.__target, '.j-popup-apply', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.apply();
            }
        );
    };

    tuna.extend(Popup, tuna.events.EventDispatcher);

    Popup.prototype.getTarget = function() {
        return this.__target;
    };

    Popup.prototype.isOpen = function() {
        return this.__isOpen;
    };

    Popup.prototype.open = function() {
        if (this.dispatch('popup-open')) {
            this.__show();
        }
    };

    Popup.prototype.close = function() {
        if (this.dispatch('popup-close')) {
            this.__hide();
        }
    };

    Popup.prototype.apply = function() {
        if (this.dispatch('popup-apply', this.__collectData())) {
            this.__hide();
        }
    };

    Popup.prototype.__hide = function() {
        this.__isOpen = false;
        $(this.__target).hide();
    };

    Popup.prototype.__show = function() {
        this.__isOpen = true;
        $(this.__target).show();
    };

    Popup.prototype.__collectData = function() {
        var result = {};

        var $form = $(this.__target).find('form.j-popup-form');
        var array = $form.serializeArray();

        var i = 0,
            l = array.length;

        var name = null;
        while (i < l) {
            name = array[i].name;

            if (result[name] !== undefined) {
                if (!(result[name] instanceof Array)) {
                    result[name] = [result[name]];
                }
                result[name].push(array[i].value);
            } else {
                result[name] = array[i].value;
            }

            i++
        }

        return result;
    };

    var idTable = {};

    Popup.create = function(target) {
        if (target.id !== null) {
            if (idTable[target.id] === undefined) {
                idTable[target.id] = new Popup(target);
            }

            return idTable[target.id];
        }

        return new Popup(target);
    };


    ui.Popup = Popup;
})();