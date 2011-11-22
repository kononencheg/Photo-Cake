(function() {

    tuna.namespace('tuna.rest');

    var RemoteMethod = function(request) {
        tuna.utils.Notifier.call(this);

        this.__request = null;
        this.__resultParser = null;

        if (request !== undefined) {
            this.__request = request;
        }
        
        if (this.__request !== null) {
            this.__request.subscribe('complete', this.__handleResponse, this);
        }
    };

    tuna.extend(RemoteMethod, tuna.utils.Notifier);

    RemoteMethod.prototype.setResultParser = function(parser) {
        this.__resultParser = parser;
    };

    RemoteMethod.prototype.call = function(args) {
        this.__request.setData(this._filterArgs(args));
        this.__request.send();
    };

    RemoteMethod.prototype._filterArgs = function(args) {
        return args;
    };

    RemoteMethod.prototype.__handleResponse = function(event, response) {
        debugger;
        if (this.__resultParser !== null) {
            var result = this.__resultParser.parse(response);
            if (result !== null) {
                this.notify('result', this._mapResult(result));
            } else {
                this.notify('error', this.__resultParser.getLastError());
            }
        }
    };

    RemoteMethod.prototype._mapResult = function(result) {
        return result;
    };

    tuna.rest.RemoteMethod = RemoteMethod;

})();
