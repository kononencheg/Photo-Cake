(function() {

    tuna.namespace('rest.vk');

    var VKMethod = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this._handleResponse = tuna.bind(this._handleResponse, this);
    };

    tuna.extend(VKMethod, tuna.rest.RemoteMethod);

    VKMethod.prototype.call = function(args) {
        VK.api(this._name, this._completeArguments(args), this._handleResponse);
    };

    VKMethod.prototype._completeArguments = function(args) {
        return args;
    };

    VKMethod.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            this.notify('result', this._mapResponse(data.response));
        } else {
            this.notify('error', data);
        }
    };

    VKMethod.prototype._mapResponse = function(response) {
        return null;
    };

    rest.vk.VKMethod = VKMethod;

})();
