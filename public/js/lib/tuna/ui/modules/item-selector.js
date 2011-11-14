(function() {

    var ItemSelector = function() {
        tuna.ui.modules.Module.call(this, 'item-selector', '.j-item-selector');
    };

    tuna.extend(ItemSelector, tuna.ui.modules.Module);

    ItemSelector.prototype._initInstance = function(target) {
        var selector = new tuna.ui.ItemSelector(target, '.j-selection-item');
        selector.setNavigationButtonSelectors('.j-selection-next', '.j-selection-prev');
        selector.init();

        return selector;
    };

    tuna.ui.modules.register(new ItemSelector());

})();