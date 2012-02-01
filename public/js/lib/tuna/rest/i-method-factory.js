(function() {

    tuna.namespace('tuna.rest');

    /**
     * @interface
     */
    tuna.rest.IMethodFactory  = function() {};

    /**
     *
     * @param {!string} name
     * @return {tuna.rest.IRemoteMethod}
     */
    tuna.rest.IMethodFactory.prototype.createMethod = function(name) {};

})();
