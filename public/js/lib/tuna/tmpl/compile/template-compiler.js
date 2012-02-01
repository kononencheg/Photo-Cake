/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace('tuna.tmpl.compile');

    /**
     * @constructor
     * @param {HTMLDocument} doc
     */
    tuna.tmpl.compile.TemplateCompiler = function(doc) {
        this.__doc = doc;

        this.__itemCompilers = [];

        this.__registerItemCompilers();
    };

    tuna.tmpl.compile.TemplateCompiler.prototype.__registerItemCompilers = function() {
        this.__itemCompilers.push(new tuna.tmpl.compile.SpotCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compile.AttributeCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compile.ConditionCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compile.ListCompiler(this.__doc, this));
    };

    /**
     * Compiling template with target DOM element.
     *
     * @param {tuna.tmpl.settings.Template} templateSettings Template to compile.
     * @param {Element} element Target DOM element.
     * @return {tuna.tmpl.ITransformer} New template transformer.
     */
    tuna.tmpl.compile.TemplateCompiler.prototype.makeTransformer
        = function(templateSettings, element) {

        var transformer = new tuna.tmpl.TemplateTransformer();
        transformer.setTargetElement(element);
        transformer.setCore
            (this.compileTemplate(templateSettings, element, null));

        return transformer;
    };

    tuna.tmpl.compile.TemplateCompiler.prototype.compileTemplate
        = function(settings, element, root) {

        var template = new tuna.tmpl.unit.Template(root);
        template.setTarget(element);

        var i = 0,
            l = this.__itemCompilers.length;

        while (i < l) {
            this.__itemCompilers[i].compile(element, settings, template);
            i++;
        }

        return template;
    };

})();
