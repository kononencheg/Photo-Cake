(function() {
    tuna.ui.modules.register('item-selector', {
        init: function (context, container) {
            var targets = Sizzle('.j-item-selector', context);

            var i = 0,
                l = targets.length;

            while (i < l) {
                initItemSelector(targets[i]);

                i++;
            }
        }
    });

    function initItemSelector(target) {
        var selector = new tuna.ui.ItemSelector(target, '.j-selection-item');
        selector.setNavigationButtonSelectors('.j-selection-next', '.j-selection-prev');
        selector.subscribe('select', function() {
            tuna.dom.dispatchEvent(selector.getCurrentItem(), 'ui-select');
        });

        selector.init();
    }

})();