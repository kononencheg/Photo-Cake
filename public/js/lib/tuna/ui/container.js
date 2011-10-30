(function() {
    tuna.namespace('tuna.ui');

    var Container = function(target, parent) {
        this._target = target;
        this._parent = parent;

        this.__modulesTable = {};
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
        tuna.ui.modules.init(this, target, this.__modulesTable);
    };

    Container.prototype.__requireOneModule = function() {
        var args = tuna.toArray(arguments);
        var name = args.shift();

        if (this.__modulesTable[name] === undefined) {
            this.__modulesTable[name] = [null];
        }

        if (args.length > 0) {
            this.__modulesTable[name].push(args);
        } else {
            this.__modulesTable[name][0] = [];
        }
    };

    tuna.ui.Container = Container;

})();