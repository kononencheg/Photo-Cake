(function() {

    tuna.namespace('rest');

    var CommonMethod = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this.__request = new tuna.net.Request();
        this.__request.method = 'POST';
        this.__request.setURL('/api/?method=' + name);

        var self = this;

        this.__request.addEventListener('complete', function(event, data) {
            self._handleResponse(data);
        });
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
            this.dispatch('result', result);
        } else {
            this.dispatch('error', data);
        }

    };

    rest.CommonMethod = CommonMethod;

})();
