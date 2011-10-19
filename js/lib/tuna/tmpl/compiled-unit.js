/**
 * TUNA FRAMEWORK
 * 
 * @file i-compiled-unit.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var CompiledUnit = function(rootTemplate) {
        this.__rootTemplate = rootTemplate;
    };

    tuna.implement(CompiledUnit, tuna.tmpl.__ICompiledUnit);

    CompiledUnit.prototype.getRootTemplate = function() {
        return this.__rootTemplate;
    };

    tuna.tmpl.__CompiledUnit = CompiledUnit;
})();