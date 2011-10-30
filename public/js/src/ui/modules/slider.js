(function() {

    var Slider = function() {
        tuna.ui.modules.Module.call(this, 'slider', '.j-horizontal-slider, .j-vertical-slider');
    };

    tuna.extend(Slider, tuna.ui.modules.Module);

    Slider.prototype._initItem = function(target) {
        var $this = $(target);

        $this.slider({
            'value': $this.attr('data-value'),
            'max': $this.attr('data-count') - 1,
            'orientation' : $this.hasClass('j-vertical-slider') ? 'vertical' : 'horizontal',
            'slide': function(event, ui) {
                tuna.dom.dispatchEvent($this[0], 'ui-value-change', ui.value);
            }
        });

        $this.bind('data-value-change', function(event) {
            $this.slider('option', 'max', $this.attr('data-count') - 1);
            $this.slider('value', $this.attr('data-value'));
        });

        $this.bind('data-count-change', function(event) {
            $this.slider('option', 'max', $this.attr('data-count') - 1);
            $this.slider('value', $this.attr('data-value'));
        });
    };

    tuna.ui.modules.register(new Slider());

})();