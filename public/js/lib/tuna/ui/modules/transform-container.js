(function() {

    var TransformContainer = function() {
        tuna.ui.modules.Module.call(
            this, 'transform-container',
            '.' + tuna.ui.modules.Module.CONTAINER_CLASS
        );

        this._useContext = false;

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler 
            = new tuna.tmpl.compile.TemplateCompiler(document);

        this.__templatesTable = {};
    };

    tuna.extend(TransformContainer, tuna.ui.modules.Module);

    TransformContainer.prototype.__getTemplate = function(id) {
        if (this.__templatesTable[id] === undefined) {
            this.__templatesTable[id]
                = this.__templateBuilder.buildTemplate(id);
        }

        return this.__templatesTable[id];
    };

    TransformContainer.prototype.__initContainer
        = function(container, template) {

        if (template !== null) {
            var target = container.getTarget();
            var transformer
                = this.__templateCompiler.makeTransformer(template, target);

            container.setTransformer(transformer);
        }

        container.initControl();
    };

    TransformContainer.prototype._initInstance = function(target, parent) {
        var self = this;

        var templateID  = target.getAttribute('data-template-id');
        var initEvent   = target.getAttribute('data-init-event');

        var container = new tuna.ui.TransformContainer(target, parent);

        var initContainer = function() {
            var template = self.__getTemplate(templateID);
            if (template !== null) {
                var transformer
                    = self.__templateCompiler.makeTransformer(template, target);

                container.setTransformer(transformer);
            }

            container.init();
        };

        if (initEvent !== null) {
            tuna.dom.addOneEventListener(target, initEvent, initContainer);
        } else {
            initContainer();
        }

        return container;
    };

    //TODO: сделать главный модуль-контейнер, из котрого потом брать класс
    tuna.ui.modules.register(new TransformContainer());
})();
