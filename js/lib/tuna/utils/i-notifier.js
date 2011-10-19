(function() {
    
    tuna.namespace('tuna.utils');

    var INotifier = function() {};

    INotifier.prototype.notify = function(type, notification) { };

    INotifier.prototype.subscribe = function(type, handler, scope) { };

    INotifier.prototype.unsubscribe = function(type, handler) {};

    INotifier.prototype.hasSubscription = function(type, handler) { };

    tuna.utils.INotifier = INotifier;

})();