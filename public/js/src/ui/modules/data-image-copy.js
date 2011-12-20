(function() {

    var DataImageCopy = function() {
        tuna.ui.modules.Module.call
            (this, 'data-image-copy', 'img.j-data-image-copy');
    };

    tuna.extend(DataImageCopy, tuna.ui.modules.Module);

    DataImageCopy.prototype._initInstance
        = function(target, container, options) {

        var imageSelector = target.getAttribute('data-image-selector');
        if (imageSelector !== null) {
            var currentImage = target;

            var targetDataImage = ui.DataImage.create
                                    (tuna.dom.selectOne(imageSelector));

            var replaceImage = function() {
                var image = targetDataImage.getTarget();
                var parent = target.parentNode;
                if (parent !== null) {
                    currentImage = parent.replaceChild
                                        (image.cloneNode(), currentImage);
                }
            };

            targetDataImage.subscribe('loaded', replaceImage);
            replaceImage();

            return currentImage;
        }

        return null;
    };

    tuna.ui.modules.register(new DataImageCopy());
})();
