(function() {

    var VKMethod = function(name) {
        tuna.rest.Method.call(this, name);

        this._handleResponse = tuna.utils.bind(this._handleResponse, this);
    };

    tuna.utils.extend(VKMethod, tuna.rest.Method);

    VKMethod.prototype.call = function(args) {
        VK.api(this._name, this._completeArguments(args), this._handleResponse);
    };

    VKMethod.prototype._completeArguments = function(args) {
        return args;
    };

    VKMethod.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            this.dispatch('result', this._mapResponse(data.response));
        } else {
            this.dispatch('error', data);
        }
    };

    VKMethod.prototype._mapResponse = function(response) {
        return null;
    };

    rest.social.vk.VKMethod = VKMethod;

})();
