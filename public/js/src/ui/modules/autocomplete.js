(function() {
    var Autocomplete = function() {
        tuna.ui.modules.Module.call(this, 'autocomplete', '.j-autocomplete');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compile.TemplateCompiler(document);

        this.__selectionModule = null;
    };

    tuna.extend(Autocomplete, tuna.ui.modules.Module);

    Autocomplete.prototype._initInstance = function(target) {

        var templateID  = target.getAttribute('data-template-id');
        var template = this.__templateBuilder.buildTemplate(templateID);
        var transformer
            = this.__templateCompiler.makeTransformer(template, target);

        var selectionGroup = this._initSelectionGroup(target);

        var autocomplete
            = new ui.Autocomplete(tuna.dom.selectOne('.j-autocomplete-input'));

        autocomplete.setTransformer(transformer);
        autocomplete.setSelectionGroup(selectionGroup);
        autocomplete.init();

        return autocomplete;
    };

    Autocomplete.prototype._initSelectionGroup = function(target) {
        var selectionRule = new tuna.ui.selection.rule.SingleSelectionRule();

        var selectionView
            = new tuna.ui.selection.view.ClassSelectionView(target);

        selectionView.setItemSelector('.j-autocomplete-item');
        selectionView.setSelectedClass('current');

        var itemsCollection
            = new tuna.ui.selection.items.ElementsCollection();

        var selectionGroup = new tuna.ui.selection.SelectionGroup();
        selectionGroup.setSelectionRule(selectionRule);
        selectionGroup.setSelectionView(selectionView);
        selectionGroup.setItemsCollection(itemsCollection);

        selectionGroup.init();

        tuna.dom.addChildEventListener(
            target, '.j-autocomplete-item', 'click', function(event) {
                tuna.dom.stopPropagation(event);

                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );

        return selectionGroup;
    };

    tuna.ui.modules.register(new Autocomplete());

})();