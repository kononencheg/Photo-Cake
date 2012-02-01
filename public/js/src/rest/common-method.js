(function() {

    tuna.namespace('rest');

    /**
     * @constructor
     * @extends {tuna.rest.RemoteMethod}
     * @param {string} name
     */
    rest.CommonMethod = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this.__request = new tuna.net.Request();
        this.__request.method = 'POST';
        this.__request.setURL('/api/?method=' + name);

        var self = this;

        this.__request.addEventListener('complete', function(event, data) {
            self._handleResponse(data);
        });
    };

    tuna.extend(rest.CommonMethod, tuna.rest.RemoteMethod);

    rest.CommonMethod.prototype.call = function(args) {
        this.__request.setData(args);
        this.__request.send();
    };

    rest.CommonMethod.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) {
            this.dispatch('error', data);
        }

        if (result !== null) {
            if (result['response'] !== undefined) {
                this.dispatch('result', result['response']);
            } else {
                this.dispatch('error', result['errors']);
            }
        }

    };


    /**
     * @constructor
     * @implements {tuna.rest.IMethodFactory}
     */
    var MethodFactory = function() {};

    tuna.implement(MethodFactory, tuna.rest.IMethodFactory);

    MethodFactory.prototype.createMethod = function(name) {
        return new rest.CommonMethod(name);
    };

    tuna.rest.factory.setCommonFactory(new MethodFactory());

})();
