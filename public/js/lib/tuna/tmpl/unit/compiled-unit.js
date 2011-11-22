/**
 * TUNA FRAMEWORK
 * 
 * @file i-compiled-unit.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace('tuna.tmpl.unit');

    var CompiledUnit = function(rootTemplate) {
        this.__rootTemplate = rootTemplate;
    };

    CompiledUnit.prototype.getRootTemplate = function() {
        return this.__rootTemplate;
    };

    CompiledUnit.prototype.destroy = function() {};

    tuna.tmpl.unit.CompiledUnit = CompiledUnit;
})();