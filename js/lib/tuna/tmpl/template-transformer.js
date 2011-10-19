/**
 * TUNA FRAMEWORK
 * 
 * @file template-transformer.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl");

    /**
     * Template transformer binded to concrete HTML element.
     *
     * @public
     * @class
     * @implements {tuna.transform.ITransformer}
     *
     * @constructor
     */
    var TemplateTransformer = function() {

        /**
         * Compiled template.
         *
         * @private
         * @type {tuna.tmpl.__CompiledTemplate}
         */
        this.__core = null;

        /**
         * Transform target.
         *
         * @private
         * @type {Element}
         */
        this.__targetElement = null;
    };

    //tuna.implement(TemplateTransformer, tuna.view.ITransformer);

    /**
     * Transform method.
     *
     * @public
     * @param {*} data Data to transform.
     * @return {Element|string} Transform result.
     */
    TemplateTransformer.prototype.applyTransform = function(data) {
        var dataRoot = new tuna.tmpl.__DataNode(data);

        this.__core.applyData(dataRoot);

        return this.__targetElement;
    };

    TemplateTransformer.prototype.setCore = function(compiledTemplate) {
        this.__core = compiledTemplate;
    };


    TemplateTransformer.prototype.setTargetElement = function(element) {
        this.__targetElement = element;
    };


    TemplateTransformer.prototype.setChildHandler = function(childHandler) {
        if (this.__core) {
            this.__core.setChildHandler(childHandler);
        }
    };


    tuna.tmpl.TemplateTransformer = TemplateTransformer;
    
})();