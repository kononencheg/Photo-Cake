(function() {

    tuna.namespace('tuna.tmpl');

    /**
     * @interface
     */
    tuna.tmpl.ITransformer = function() {};
    tuna.tmpl.ITransformer.prototype.applyTransform = function(data) {};
    tuna.tmpl.ITransformer.prototype.setTransformHandler = function(handler) {};
    tuna.tmpl.ITransformer.prototype.destroy = function() {};

})();