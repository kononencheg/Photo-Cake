(function() {

    tuna.namespace('tuna.rest');

    var RemoteMethod = function(request) {
        this.__request = null;
        this.__resultParser = null;

        if (request !== undefined) {
            this.__request = request;
        }
        
        if (this.__request !== null) {
            this.__request.subscribe('complete', this.__handleResponse, this);
        }
    };

    RemoteMethod.prototype.setResultParser = function(parser) {
        this.__resultParser = parser;
    };

    RemoteMethod.prototype.call = function(args) {
        this.__request.setData(args);
        this.__request.send();
    };

    RemoteMethod.prototype.__handleResponse = function(event, response) {
        if (this.__resultParser !== null) {
            var result = this.__resultParser.parse(response);
            if (result !== null) {
                this.notify('result', result);
            } else {
                this.notify('error', this.__resultParser.getLastError());
            }
        } else {
            this.notify('result', response);
        }
    };

    tuna.rest.RemoteMethod = RemoteMethod;

})();
