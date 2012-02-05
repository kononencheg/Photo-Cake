(function() {
    var Autocomplete = function() {
        tuna.ui.Module.call(this, '.j-autocomplete');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compilers.TemplateCompiler(document);
    };

    tuna.utils.extend(Autocomplete, tuna.ui.Module);

    Autocomplete.prototype.initInstance = function(target) {
        var transformer = this._initTransformer(target);
        var selectionGroup = this._initSelectionGroup(target);

        var input = tuna.dom.selectOne('.j-autocomplete-input', target);
        var body = tuna.dom.selectOne('.j-autocomplete-body', target);

        var autocomplete
            = new ui.Autocomplete(input, transformer, selectionGroup);

        var isOpen = false;
        tuna.dom.addEventListener(input, 'focus', function(event) {
            if (!isOpen) {
                tuna.dom.addOneEventListener(
                    document.body, 'click', function() {
                        var data = autocomplete.getSelectedData();
                        if (data === null) {
                            autocomplete.clear();
                        }

                        tuna.dom.addClass(body, 'hide');
                        isOpen = false;
                    }
                );

                tuna.dom.removeClass(body, 'hide');

                isOpen = true;
            }
        });

        tuna.dom.addEventListener(input, 'click', function(event) {
            tuna.dom.stopPropagation(event);
        });

        tuna.dom.addChildEventListener(
            target, '.j-autocomplete-item', 'click', function(event) {
                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    autocomplete.selectIndex(index);
                } else {
                    tuna.dom.stopPropagation(event);
                }
            }
        );

        return autocomplete;
    };

    Autocomplete.prototype._initTransformer = function(target) {
        var templateId  = target.getAttribute('data-template-id');
        var settings = this.__templateBuilder.buildSettings(templateId);

        return this.__templateCompiler.makeTransformer(settings, target);
    };

    Autocomplete.prototype._initSelectionGroup = function(target) {
        var selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);
        selectionGroup.setOption('item-selector', '.j-autocomplete-item');
        selectionGroup.init();

        return selectionGroup;
    };

    tuna.ui.modules.register('autocomplete', new Autocomplete());

})();