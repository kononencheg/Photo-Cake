(function() {
    var Popup = function() {
        tuna.ui.modules.Module.call(this, 'popup', '.j-popup');
    };

    tuna.extend(Popup, tuna.ui.modules.Module);

    Popup.prototype.initInstance = function(target) {
        var popupElement =
            tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

        var popup = ui.Popup.create(popupElement);
        tuna.dom.addEventListener(target, 'click', function(event) {
            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register(new Popup());
    
})();