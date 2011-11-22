(function() {

    tuna.namespace('tuna.rest');

    var JSONResultParser = function() {
        this.__lastError = null;
    };

    JSONResultParser.prototype.parse = function(response) {
        try {
            return JSON.parse(response);
        } catch (error) {
            this.__lastError = error;
        }

        return null;
    };

    JSONResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    tuna.rest.JSONResultParser = JSONResultParser;

})();
