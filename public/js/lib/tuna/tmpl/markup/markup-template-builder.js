/**
 * TUNA FRAMEWORK
 * 
 * @file markup-template-builder.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl.markup");

    /**
     * Template transformer compiler from markup source.
     *
     * TODO: Template origin in iframe (set current and origin document).
     *
     * @public
     * @class
     * @constructor
     */
    var MarkupTemplateBuilder = function(doc) {
        this.__doc = doc;
        this.__templatesTable = {};
    };

    MarkupTemplateBuilder.__conditionAttrs = [
        tuna.tmpl.settings.Condition.IS_SET,
        tuna.tmpl.settings.Condition.EQUALS,
        tuna.tmpl.settings.Condition.NOT_EQUALS
    ];

    /**
     * Build template from markup.
     *
     * @param {Element} markupNode Element with markup inside.
     */
    MarkupTemplateBuilder.prototype.buildTemplate = function(templateID) {
        var template = null;

        var templateNode = this.__doc.getElementById(templateID);
        if (templateNode !== null) {
            this.__templatesTable[templateID] = template = new tuna.tmpl.settings.Template();

            // TODO: Make extractor class
            this.__extractSpots(templateNode.getElementsByTagName('tuna:spot'), template);
            this.__extractAttributes(templateNode.getElementsByTagName('tuna:attr'), template);
            this.__extractConditions(templateNode.getElementsByTagName('tuna:if'), template);
            this.__extractLists(templateNode.getElementsByTagName('tuna:list'), template);
        }

        return template;
    };

    MarkupTemplateBuilder.prototype.__extractConditions = function(spotNodes, template) {
        var i = 0,
            l = spotNodes.length;

        var cond = null;
        while (i < l) {
            cond = new tuna.tmpl.settings.Condition();

            this.__nodeToSpot(spotNodes.item(i), cond);
            this.__nodeToCondition(spotNodes.item(i), cond);

            template.addCondition(cond);

            i++;
        }
    };

    MarkupTemplateBuilder.prototype.__extractAttributes = function(spotNodes, template) {
        var i = 0,
            l = spotNodes.length;

        var attr = null;
        while (i < l) {
            attr = new tuna.tmpl.settings.Attribute();

            this.__nodeToSpot(spotNodes.item(i), attr);
            this.__nodeToAttribute(spotNodes.item(i), attr);

            template.addAttribute(attr);

            i++;
        }
    };
    
    MarkupTemplateBuilder.prototype.__extractSpots = function(spotNodes, template) {

        var i = 0,
            l = spotNodes.length;

        var spot = null;
        while (i < l) {
            spot = new tuna.tmpl.settings.Spot();

            this.__nodeToSpot(spotNodes.item(i), spot);

            template.addSpot(spot);

            i++;
        }
    };

    MarkupTemplateBuilder.prototype.__extractLists
        = function(listNodes, template) {

        var i = 0,
            l = listNodes.length;

        var list = null;
        var listNode = null;
        while (i < l) {
            list = new tuna.tmpl.settings.List();
            listNode = listNodes.item(i);

            this.__nodeToSpot(listNode, list);
            this.__nodeToList(listNode, list);

            template.addList(list);

            i++;
        }
    };

    MarkupTemplateBuilder.prototype.__nodeToSpot = function(node, spot) {
        spot.setTargetClass(node.getAttribute('tuna:target'));
        spot.setDataPath(node.getAttribute('tuna:path'));
    };

    MarkupTemplateBuilder.prototype.__nodeToAttribute = function(node, attr) {
        attr.setAttributeName(node.getAttribute('tuna:name'));
        attr.setEvent(node.getAttribute('tuna:event') !== null);
    };

    MarkupTemplateBuilder.prototype.__nodeToList = function(node, list) {
        list.setItemRendererID(node.getAttribute('tuna:item-renderer-id'));
        list.setItemKeyDataPath(node.getAttribute('tuna:key-path'));

        var templateID = node.getAttribute('tuna:item-template-id');

        var template = this.__templatesTable[templateID];
        if (!template) {
            template = this.buildTemplate(templateID);
        }

        list.setItemTemplate(template);
    };

    MarkupTemplateBuilder.prototype.__nodeToCondition = function(node, cond) {
        this.__findOperator(node, cond);
        this.__findClassAction(node, cond);
    };

    MarkupTemplateBuilder.prototype.__findClassAction = function(node, cond) {
        cond.setAction(
            tuna.tmpl.settings.Condition.CLASS,
            node.getAttribute('tuna:' + tuna.tmpl.settings.Condition.CLASS)
        );
    };

    MarkupTemplateBuilder.prototype.__findOperator = function(node, cond) {
        var attrs = MarkupTemplateBuilder.__conditionAttrs;

        var i = 0,
            l = attrs.length;

        var type = null;
        var value = null;
        while (i < l) {
            type = attrs[i];
            value = node.getAttribute('tuna:' + type);

            if (value !== null) {
                cond.setOperator(type, value);
                break;
            }

            i++;
        }
    };

    tuna.tmpl.markup.MarkupTemplateBuilder = MarkupTemplateBuilder;

})();
