(function() {

    var Navigation = function() {
        tuna.ui.modules.Module.call(this, 'navigation', '.j-navigation');

        this.__pageSelector = '.j-navigation-page';
        this.__linkSelector = '.j-navigation-link';
    };

    tuna.extend(Navigation, tuna.ui.modules.Module);

    Navigation.prototype._initInstance = function(target) {

        var selectionRule = new tuna.ui.selection.rule.SingleSelectionRule();

        var selectionView
            = new tuna.ui.selection.view.ClassSelectionView(target);


        selectionView.setItemSelector(this.__pageSelector);
        selectionView.setSelectedClass('current');

        var itemsCollection
            = new tuna.ui.selection.items.NamedElementsCollection();

        var selectionGroup = new tuna.ui.selection.SelectionGroup();
        selectionGroup.setSelectionRule(selectionRule);
        selectionGroup.setSelectionView(selectionView);
        selectionGroup.setItemsCollection(itemsCollection);

        selectionGroup.addEventListener('selected', function(event, index) {
            tuna.dom.dispatchEvent
                (selectionGroup.getItemAt(index), 'ui-navigate');
        });

        selectionGroup.init();

        tuna.dom.addChildEventListener(
            target, this.__linkSelector, 'click', function(event) {
                tuna.dom.stopPropagation(event);

                var index = this.getAttribute('data-href');
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );

        return selectionGroup;
    };

    tuna.ui.modules.register(new Navigation());

})();