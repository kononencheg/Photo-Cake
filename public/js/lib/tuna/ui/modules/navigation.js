(function() {

    var Navigation = function() {
        tuna.ui.modules.Module.call(this, 'navigation', '.j-navigation');
    };

    tuna.extend(Navigation, tuna.ui.modules.Module);

    Navigation.prototype._initInstance = function(target) {

        var selectionGroup = new tuna.ui.selection.SelectionGroup
            (target, false, 'id', '.j-navigation-page', 'current');

        selectionGroup.addEventListener('selected', function(event, index) {
            tuna.dom.dispatchEvent
                (selectionGroup.getItemAt(index), 'ui-navigate');
        });

        tuna.dom.addChildEventListener(
            target, '.j-navigation-link', 'click', function(event) {
                var index = this.getAttribute('data-href');
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );

        selectionGroup.init();

        return selectionGroup;
    };

    tuna.ui.modules.register(new Navigation());

})();