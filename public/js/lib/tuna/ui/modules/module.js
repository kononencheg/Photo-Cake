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
        var instances = [];

        var targets = Sizzle(this._selector, context);
        targets = targets.concat(Sizzle.filter(this._selector, [context]));

        var i = 0,
            l = targets.length;

        while (i < l) {
            instances.push(this._initInstance(targets[i], container, options));

            i++;
        }

        return instances;
    };

    Module.prototype.destroy = function(instances) {
        var i = 0,
            l = instances.length;

        while (i < l) {
            this._destroyInstance(instances[i]);

            i++;
        }
    };

    Module.prototype._initInstance = function(target, container, options) {};
    Module.prototype._destroyInstance = function(instance) {};

    tuna.ui.modules.Module = Module;
    
})();