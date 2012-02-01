/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace('tuna.tmpl');

    /**
     * Template transformer binded to concrete HTML element.
     *
     * @constructor
     * @implements {tuna.tmpl.ITransformer}
     */
    tuna.tmpl.TemplateTransformer = function() {

        /**
         * Compiled template.
         *
         * @private
         * {tuna.tmpl.unit.Template}
         */
        this.__core = null;

        /**
         * Transform target.
         *
         * @private
         * @type {Element}
         */
        this.__target = null

        /**
         * @private
         * @type {tuna.tmpl.ITransformHandler}
         */
        this.__transformHandler = null;
    };

    tuna.implement(tuna.tmpl.TemplateTransformer, tuna.tmpl.ITransformer);

    /**
     * Transform method.
     *
     * @public
     * @param {*} data Data to transform.
     */
    tuna.tmpl.TemplateTransformer.prototype.applyTransform = function(data) {
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

    tuna.tmpl.TemplateTransformer.prototype.setCore
        = function(compiledTemplate) {

        this.__core = compiledTemplate;
    };


    tuna.tmpl.TemplateTransformer.prototype.setTargetElement
        = function(element) {

        this.__target = element;
    };


    tuna.tmpl.TemplateTransformer.prototype.setTransformHandler
        = function(handler) {

        this.__transformHandler = handler;
    };

    tuna.tmpl.TemplateTransformer.prototype.destroy = function() {
        this.__core.destroy();

        if (this.__transformHandler !== null) {
            this.__transformHandler.handleDestroy(
                this.__target,
                this.__core.fetchRemovedChildren()
            );
        }

        this.__core = null;
        this.__target = null;
        this.__transformHandler = null;
    };

})();