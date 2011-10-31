/**
 * TUNA FRAMEWORK
 * 
 * @file i-node-handler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var IElementHandler = function() {};

    IElementHandler.prototype.handleCreatedElements = function(elements) {};
 
    IElementHandler.prototype.handleRemovedElements = function(elements) {};

    tuna.tmpl.IElementHandler = IElementHandler;
})();