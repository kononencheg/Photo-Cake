/**
 * TUNA FRAMEWORK
 * 
 * @file i-node-handler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var INodeHandler = function() {};

    INodeHandler.prototype.handleCreated = function(node) {};
 
    INodeHandler.prototype.handleRemoved = function(node) {};

    tuna.tmpl.INodeHandler = INodeHandler;
})();