(function() {
    tuna.namespace('tuna.ui.module');

    var Module = function(name, selector, isGlobal) {
        this._name = name;
        this._selector = selector;
        this._isGlobal = isGlobal;
    };

    Module.prototype.getName = function() {
        return this._name;
    };

    Module.prototype.isGlobal = function() {
        return this._isGlobal;
    };

    Module.prototype.init = function(context, container, options) {
        var targets = Sizzle(this._selector, context);

        var i = 0,
            l = targets.length;

        var target = null;
        var instance = null;
        while (i < l) {
            target = targets[i];
            instance = this._initItem(target, container, options);

            tuna.dom.dispatchEvent(target, 'ui-' + this._name + '-init', instance);

            i++;
        }
    };

    Module.prototype.destroy = function(context, container) {};

    Module.prototype._initItem = function(target, container, options) {};

    tuna.ui.modules.Module = Module;
    
})();