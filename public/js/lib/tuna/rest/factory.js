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

    tuna.rest.call = function(name, args, callback) {
        if (typeof args === 'function') {
            callback = args;
            args = null;
        }

        var method = tuna.rest.factory.createMethod(name);

        if (callback !== undefined) {
            method.addEventListener('result', function(event, result) {
                callback(result);
                method.removeEventListener('result', arguments.callee)
            });
        }

        method.call(args);
    };

    tuna.rest.factory = new FactoryWrapper();

})();
