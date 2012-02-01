(function() {

    tuna.namespace('tuna.rest');

    /**
     * @interface
     */
    tuna.rest.IRemoteMethod = function() {};
    tuna.rest.IRemoteMethod.prototype.call = function(args) {};

    /**
     * @return {tuna.rest.IRemoteMethod}
     */
    tuna.rest.IRemoteMethod.prototype.clone = function() {};

})();
