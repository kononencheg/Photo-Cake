(function() {
    var CakeImagePopup = function() {
        tuna.ui.Module.call(this, '.j-cake-image-popup');

        this.__handleMouseMove = tuna.utils.bind(this.__handleMouseMove, this);
        this.__lastIndex = -1;
    };

    tuna.utils.extend(CakeImagePopup, tuna.ui.Module);

    CakeImagePopup.prototype.initInstance = function(target) {
        var self = this;

        var cakeIndex = target.getAttribute('data-cake-index');

        var popupTarget = tuna.dom.selectOne('#cake_image_popup');
        var popup = tuna.ui.popups.create(popupTarget);

        var photoImage = tuna.dom.selectOne('img.j-cake-image-photo', popupTarget);
        var beforeImage = tuna.dom.selectOne('img.j-cake-image-before', popupTarget);
        var afterImage = tuna.dom.selectOne('img.j-cake-image-after', popupTarget);

        function syncWidth() {
            $('.image-container', popupTarget).width($(photoImage).width() +
                                                     $(beforeImage).width() +
                                                     $(afterImage).width() + 15);
        }

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            if (self.__lastIndex !== cakeIndex) {
                photoImage.onload =
                    beforeImage.onload =
                        afterImage.onload = syncWidth;

                photoImage.src = '/img/title/photo_' + cakeIndex + '.jpg';
                beforeImage.src = '/img/title/before_' + cakeIndex + '.jpg';
                afterImage.src = '/img/title/after_' + cakeIndex + '.jpg';

                syncWidth();

                self.__lastIndex = cakeIndex;
            }

            popup.open();
        });

        if (this.__handleMouseMove !== null) {
            $('.modal-body', popupTarget).mousemove(this.__handleMouseMove);
            this.__handleMouseMove = null;
        }

        return popup;
    };

    CakeImagePopup.prototype.__handleMouseMove = function(event) {
        var $target = $(event.currentTarget);
        var center = $target.offset().left + $target.width() / 2;

        if (center > event.pageX) {
            $target.stop().animate({ 'scrollLeft': '-=50' }, 'fast');
        } else {
            $target.stop().animate({ 'scrollLeft': '+=50' }, 'fast');
        }

    };

    tuna.ui.modules.register('cake-image-popup', new CakeImagePopup());
    
})();