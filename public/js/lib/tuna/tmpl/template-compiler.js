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
     *
     * @constructor
     */
    var TemplateCompiler = function(doc) {
        this.__doc = doc;
    };

    /**
     * Compiling template with target DOM element.
     *
     * @param {tuna.tmpl.settings.Template} template Template to compile.
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
        var compiledTemplate = new tuna.tmpl.unit.Template(root);
        compiledTemplate.setTarget(element);

        this.__compileSpots(compiledTemplate, template, element);
        this.__compileAttributes(compiledTemplate, template, element);
        this.__compileConditions(compiledTemplate, template, element);
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

    TemplateCompiler.prototype.__compileConditions = function(template, source, element) {
        var cond = null;

        var i = source.getConditionsCount() - 1;
        while (i >= 0) {
            cond = new tuna.tmpl.unit.Condition(template.getRootTemplate());

            this.__compileCondition(cond, source.getConditionAt(i), element);

            template.addSpot(cond);

            i--;
        }
    };

    TemplateCompiler.prototype.__compileSpots = function(template, source, element) {
        var spot = null;

        var i = source.getSpotsCount() - 1;
        while (i >= 0) {
            spot = new tuna.tmpl.unit.Spot(template.getRootTemplate());

            this.__compileSpot(spot, source.getSpotAt(i), element);

            template.addSpot(spot);

            i--;
        }
    };

    TemplateCompiler.prototype.__compileAttributes = function(template, source, element) {

        var attr = null;

        var i = source.getAttributesCount() - 1;
        while (i >= 0) {
            attr = new tuna.tmpl.unit.Attribute(template.getRootTemplate());

            this.__compileAttribute(attr, source.getAttributeAt(i), element);

            template.addSpot(attr);

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

    TemplateCompiler.prototype.__compileCondition = function(cond, source, element) {
        this.__compileSpot(cond, source, element);

        cond.setAction(source.getAction());
        cond.setOperator(source.getOperator());
    };

    TemplateCompiler.prototype.__handleListNodes = function(template, source, nodes, element) {
        var node = null;
        var list = null;

        var i = nodes.length - 1;
        while (i >= 0) {
            node = nodes[i];

            if (tuna.dom.getParentWithClass
                    (node, source.getTargetClass(), element) === null) {

                list = new tuna.tmpl.unit.List(template.getRootTemplate());

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
            compiledList.addItem
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
