/**
 * TUNA FRAMEWORK
 * 
 * @file template-compiler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl");


    /**
     * @public
     * @class
     * @implements {tuna.tmpl.ITemplateCompiler}
     *
     * @constructor
     */
    var TemplateCompiler = function(doc) {
        this.__doc = doc;
    };

    tuna.implement(TemplateCompiler, tuna.tmpl.ITemplateCompiler);

    /**
     * Compiling template with target DOM element.
     *
     * @param {tuna.tmpl.Template} template Template to compile.
     * @param {Element} element Target DOM element.
     * @return {tuna.tmpl.TemplateTransformer} New template transformer.
     */
    TemplateCompiler.prototype.makeTransformer = function(template, element) {
        var transformer = new tuna.tmpl.TemplateTransformer();
        transformer.setTargetElement(element);
        transformer.setCore(this.compileTemplate(template, element));

        return transformer;
    };

    TemplateCompiler.prototype.compileTemplate = function(template, element, root) {
        var compiledTemplate = new tuna.tmpl.__CompiledTemplate(root);
        compiledTemplate.setTarget(element);

        this.__compileSpots(compiledTemplate, template, element);
        this.__compileAttributes(compiledTemplate, template, element);
        this.__compileLists(compiledTemplate, template, element);

        return compiledTemplate;
    };

    TemplateCompiler.prototype.__compileLists = function(template, source, element) {
        var list = null;
        var nodes = null;
        var targetClass = null;

        var i = source.getListsCount() - 1, j;
        while (i >= 0) {
            list = source.getListAt(i);
            targetClass = list.getTargetClass();

            if (tuna.dom.hasClass(element, targetClass)) {
                nodes = [element];
            } else {
                nodes = Sizzle('.' + targetClass, element);
            }

            this.__handleListNodes(template, list, nodes, element);

            i--;
        }
    };

    TemplateCompiler.prototype.__compileSpots = function(template, source, element) {
        var spot = null;

        var i = source.getSpotsCount() - 1;
        while (i >= 0) {
            spot = new tuna.tmpl.__CompiledSpot(template.getRootTemplate());

            this.__compileSpot(spot, source.getSpotAt(i), element);

            template.addSpot(spot);

            i--;
        }
    };

    TemplateCompiler.prototype.__compileAttributes = function(template, source, element) {

        var attr = null;

        var i = source.getAttributesCount() - 1;
        while (i >= 0) {
            attr = new tuna.tmpl.__CompiledAttribute(template.getRootTemplate());

            this.__compileAttribute(attr, source.getAttributeAt(i), element);

            template.addAttribute(attr);

            i--;
        }
    };

    TemplateCompiler.prototype.__compileSpot = function(spot, source, element) {
        spot.setPath(source.getDataPath());

        var targetClass = source.getTargetClass();
        if (tuna.dom.hasClass(element, targetClass)) {
            // Например если шаблоном является элемент списка
            spot.addTargets(element);
        } else {
            spot.addTargets(Sizzle('.' + targetClass, element));
        }
    };

    TemplateCompiler.prototype.__compileAttribute = function(attr, source, element) {
        this.__compileSpot(attr, source, element);

        attr.setAttributeName(source.getAttributeName());
        attr.setEvent(source.hasEvent());
    };

    TemplateCompiler.prototype.__handleListNodes = function(template, source, nodes, element) {
        var node = null;
        var list = null;

        var i = nodes.length - 1;
        while (i >= 0) {
            node = nodes[i];

            if (tuna.dom.getParentWithClass
                    (node, source.getTargetClass(), element) === null) {

                list = new tuna.tmpl.__CompiledList(template.getRootTemplate());

                this.__compileList(list, source, node);

                template.addList(list);
            }

            i--;
        }
    };

    TemplateCompiler.prototype.__compileList = function(list, source, listNode) {
        list.setCompiler(this);
        list.setItemRenderer(this.__doc.getElementById(source.getItemRendererID()));
        list.setItemTemplate(source.getItemTemplate());
        list.setKeyPath(source.getItemKeyDataPath());
        list.setPath(source.getDataPath());

        //this.__resurrectNodesInside(listNode, source, list);

        list.setListNodeRouter(new tuna.tmpl.__ListContainerRouter(listNode));
    };

    TemplateCompiler.prototype.__resurrectNodesInside = function(element, list, compiledList) {
        var deadNodes = element.childNodes;
        var i = deadNodes.length - 1;

        var node = null;
        while (i >= 0) {
            node = deadNodes[i];
            if (node.nodeType === Node.ELEMENT_NODE) {
                this.__resurrectNode(node, list, compiledList);
            }

            i--;
        }

    };

    TemplateCompiler.prototype.__resurrectNode = function(node, list, compiledList) {

        var key = this.__getItemKey(node.className, list.getTargetClass());

        if (key) {
            compiledList.addCompiledItem
                (this.compileTemplate(list.getItemTemplate(), node), key);
        }

        return key;
    };

    TemplateCompiler.prototype.__getItemKey = function(itemClass, targetClass) {
        var result = null;

        var keyPart = itemClass.split(targetClass + ':')[1];
        if (keyPart) {
            result = keyPart.split(' ')[0];
        }

        return result;
    };

    tuna.tmpl.TemplateCompiler = TemplateCompiler;

})();
