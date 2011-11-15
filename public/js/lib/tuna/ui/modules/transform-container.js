(function() {

    var TransformContainer = function() {
        tuna.ui.modules.Module.call
            (this, 'transform-container', '.j-transform-container');

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
        var contentPath = target.getAttribute('data-content-path');
        var templateID  = target.getAttribute('data-template-id');
        var initEvent   = target.getAttribute('data-init-on');

        var container = new tuna.ui.TransformContainer(target, parent);

        var self = this;
        
        var initContainer = function(content) {
            self.__initContainer(container, self.__getTemplate(templateID));
            container.render(content);
        };

        var fetchContent = function() {
            tuna.view.contentOrigin.fetch(contentPath, initContainer);
        };

        if (contentPath !== null) {
            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, fetchContent);
            } else {
                fetchContent();
            }
        } else {
            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, initContainer);
            } else {
                initContainer();
            }
        }

        return container;
    };

    tuna.ui.modules.register(new TransformContainer());
})();
