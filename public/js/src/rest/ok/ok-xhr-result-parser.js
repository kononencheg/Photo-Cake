(function() {

    tuna.namespace('rest.ok');

    var OKXHRResultParser = function() {
        this.__lastError = null;
    };

    OKXHRResultParser.prototype.parse = function(response) {
        try {
            return JSON.parse(response);
        } catch (error) {
            this.__lastError = error;
        }

        return null;
    };

    OKXHRResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    rest.ok.OKXHRResultParser = OKXHRResultParser;

})();
