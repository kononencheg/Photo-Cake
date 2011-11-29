(function() {

    tuna.namespace('tuna.rest.factory');

    var FactoryWrapper = function() {
        this.__factory = null;
    };

    tuna.implement(FactoryWrapper, tuna.rest.IMethodFactory);

    FactoryWrapper.prototype.setCore = function(core) {
        this.__factory = core;
    };

    FactoryWrapper.prototype.createMethod = function(name) {
        if (this.__factory !== null) {
            return this.__factory.createMethod(name);
        }

        return null;
    };

    tuna.rest.factory = new FactoryWrapper();

})();
