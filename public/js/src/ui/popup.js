(function() {
    tuna.namespace('ui');

    var Popup = function(target) {
        tuna.utils.Notifier.call(this);
        
        this.__target = target;

        var self = this;
        tuna.dom.addChildEventListener(
            this.__target, '.j-popup-close', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                tuna.dom.stopPropogation(event);

                self.close();
            }
        );
        tuna.dom.addChildEventListener(
            this.__target, '.j-popup-apply', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                tuna.dom.stopPropogation(event);

                self.apply();
            }
        );

        this.subscribe('popup-open', function() {
            tuna.dom.dispatchEvent(self.__target, 'ui-popup-open');
        });

        this.subscribe('popup-close', function() {
            tuna.dom.dispatchEvent(self.__target, 'ui-popup-close');
        });

        this.subscribe('popup-apply', function(type, data) {
            debugger;
            tuna.dom.dispatchEvent(self.__target, 'ui-popup-apply', data);
        });
    };

    tuna.extend(Popup, tuna.utils.Notifier);

    Popup.prototype.open = function() {
        $(this.__target).show();
        this.notify('popup-open');
    };

    Popup.prototype.close = function() {
        $(this.__target).hide();
        this.notify('popup-close');
    };

    Popup.prototype.apply = function() {
        $(this.__target).hide();
        this.notify('popup-apply', this.__collectData());
    };

    Popup.prototype.__collectData = function() {
        var $form = $(this.__target).find('form.j-popup-form');
        return $form.serializeArray();
    };

    Popup.create = function(target) {
        if (target.id) {
            if (Popup.__idTable[target.id] === undefined) {
                Popup.__idTable[target.id] = new Popup(target);
            }

            return Popup.__idTable[target.id];
        }

        return new Popup(target);
    };

    Popup.__idTable = {};

    ui.Popup = Popup;
})();