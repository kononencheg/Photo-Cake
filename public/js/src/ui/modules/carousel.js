(function() {
    var Carousel = function() {
        tuna.ui.modules.Module.call(this, 'carousel', '.j-carousel');
    };

    tuna.extend(Carousel, tuna.ui.modules.Module);

    Carousel.prototype._initInstance = function(target) {
        var carouselBody = Sizzle('.j-carousel-body', target )[0];
        
        var carousel = new ui.Carousel(carouselBody, target, '.j-carousel-item');
        carousel.init();
        
        return carousel;
    };

    tuna.ui.modules.register(new Carousel());

})();