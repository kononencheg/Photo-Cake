(function() {

    tuna.namespace('rest');

    var FormResultParser = function() {
        this.__lastError = null;
    };

    FormResultParser.prototype.parse = function(response) {
        /*try {
            return JSON.parse(response);
        } catch (error) {
            this.__lastError = error;
        }*/

        return null;
    };

    FormResultParser.prototype.getLastError = function() {
        return this.__lastError;
    };

    rest.FormResultParser = FormResultParser;

})();
