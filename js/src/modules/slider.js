(function() {
	tuna.ui.modules.register('slider', {
		init: function (target, container) {
			$('.j-horizontal-slider, .j-vertical-slider', target).each(function() {
                var $this = $(this);
                
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
            });
		}
	});
})();