(function() {
    tuna.namespace('tuna.ui.container');

    /**
     * @constructor
     * @param {!Element} target
     * @param {Element} parent
     */
    tuna.ui.container.Container = function(target, parent) {
        this._target = target;
        this._parent = parent;

        this.__moduleArgs = {};
        this.__moduleInstances = {};
    };

    tuna.ui.container.Container.prototype.getTarget = function() {
        return this._target;
    };

    tuna.ui.container.Container.prototype.render = function(element) {
        if (element !== undefined) {
            this.clear();
            
            this._target.appendChild(element);
        }
    };

    tuna.ui.container.Container.prototype.clear = function() {
        this._target.innerHTML = '';
    };

    /**
     *
     * @param {!Array.<string>|!string} names
     * @param {...} var_args
     */
    tuna.ui.container.Container.prototype.requireModule
        = function(names, var_args) {

        if (names instanceof Array) {
            var i = 0,
                l = names.length;

            while (i < l) {
                this.__requireOneModule(names[i]);
                i++;
            }
        } else {
            this.__requireOneModule.apply(this, arguments);
        }
    };

    tuna.ui.container.Container.prototype.initModules = function(target) {
        var module = null;
        for (var name in this.__moduleArgs) {
            module = tuna.ui.modules.getModule(name);

            if (module === null) {
                alert('Unknown module "' + name + '"');
                continue;
            }

            if (this.__moduleInstances[name] === undefined) {
                this.__moduleInstances[name] = [];
            }

            this.__moduleInstances[name] = this.__moduleInstances[name].concat
                (this.__initModule(module, target, this.__moduleArgs[name]));
        }
    };

    tuna.ui.container.Container.prototype.getModuleInstances = function(name) {
        if (this.__moduleInstances[name] !== undefined) {
            return this.__moduleInstances[name];
        }

        return null;
    };

    tuna.ui.container.Container.prototype.getOneModuleInstance
        = function(name) {

        if (this.__moduleInstances[name] !== undefined &&
            this.__moduleInstances[name][0] !== undefined) {
            return this.__moduleInstances[name][0];
        }
        
        return null;
    };

    tuna.ui.container.Container.prototype.destroyModules = function() {
        for (var name in this.__moduleInstances) {
            tuna.ui.modules.getModule(name)
                           .destroy(this.__moduleInstances[name]);

            this.__moduleInstances[name].length = 0;
        }
    };

    tuna.ui.container.Container.prototype.__initModule
        = function(module, target, moduleArgs) {

        var result = [];

        var commonArgs = [target || this._target, this];

        var i = moduleArgs.length - 1;
        while (i >= 0) {
            if (moduleArgs[i] !== null) {
                result = result.concat(
                    module.init.apply(module, commonArgs.concat(moduleArgs[i]))
                );
            }

            i--;
        }

        return result;
    };


    /**
     *
     * @param {!string} name
     * @param {...} var_args
     */
    tuna.ui.container.Container.prototype.__requireOneModule
        = function(name, var_args) {

        var args = tuna.toArray(arguments);
        args.shift();

        if (this.__moduleArgs[name] === undefined) {
            this.__moduleArgs[name] = [null];
        }

        if (args.length > 0) {
            this.__moduleArgs[name].push(args);
        } else {
            this.__moduleArgs[name][0] = [];
        }
    };

})();