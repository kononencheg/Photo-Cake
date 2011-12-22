(function() {
    var Carousel = function() {
        tuna.ui.modules.Module.call(this, 'carousel', '.j-carousel');
    };

    tuna.extend(Carousel, tuna.ui.modules.Module);

    Carousel.prototype._initInstance = function(target) {
        var carouselBody = tuna.dom.selectOne('.j-carousel-body', target );
        
        var carousel = new ui.Carousel
            (carouselBody, target, '.j-carousel-item', this._selector);

        carousel.init();
        
        return carousel;
    };

    tuna.ui.modules.register(new Carousel());

})();