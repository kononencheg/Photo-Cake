(function() {
    tuna.namespace('tuna.ui');

    var Container = function(target, parent) {
        this._target = target;
        this._parent = parent;

        this.__moduleArgsTable = {};
    };

    Container.prototype.getTarget = function() {
        return this._target;
    };

    Container.prototype.render = function(element) {
        this.clear();

        this._target.appendChild(element);
    };

    Container.prototype.clear = function() {
        this._target.innerHTML = '';
    };

    Container.prototype.requireModule = function(names) {
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

    Container.prototype.initModules = function(target) {
        var result = {};

        var module = null;
        for (var name in this.__moduleArgsTable) {
            module = tuna.ui.modules.getModule(name);
            if (module === null) {
                console.error('Unknown module "' + name + '"');

                continue;
            }

            result[name] =
                this.__initModule(module, target, this.__moduleArgsTable[name]);
        }

        return result;
    };

    Container.prototype.__initModule = function(module, target, moduleArgs) {
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

    Container.prototype.__requireOneModule = function() {
        var args = tuna.toArray(arguments);
        var name = args.shift();

        if (this.__moduleArgsTable[name] === undefined) {
            this.__moduleArgsTable[name] = [null];
        }

        if (args.length > 0) {
            this.__moduleArgsTable[name].push(args);
        } else {
            this.__moduleArgsTable[name][0] = [];
        }
    };

    tuna.ui.Container = Container;

})();