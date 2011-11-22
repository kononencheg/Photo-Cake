(function() {

    tuna.namespace('tuna.rest');

    var IRESTFactory = function() {};
    
    IRESTFactory.prototype.getParser = function(name) {};

    IRESTFactory.prototype.createMethod = function(name) {};

    tuna.rest.IRESTFactory = IRESTFactory;

})();
