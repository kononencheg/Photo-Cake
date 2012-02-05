(function() {

    var DataImageCopy = function() {
        tuna.ui.Module.call
            (this, 'img.j-data-image-copy');
    };

    tuna.utils.extend(DataImageCopy, tuna.ui.Module);

    DataImageCopy.prototype.initInstance = function(target) {
        var imageSelector = target.getAttribute('data-image-selector');
        if (imageSelector !== null) {
            var currentImage = target;

            var targetDataImage = ui.DataImage.create
                                    (tuna.dom.selectOne(imageSelector));

            var replaceImage = function() {
                var image = targetDataImage.getTarget();
                var parent = currentImage.parentNode;
                if (parent !== null) {
                    var newImage = image.cloneNode(false);
                    newImage.id = currentImage.id;
                    newImage.className = currentImage.className;

                    parent.replaceChild(newImage, currentImage);

                    currentImage = newImage;
                }
            };

            targetDataImage.addEventListener('loaded', replaceImage);
            replaceImage();

            return currentImage;
        }

        return null;
    };

    tuna.ui.modules.register('data-image-copy', new DataImageCopy());
})();
