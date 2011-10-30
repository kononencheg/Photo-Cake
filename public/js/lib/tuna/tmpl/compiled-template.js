/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl");

    var CompiledTemplate = function(rootTemplate) {
        tuna.tmpl.__CompiledUnit.call(this, rootTemplate || this);

        this.__spots = [];
        this.__lists = [];
        this.__attrs = [];

        this.__childHadler = null;

        this.__target = null;
    };

    tuna.extend(CompiledTemplate, tuna.tmpl.__CompiledUnit);

    CompiledTemplate.prototype.setTarget = function(element) {
        this.__target = element;
    };

    CompiledTemplate.prototype.addAttribute = function(attr) {
        this.__attrs.push(attr);
    };

    CompiledTemplate.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    CompiledTemplate.prototype.addList = function(list) {
        this.__lists.push(list);
    };

    CompiledTemplate.prototype.setChildHandler = function(childHandler) {
        this.__childHadler = childHandler;
    };

    CompiledTemplate.prototype.handleCreatedChild = function(node) {
        if (this.__childHadler !== null) {
            this.__childHadler.handleCreatedElement(node);
        }
    };

    CompiledTemplate.prototype.handleRemovedChild = function(node) {
        if (this.__childHadler !== null) {
            this.__childHadler.handleRemovedElement(node);
        }
    };

    CompiledTemplate.prototype.applyData = function(dataNode) {
        var i = this.__spots.length - 1;
        while (i >= 0) {
            this.__spots[i].applyData(dataNode);

            i--;
        }

        i = this.__attrs.length - 1;
        while (i >= 0) {
            this.__attrs[i].applyData(dataNode);

            i--;
        }

        i = this.__lists.length - 1;
        while (i >= 0) {
            // TODO: collect new and deleted list items recursively
            this.__lists[i].applyData(dataNode);

            i--;
        }
    };

    CompiledTemplate.prototype.destroy = function() {
        var i = this.__lists.length - 1;
        while (i >= 0) {
            this.__lists[i].destroy();

            i--;
        }

        this.__target.parentNode.removeChild(this.__target);

        this.getRootTemplate().handleRemovedChild(this.__target);
    };

    tuna.tmpl.__CompiledTemplate = CompiledTemplate;
})();