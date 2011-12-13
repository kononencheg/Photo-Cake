(function() {
    tuna.namespace('tuna.ui.modules');

    var modulesTable = {};
    var isolators = [];

    tuna.ui.modules.register = function(module) {
        var name = module.getName();

        if (modulesTable[name] !== undefined) {
            console.warn('Module with name "' + name + '" already registered!');
        }

        modulesTable[name] = module;
    };

    tuna.ui.modules.getModule = function(name) {
        return modulesTable[name];
    };

    tuna.ui.modules.addIsolator = function(className) {
        isolators.push(className);
    };

    tuna.ui.modules.getIsolators = function() {
        return isolators;
    };



})();