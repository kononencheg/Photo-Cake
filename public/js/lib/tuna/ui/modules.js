(function() {
    tuna.namespace('tuna.ui.modules');

    // TODO: move init logic to container

    var globalTable = {};
    var localTable = {};

    var initModule = function(module, argsStack, target, container) {
        var args = [target, container];

        var i = argsStack.length - 1;
        while (i >= 0) {
            if (argsStack[i] !== null) {
                module.init.apply(module, args.concat(argsStack[i]));
            }

            i--;
        }
    };

    tuna.ui.modules.register = function(module) {
        var table = module.isGlobal() ? globalTable : localTable;
        var name = module.getName();

        if (table[name] !== undefined) {
            console.warn('Module with name "' + name + '" already registered!');
        }

        table[name] = module;
    };

    tuna.ui.modules.init = function(container, element, initTable) {
        var name;

        for (name in initTable) {
            if (localTable[name] === undefined) {
                console.error('Unknown module "' + name + '"');
            }

            initModule(localTable[name], initTable[name], element, container);
        }

        for (name in globalTable) {
            if (globalTable[name] === undefined) {
                console.error('Unknown global module "' + name + '"');
            }

            initModule(globalTable[name], [[]], element, container);
        }
    };



})();