/**
 * TUNA FRAMEWORK
 * 
 * @file i-template-compiler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    /**
     * Template compiler classes interface.
     *
     * @public
     * @interface
     */
    var ITemplateCompiler = function() {};

    /**
     * Compiling method.
     *
     * @param {string} templateName Template name to compile with.
     * @param {Element} targetElement Target DOM element.
     */
    ITemplateCompiler.prototype.compile = function(templateName, targetElement) {};

    tuna.tmpl.ITemplateCompiler = ITemplateCompiler;

})();
