/**
 * TUNA FRAMEWORK
 * 
 * @file i-node-handler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var IElementHandler = function() {};

    IElementHandler.prototype.handleCreatedElement = function(element) {};
 
    IElementHandler.prototype.handleRemovedElement = function(element) {};

    tuna.tmpl.IElementHandler = IElementHandler;
})();