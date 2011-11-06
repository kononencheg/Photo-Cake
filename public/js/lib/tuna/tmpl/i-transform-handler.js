(function() {

    tuna.namespace("tuna.tmpl");

    var ITransformHandler = function() {};

    ITransformHandler.prototype.handleTransformStart
        = function(target) {};

    ITransformHandler.prototype.handleTransformComplete
        = function(target, created, removed) {};

    tuna.tmpl.ITransformHandler = ITransformHandler;

})();