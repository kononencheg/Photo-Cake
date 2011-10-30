(function() {

    // TODO: Rename into ViewStack

    var ItemSelector = function() {
        tuna.ui.modules.Module.call(this, 'item-selector', '.j-item-selector');
    };

    tuna.extend(ItemSelector, tuna.ui.modules.Module);

    ItemSelector.prototype._initItem = function(target) {
        var selector = new tuna.ui.ItemSelector(target, '.j-selection-item');
        selector.setNavigationButtonSelectors('.j-selection-next', '.j-selection-prev');
        selector.init();
    };

    tuna.ui.modules.register(new ItemSelector());

})();