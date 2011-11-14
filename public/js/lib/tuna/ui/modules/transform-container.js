(function() {

    var TransformContainer = function() {
        tuna.ui.modules.Module.call(this, 'transform-container', '.j-transform-container');

        this.__templateBuilder = new tuna.tmpl.markup.MarkupTemplateBuilder(document);
        this.__templateCompiler = new tuna.tmpl.compile.TemplateCompiler(document);

        this.__templatesTable = {};
    };

    tuna.extend(TransformContainer, tuna.ui.modules.Module);

    TransformContainer.prototype.__getTemplate = function(id) {
        if (this.__templatesTable[id] === undefined) {
            this.__templatesTable[id] = this.__templateBuilder.buildTemplate(id);
        }

        return this.__templatesTable[id];
    };

    TransformContainer.prototype.__initContainer = function(container, template) {
        var transformer = null;
        if (template !== null) {
            transformer = this.__templateCompiler.makeTransformer
                                        (template, container.getTarget());

            container.setTransformer(transformer);
        }

        var controller = tuna.view.ViewController.getController
                                                (container.getTarget());
        if (controller !== undefined) {
            if (transformer !== null) {
                transformer.setTransformHandler(controller);
            }

            // TODO: set contoller to transform container (maybe create СontrolledContainer)
            controller.bind(container);
            controller.init();
        }
    };

    TransformContainer.prototype._initInstance = function(target, parentContainer) {
        var contentPath = target.getAttribute('data-content-path');
        var templateID = target.getAttribute('data-template-id');
        var initEvent  = target.getAttribute('data-init-on');
        var dbPath     = target.getAttribute('data-db-path');

        var container = new tuna.ui.TransformContainer(target, parentContainer);
        container.setDBPath(dbPath);

        var self = this;
        
        if (contentPath !== null) {
            var contentHandler = function(contentFragment) {
                container.render(contentFragment);
                self.__initContainer(container, self.__getTemplate(templateID));
            };

            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, function() {
                    tuna.view.contentFactory.create(contentPath, contentHandler);
                });
            } else {
                tuna.view.contentFactory.create(contentPath, contentHandler);
            }
        } else {
            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, function() {
                    self.__initContainer(container, self.__getTemplate(templateID));
                });
            } else {
                this.__initContainer(container, this.__getTemplate(templateID));
            }

        }

        return container;
    };

    tuna.ui.modules.register(new TransformContainer());
})();
