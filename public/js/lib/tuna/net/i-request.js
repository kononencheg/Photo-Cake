(function() {

    tuna.namespace('tuna.net');

    var IRequest = function() {};

    tuna.extend(IRequest, tuna.events.IEventDispatcher);

    IRequest.prototype.send = function(url) {};
    IRequest.prototype.abort = function() {};

    tuna.net.IRequest = IRequest;

})();
