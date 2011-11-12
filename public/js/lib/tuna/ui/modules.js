(function() {
    tuna.namespace('tuna.ui.modules');

    var modulesTable = {};

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

})();