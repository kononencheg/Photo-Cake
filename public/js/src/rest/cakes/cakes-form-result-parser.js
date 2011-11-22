(function() {

    tuna.namespace('rest');

    var CakesFormResultParser = function() {
        this.__lastError = null;
    };

    CakesFormResultParser.prototype.parse = function(response) {
        try {
            return JSON.parse(response);
        } catch (error) {
            this.__lastError = error;
        }

        return null;
    };

    CakesFormResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    rest.cakes.CakesFormResultParser = CakesFormResultParser;

})();
