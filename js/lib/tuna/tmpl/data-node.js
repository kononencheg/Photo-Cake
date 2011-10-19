/**
 * TUNA FRAMEWORK
 * 
 * @file data-node.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var DataNode = function(value, parent) {
        this.__value = value;
        this.__parent = parent;

        this.__children = {};
    };

    DataNode.NULL_NODE = new DataNode();

    DataNode.prototype.getParent = function() {
        return this.__parent;
    };

    DataNode.prototype.getRoot = function() {
        return this.__parent ? this.__parent.getRoot() : this;
    };

    DataNode.prototype.growChild = function(key) {
        var result = this.__children[key];

        if (result === undefined &&
            this.__value !== undefined &&
            this.__value !== null) {
            
            var keyValue = this.__value[key];
            if (keyValue !== undefined) {
                result = this.__children[key] = new DataNode(keyValue, this);
            } else {
                this.__children[key] = DataNode.NULL_NODE;
            }
        }

        return result;
    };

    DataNode.prototype.getValue = function() {
        return this.__value;
    };

    tuna.tmpl.__DataNode = DataNode;
})();