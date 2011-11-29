(function() {

    tuna.namespace('rest');

    var CommonMethod = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this.__request = new tuna.net.Request();
        this.__request.method = 'POST';
        this.__request.setURL('/api/?method=' + name);
        this.__request.subscribe('complete', function(event, data) {
            this._handleResponse(data);
        }, this);
    };

    tuna.extend(CommonMethod, tuna.rest.RemoteMethod);

    CommonMethod.prototype.call = function(args) {
        this.__request.setData(args);
        this.__request.send();
    };

    CommonMethod.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) { alert(data); }

        if (result !== null) {
            this.notify('result', result);
        } else {
            this.notify('error', data);
        }

    };

    rest.CommonMethod = CommonMethod;

})();
