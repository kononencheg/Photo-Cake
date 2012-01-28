(function() {
    var Autocomplete = function() {
        tuna.ui.modules.Module.call(this, 'autocomplete', '.j-autocomplete');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compile.TemplateCompiler(document);
    };

    tuna.extend(Autocomplete, tuna.ui.modules.Module);

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

                        tuna.dom.addClass(body, 'hidden');
                        isOpen = false;
                    }
                );

                tuna.dom.removeClass(body, 'hidden');

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

        autocomplete.init();

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