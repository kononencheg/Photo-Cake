/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl.unit");

    var Template = function(rootTemplate) {
        tuna.tmpl.unit.CompiledUnit.call(this, rootTemplate || this);

        this.__spots = [];
        this.__lists = [];

        this.__createdChildren = [];
        this.__removedChildren = [];

        this.__target = null;
    };

    tuna.extend(Template, tuna.tmpl.unit.CompiledUnit);

    Template.prototype.setTarget = function(element) {
        this.__target = element;
    };

    Template.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    Template.prototype.addList = function(list) {
        this.__lists.push(list);
    };

    Template.prototype.addCreatedChild = function(child) {
        this.__createdChildren.push(child);
    };

    Template.prototype.fetchCreatedChildren = function() {
        return this.__createdChildren.splice(0, this.__createdChildren.length);
    };

    Template.prototype.addRemovedChild = function(child) {
        this.__removedChildren.push(child);
    };

    Template.prototype.fetchRemovedChildren = function() {
        return this.__removedChildren.splice(0, this.__removedChildren.length);
    };

    Template.prototype.applyData = function(dataNode) {
        var i = this.__spots.length - 1;
        while (i >= 0) {
            this.__spots[i].applyData(dataNode);

            i--;
        }

        i = this.__lists.length - 1;
        while (i >= 0) {
            this.__lists[i].applyData(dataNode);

            i--;
        }
    };

    Template.prototype.destroy = function() {
        var i = this.__lists.length - 1;
        while (i >= 0) {
            this.__lists[i].destroy();

            i--;
        }

        this.__target.parentNode.removeChild(this.__target);

        this.getRootTemplate().addRemovedChild(this.__target);
    };

    tuna.tmpl.unit.Template = Template;
})();