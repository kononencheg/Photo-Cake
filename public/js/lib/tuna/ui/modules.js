(function() {
    tuna.namespace('tuna.ui.modules');

    var modulesTable = {};
    var isolators = [];

    /**
     * @param {tuna.ui.modules.Module} module
     */
    tuna.ui.modules.register = function(module) {
        modulesTable[module.getName()] = module;
    };

    /**
     *
     * @param name
     * @return {tuna.ui.modules.Module}
     */
    tuna.ui.modules.getModule = function(name) {
        if (modulesTable[name] !== undefined) {
            return modulesTable[name];
        }

        return null;
    };

    /**
     *
     * @param {string} className
     */
    tuna.ui.modules.addIsolator = function(className) {
        isolators.push(className);
    };

    /**
     *
     * @return {Array.<string>}
     */
    tuna.ui.modules.getIsolators = function() {
        return isolators;
    };

})();