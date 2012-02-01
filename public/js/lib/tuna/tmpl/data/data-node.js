/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace('tuna.tmpl.data');

    /**
     * @constructor
     * @param {*} value
     * @param {tuna.tmpl.data.DataNode=} parent
     * @param {string=} key
     */
    tuna.tmpl.data.DataNode = function(value, parent, key) {
        this.__value = value;
        this.__parent = parent || null;
        this.__key = key || null;

        this.__children = {};
    };

    tuna.tmpl.data.DataNode.NULL_NODE = new tuna.tmpl.data.DataNode(null);

    tuna.tmpl.data.DataNode.prototype.getParent = function() {
        return this.__parent;
    };

    tuna.tmpl.data.DataNode.prototype.getKey = function() {
        return this.__key;
    };

    tuna.tmpl.data.DataNode.prototype.getRoot = function() {
        return this.__parent !== null ? this.__parent.getRoot() : this;
    };

    tuna.tmpl.data.DataNode.prototype.getValue = function() {
        return this.__value;
    };

    tuna.tmpl.data.DataNode.prototype.growChild = function(key) {
        var result = null;

        if (this.__children[key] !== undefined) {
            result = this.__children[key];
        } else if (this.__value !== null) {
            var keyValue = this.__value[key];
            if (keyValue !== undefined) {
                result = this.__children[key]
                    = new tuna.tmpl.data.DataNode(keyValue, this, key);

            } else {
                this.__children[key] = tuna.tmpl.data.DataNode.NULL_NODE;
            }
        }

        return result;
    };

})();