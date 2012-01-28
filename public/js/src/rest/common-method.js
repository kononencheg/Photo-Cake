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
        } catch (error) {
            this.dispatch('error', data);
        }

        if (result !== null) {
            if (result.response !== undefined) {
                this.dispatch('result', result.response);
            } else {
                this.dispatch('error', result.errors);
            }
        }

    };

    rest.CommonMethod = CommonMethod;

    var MethodFactory = function() {};

    tuna.implement(MethodFactory, tuna.rest.IMethodFactory);

    MethodFactory.prototype.createMethod = function(name) {
        return new rest.CommonMethod(name);
    };

    tuna.rest.factory.setCommonFactory(new MethodFactory());

})();
