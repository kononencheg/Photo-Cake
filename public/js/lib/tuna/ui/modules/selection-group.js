(function() {

    var SelectionGroup = function() {
        tuna.ui.modules.Module.call(this, 'selection-group', '.j-selection-group');
    };

    tuna.extend(SelectionGroup, tuna.ui.modules.Module);

    SelectionGroup.prototype._initInstance
        = function(target, container, options) {

        var selectionEvent = target.getAttribute('data-selection-event');
        if (selectionEvent === null) {
            selectionEvent = 'click';
        }

        var selectionRule = new tuna.ui.selection.rule.SingleSelectionRule();

        var selectionView
            = new tuna.ui.selection.view.ClassSelectionView(target);

        selectionView.setItemSelector('.j-selection-item');
        selectionView.setSelectedClass('current');

        var itemsCollection
            = new tuna.ui.selection.items.ElementsCollection();

        var selectionGroup = new tuna.ui.selection.SelectionGroup();
        selectionGroup.setSelectionRule(selectionRule);
        selectionGroup.setSelectionView(selectionView);
        selectionGroup.setItemsCollection(itemsCollection);

        selectionGroup.init();

        tuna.dom.addChildEventListener(
            target, '.j-selection-item', selectionEvent, function(event) {
                tuna.dom.stopPropagation(event);

                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );

        return selectionGroup;
    };



    tuna.ui.modules.register(new SelectionGroup());

})();