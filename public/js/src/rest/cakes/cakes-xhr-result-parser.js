(function() {

    tuna.namespace('rest.cakes');

    var CakesXHRResultParser = function() {
        this.__lastError = null;
    };

    CakesXHRResultParser.prototype.parse = function(response) {
        try {
            return JSON.parse(response);
        } catch (error) {
            this.__lastError = error;
        }

        return null;
    };

    CakesXHRResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    rest.cakes.CakesXHRResultParser = CakesXHRResultParser;

})();
