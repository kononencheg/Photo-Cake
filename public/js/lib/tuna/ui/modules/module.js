(function() {
    tuna.namespace('tuna.ui.module');

    var Module = function(name, selector) {
        this._name = name;
        this._selector = selector;
        this._useContext = true;
    };

    Module.CONTAINER_CLASS = 'j-transform-container';

    Module.prototype.getName = function() {
        return this._name;
    };

    Module.prototype.init = function(context, container, options) {
        var instances = [];

        var targets = tuna.dom.select(this._selector, context);

        if (this._useContext) {
            targets = targets.concat
                (tuna.dom.filter(this._selector, [context]));
        }

        var i = 0,
            l = targets.length;

        var target = null;
        while (i < l) {
            target = targets[i];
            if (tuna.dom.getParentWithClass
                    (target, Module.CONTAINER_CLASS , context) === null) {

                instances.push(this._initInstance(target, container, options));
            }

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