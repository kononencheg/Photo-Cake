(function() {
    var ImagePopup = function() {
        tuna.ui.modules.Module.call(this, 'image-popup', 'img.j-image-popup');
    };

    tuna.extend(ImagePopup, tuna.ui.modules.Module);

    ImagePopup.prototype._initInstance = function(target) {
        var popupElement = tuna.dom.selectOne('#image_popup');
        var popup = ui.Popup.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            var altText = tuna.dom.selectOne('.j-alt-text', popupElement);
            var image = tuna.dom.selectOne('.j-popup-image', popupElement);

            altText.innerText = target.getAttribute('alt');
            image.src = target.src;

            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register(new ImagePopup());
    
})();