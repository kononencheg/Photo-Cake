(function() {

    // TODO: Make module class

    tuna.ui.modules.register('template-container', {
        init: function(context, container) {
            var targets = Sizzle('.j-template-container', context);

            var i = 0,
                l = targets.length;

            while (i < l) {
                initContainer(targets[i], container);
                i++;
            }
        }
    });

    var templateBuilder = new tuna.tmpl.MarkupTemplateBuilder(document);
    var templateCompiler = new tuna.tmpl.TemplateCompiler(document);

    var templateTable = {};

    function getTemplate(id) {
        if (templateTable[id] === undefined) {
            templateTable[id] = templateBuilder.buildTemplate(id);
        }

        return templateTable[id];
    }

    function initContainer(target, parent) {
        var template = getTemplate(target.getAttribute('data-template-id'));
        var dbPath = target.getAttribute('data-db-path');

        var container = new tuna.ui.TemplateContainer(target, parent);
        container.setTemplateCompiler(templateCompiler);
        container.setTemplate(template);
        container.setDBPath(dbPath);

        var controller = tuna.control.ViewController.fetchController(target);
        if (controller !== undefined) {
            controller.prepare(container);
        }

        var templateURL = target.getAttribute('data-template-url');
        if (templateURL !== null) {
            var initEvent = target.getAttribute('data-init-on');

            if (initEvent !== null) {
                tuna.dom.addOneEventListener(target, initEvent, function() {
                    loadTemplate(templateURL, container, controller);
                });
            } else {
                loadTemplate(templateURL, container, controller);
            }
        }
    }
    
    function loadTemplate(url, container, controller) {
        var request = new tuna.net.Request(url);
        request.subscribe('complete', function(type, response) {
            container.render(tuna.dom.createFragment(response, document));

            if (controller !== undefined) {
                container.setChildHandler(controller);
                controller.init();
            }
        });
        
        request.send();
    }

})();
