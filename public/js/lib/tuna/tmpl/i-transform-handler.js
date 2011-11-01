/**
 * TUNA FRAMEWORK
 * 
 * @file i-node-handler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var ITransformHandler = function() {};

    ITransformHandler.prototype.handleTransformStart = function(target) {};

    ITransformHandler.prototype.handleTransformComplete = function(target, created, removed) {};

    tuna.tmpl.ITransformHandler = ITransformHandler;
})();