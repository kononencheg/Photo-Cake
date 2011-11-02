(function() {
    tuna.namespace('ui');

    var Carousel = function(listElement, overflowElement, itemSelector) {
        tuna.ui.ItemSelector.call(this, listElement, itemSelector);

        this.__overflow = overflowElement;
    };

    tuna.extend(Carousel, tuna.ui.ItemSelector);

    Carousel.prototype._selectAt = function(i) {
        tuna.ui.ItemSelector.prototype._selectAt.call(this, i);

        this.__scrollTo(this.getCurrentItem());
    };

    Carousel.prototype.__scrollTo = function(item) {
        var $item = $(item);
        var $overflow = $(this.__overflow);

        var scrollLeft = -$(this._target).position().left + $item.position().left -
            ($overflow.innerWidth() - $item.outerWidth()) / 2;

        $overflow.stop().animate({ 'scrollLeft': scrollLeft }, 'fast');
    };

    ui.Carousel = Carousel;
})();