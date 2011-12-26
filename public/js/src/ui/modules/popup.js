(function() {
    var Popup = function() {
        tuna.ui.modules.Module.call(this, 'popup', '.j-popup');
    };

    tuna.extend(Popup, tuna.ui.modules.Module);

    Popup.prototype._initInstance = function(target) {
        var popupElement =
            tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

        var popup = ui.Popup.create(popupElement);
        popup.addEventListener('popup-open', function() {
            tuna.dom.dispatchEvent(target, 'ui-popup-open');
        });

        popup.addEventListener('popup-close', function() {
            tuna.dom.dispatchEvent(target, 'ui-popup-close');
        });

        popup.addEventListener('popup-apply', function(type, data) {
            tuna.dom.dispatchEvent(target, 'ui-popup-apply', data);
        });


        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);
            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register(new Popup());
    
})();