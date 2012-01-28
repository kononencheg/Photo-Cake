(function() {

    tuna.namespace('tuna.rest');

    var RemoteMethod = function(name) {
        tuna.events.EventDispatcher.call(this);

        this._name = name || null;
    };

    tuna.implement(RemoteMethod, tuna.rest.IRemoteMethod);
    tuna.extend(RemoteMethod, tuna.events.EventDispatcher);

    RemoteMethod.prototype.call = function(args) {};

    RemoteMethod.prototype.clone = function() {
        return new this.constructor(this._name);
    };

    tuna.rest.RemoteMethod = RemoteMethod;

})();
