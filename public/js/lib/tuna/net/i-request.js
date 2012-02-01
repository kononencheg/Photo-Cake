(function() {

    tuna.namespace('tuna.net');

    /**
     * @interface
     * @extends {tuna.events.IEventDispatcher}
     */
    tuna.net.IRequest = function() {};

    tuna.extend(tuna.net.IRequest, tuna.events.IEventDispatcher);

    tuna.net.IRequest.prototype.send = function(url) {};
    tuna.net.IRequest.prototype.abort = function() {};


})();
