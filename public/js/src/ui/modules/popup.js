(function() {
    var Popup = function() {
        tuna.ui.modules.Module.call(this, 'popup', '.j-popup');
    };

    tuna.extend(Popup, tuna.ui.modules.Module);

    Popup.prototype._initInstance = function(target) {
        var popupElement = Sizzle(target.getAttribute('data-popup-selector'))[0];
        var popup = ui.Popup.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);
            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register(new Popup());
    
})();