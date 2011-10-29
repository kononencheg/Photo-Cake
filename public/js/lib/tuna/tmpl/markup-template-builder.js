/**
 * TUNA FRAMEWORK
 * 
 * @file markup-template-builder.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

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

    /**
     * Build template from markup.
     *
     * @param {Element} markupNode Element with markup inside.
     */
    MarkupTemplateBuilder.prototype.buildTemplate = function(templateID) {

        var templateNode = this.__doc.getElementById(templateID);
        if (templateNode === null) {
            console.error('Cannot find template node with id "' + templateID + '"')
        }

        var template = this.__templatesTable[templateID]
                        = new tuna.tmpl.Template();

        this.__extractSpots(templateNode.getElementsByTagName('tuna:spot'), template);
        this.__extractAttributes(templateNode.getElementsByTagName('tuna:attr'), template);
        this.__extractLists(templateNode.getElementsByTagName('tuna:list'), template);

        return template;
    };


    MarkupTemplateBuilder.prototype.__extractAttributes = function(spotNodes, template) {
        var i = 0,
            l = spotNodes.length;

        var attr = null;
        while (i < l) {
            attr = new tuna.tmpl.Attribute();

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
            spot = new tuna.tmpl.Spot();

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
            list = new tuna.tmpl.List();
            listNode = listNodes.item(i);

            this.__nodeToSpot(listNode, list);
            this.__nodeToList(listNode, list);

            template.addList(list);

            i++;
        }
    };

    MarkupTemplateBuilder.prototype.__nodeToSpot = function(node, spot) {
        spot.setTargetClass(node.getAttribute('tuna:class'));
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

    tuna.tmpl.MarkupTemplateBuilder = MarkupTemplateBuilder;

})();
