(function() {

    tuna.namespace('tuna.rest');

    var IRemoteMethod = function() {};
    
    IRemoteMethod.prototype.call = function(args) {};
    IRemoteMethod.prototype.clone = function() {};

    tuna.rest.IRemoteMethod = IRemoteMethod;

})();
