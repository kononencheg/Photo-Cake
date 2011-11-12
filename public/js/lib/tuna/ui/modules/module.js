(function() {
    tuna.namespace('tuna.ui.module');

    var Module = function(name, selector) {
        this._name = name;
        this._selector = selector;
    };

    Module.prototype.getName = function() {
        return this._name;
    };

    Module.prototype.init = function(context, container, options) {
        var result = [];

        var targets = Sizzle(this._selector, context);
        targets = targets.concat(Sizzle.filter(this._selector, [context]));

        var i = 0,
            l = targets.length;

        var target = null;
        var instance = null;
        while (i < l) {
            target = targets[i];
            instance = this._initItem(target, container, options);

            tuna.dom.dispatchEvent(target, 'ui-' + this._name + '-init', instance);

            result.push(instance);

            i++;
        }

        return result;
    };

    Module.prototype._initItem = function(target, container, options) {};

    tuna.ui.modules.Module = Module;
    
})();