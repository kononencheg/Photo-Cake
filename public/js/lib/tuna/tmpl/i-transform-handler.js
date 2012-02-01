(function() {

    tuna.namespace('tuna.tmpl');

    /**
     * @interface
     */
    tuna.tmpl.ITransformHandler = function() {};

    tuna.tmpl.ITransformHandler.prototype.handleTransformStart
        = function(target) {};

    tuna.tmpl.ITransformHandler.prototype.handleTransformComplete
        = function(target, createdElements, removedElements) {};

    tuna.tmpl.ITransformHandler.prototype.handleDestroy
        = function(target, removedElements) {};

})();