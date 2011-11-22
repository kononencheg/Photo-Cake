(function() {

    tuna.namespace('tuna.rest');

    var RESTFactory = function() {
        this.__parsersTable = {};
        this._defaultParser = null;
    };

    tuna.implement(RESTFactory, tuna.rest.IRESTFactory);

    RESTFactory.prototype.getParser = function(name) {
        var result = null;

        if (this.__parsersTable[name] !== undefined) {
            result = this.__parsersTable[name];
        }

        if (result === null) {
            this.__parsersTable[name] =
                result = this._buildParser(name);
        }

        return result;
    };

    RESTFactory.prototype._buildParser = function(name) {};

    RESTFactory.prototype.createMethod = function(name) {
        var method = this._buildMethod(name);

        if (method !== null) {
            var parserName = this._getMethodParser(name);
            if (parserName !== null) {
                method.setResultParser(this.getParser(parserName));
            }
        }

        return method;
    };

    RESTFactory.prototype._buildMethod = function(name) {};

    RESTFactory.prototype._getMethodParser = function(name) {
        return this._defaultParser;
    };

    tuna.rest.RESTFactory = RESTFactory;

})();
