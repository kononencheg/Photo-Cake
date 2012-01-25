(function() {
    var Autocomplete = function() {
        tuna.ui.modules.Module.call(this, 'autocomplete', '.j-autocomplete');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compile.TemplateCompiler(document);
    };

    tuna.extend(Autocomplete, tuna.ui.modules.Module);

    Autocomplete.prototype._initInstance = function(target) {
        var transformer = this._initTransformer(target);
        var selectionGroup = this._initSelectionGroup(target);

        var autocomplete = new ui.Autocomplete(selectionGroup, transformer);

        var input = tuna.dom.selectOne('.j-autocomplete-input', target);
        var selectedIndex = -1;

        var lastValue = null;
        tuna.dom.addEventListener(input, 'keyup', function(event) {
            if (input.value !== lastValue) {
                autocomplete.complete(lastValue = input.value);
                selectedIndex = -1;
            }
        });

        var hasEventListener = false;
        tuna.dom.addEventListener(input, 'focus', function(event) {
            if (!hasEventListener) {
                tuna.dom.addOneEventListener(document.body, 'click', function() {
                    if (selectedIndex === -1) {
                        autocomplete.complete(input.value = '');
                    }

                    hasEventListener = false;
                });

                hasEventListener = true;
            }
        });

        tuna.dom.addEventListener(input, 'click', function(event) {
            tuna.dom.stopPropagation(event);
        });

        tuna.dom.addChildEventListener(
            target, '.j-autocomplete-item', 'click', function(event) {
                tuna.dom.stopPropagation(event);

                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    input.value = autocomplete.getValueAt(index);
                    selectedIndex = index;
                }
            }
        );



        return autocomplete;
    };

    Autocomplete.prototype._initTransformer = function(target) {
        var templateId  = target.getAttribute('data-template-id');
        var template = this.__templateBuilder.buildTemplate(templateId);

        return this.__templateCompiler.makeTransformer(template, target);
    };

    Autocomplete.prototype._initSelectionGroup = function(target) {
        var isMultiple = target.getAttribute('data-is-multiple') === 'true';

        var selectionGroup = new tuna.ui.selection.SelectionGroup
                (target, isMultiple, null, '.j-autocomplete-item', 'current');

        return selectionGroup;
    };

    tuna.ui.modules.register(new Autocomplete());

})();