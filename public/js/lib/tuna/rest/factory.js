(function() {

    tuna.namespace('tuna.rest.factory');

    /**
     * @constructor
     * @implements {tuna.rest.IMethodFactory}
     */
    var Factory = function() {
        this.__methods = {};
        this.__factory = null;
    };

    tuna.implement(Factory, tuna.rest.IMethodFactory);

    Factory.prototype.setCommonFactory = function(factory) {
        this.__factory = factory;
    };

    /**
     * @inheritDoc
     */
    Factory.prototype.createMethod = function(name) {
        if (this.__methods[name] !== undefined) {
            return this.__methods[name].clone();
        } else if (this.__factory !== null) {
            return this.__factory.createMethod(name);
        }

        return null;
    };

    Factory.prototype.addMethod = function(name, method) {
        this.__methods[name] = method;
    };

    tuna.rest.factory = new Factory();

    /**
     *
     * @param {!string} name
     * @param {Object|function(*)} args
     * @param {function(*)=} callback
     */
    tuna.rest.call = function(name, args, callback) {
        if (typeof args === 'function') {
            callback = args;
            args = null;
        }

        var method = tuna.rest.factory.createMethod(name);

        if (callback !== undefined) {
            var listener = function(event, result) {
                callback(result);
                method.removeEventListener('result', listener);
            };

            method.addEventListener('result', listener);
        }

        method.call(args);
    };

})();
