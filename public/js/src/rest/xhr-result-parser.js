(function() {

    tuna.namespace('rest.cakes');

    var XHRResultParser = function() {
        this.__lastError = null;
    };

    XHRResultParser.prototype.parse = function(response) {
        try {
            return JSON.parse(response);
        } catch (error) {
            alert(response);
            this.__lastError = error;
        }

        return null;
    };

    XHRResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    rest.XHRResultParser = XHRResultParser;

})();
