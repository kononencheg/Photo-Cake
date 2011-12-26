(function() {

    tuna.namespace('tuna.rest');

    var RemoteMethod = function(name) {
        tuna.events.EventDispatcher.call(this);

        this._name = null;

        if (name !== undefined) {
            this._name = name;
        }
    };

    tuna.implement(RemoteMethod, tuna.rest.IRemoteMethod);
    tuna.extend(RemoteMethod, tuna.events.EventDispatcher);

    RemoteMethod.prototype.call = function(args) {};
    RemoteMethod.prototype._handleResponse = function(data) {};

    tuna.rest.RemoteMethod = RemoteMethod;

})();
