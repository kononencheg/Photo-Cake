(function() {

    var TemplateContainer = function() {
        tuna.ui.modules.Module.call(this, 'template-container', '.j-template-container');

        this.__templateBuilder = new tuna.tmpl.MarkupTemplateBuilder(document);
        this.__templateCompiler = new tuna.tmpl.TemplateCompiler(document);

        this.__templatesTable = {};
    };

    tuna.extend(TemplateContainer, tuna.ui.modules.Module);

    TemplateContainer.prototype.__getTemplate = function(id) {
        if (this.__templatesTable[id] === undefined) {
            this.__templatesTable[id] = this.__templateBuilder.buildTemplate(id);
        }

        return this.__templatesTable[id];
    };

    TemplateContainer.prototype.__initContainer = function(container, template) {
        var transformer = this.__templateCompiler.makeTransformer
                                    (template, container.getTarget());

        container.setTransformer(transformer);

        var controller = tuna.control.ViewController.getController
                                                (container.getTarget());
        if (controller !== undefined) {
            controller.setContainer(container);
            controller.setDB(container.getDB());
            controller.init();

            transformer.setTransformHandler(controller);
        }
    };

    TemplateContainer.prototype._initItem = function(target, parentContainer) {
        var templateURL = target.getAttribute('data-template-url');
        var templateID  = target.getAttribute('data-template-id');
        var initEvent   = target.getAttribute('data-init-on');
        var dbPath      = target.getAttribute('data-db-path');

        var container = new tuna.ui.TemplateContainer(target, parentContainer);
        container.setDBPath(dbPath);

        var self = this;
        
        if (templateURL !== null) {
            var request = new tuna.net.Request(templateURL);
            request.subscribe('complete', function(type, response) {
                container.render(tuna.dom.createFragment(response, document));

                self.__initContainer(container, self.__getTemplate(templateID));
            });

            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, function() {
                    request.send();
                });
            } else {
                request.send();
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

    tuna.ui.modules.register(new TemplateContainer());
})();
