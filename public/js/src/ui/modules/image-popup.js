(function() {
    var ImagePopup = function() {
        tuna.ui.Module.call(this, 'img.j-image-popup');
    };

    tuna.utils.extend(ImagePopup, tuna.ui.Module);

    ImagePopup.prototype.initInstance = function(target) {
        var popupElement = tuna.dom.selectOne('#image_popup');
        var popup = tuna.ui.popups.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            var altText = tuna.dom.selectOne('.j-alt-text', popupElement);
            var image = tuna.dom.selectOne('.j-popup-image', popupElement);

            altText.innerText = target.getAttribute('alt');
            image.src = target.getAttribute('data-image-src');

            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register('image-popup', new ImagePopup());
    
})();