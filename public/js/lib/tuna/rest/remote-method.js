(function() {

    tuna.namespace('tuna.rest');

    /**
     * @constructor
     * @extends {tuna.events.EventDispatcher}
     * @implements {tuna.rest.IRemoteMethod}
     * @param {string} name
     */
    tuna.rest.RemoteMethod = function(name) {
        tuna.events.EventDispatcher.call(this);

        this._name = name || null;
    };

    tuna.implement(tuna.rest.RemoteMethod, tuna.rest.IRemoteMethod);
    tuna.extend(tuna.rest.RemoteMethod, tuna.events.EventDispatcher);

    tuna.rest.RemoteMethod.prototype.call = function(args) {};

    /**
     * @inheritDoc
     */
    tuna.rest.RemoteMethod.prototype.clone = function() {
        return new this.constructor(this._name);
    };

})();
