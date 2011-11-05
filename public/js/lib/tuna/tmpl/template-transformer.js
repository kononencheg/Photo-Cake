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
        this.__target = null

        this.__transformHandler = null;
    };

    //tuna.implement(TemplateTransformer, tuna.view.ITransformer);

    /**
     * Transform method.
     *
     * @public
     * @param {*} data Data to transform.
     */
    TemplateTransformer.prototype.applyTransform = function(data) {
        if (this.__transformHandler !== null) {
            this.__transformHandler.handleTransformStart(this.__target);
        }

        this.__core.applyData(new tuna.tmpl.data.DataNode(data));

        if (this.__transformHandler !== null) {
            this.__transformHandler.handleTransformComplete(
                this.__target,
                this.__core.fetchCreatedChildren(),
                this.__core.fetchRemovedChildren()
            );
        }
    };

    TemplateTransformer.prototype.setCore = function(compiledTemplate) {
        this.__core = compiledTemplate;
    };


    TemplateTransformer.prototype.setTargetElement = function(element) {
        this.__target = element;
    };


    TemplateTransformer.prototype.setTransformHandler = function(handler) {
        this.__transformHandler = handler;
    };


    tuna.tmpl.TemplateTransformer = TemplateTransformer;
    
})();