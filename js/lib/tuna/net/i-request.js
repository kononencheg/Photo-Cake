(function() {

    tuna.namespace("tuna.net");

    var IRequest = function() {};

    tuna.extend(IRequest, tuna.utils.INotifier);

    IRequest.prototype.send = function(url) {};
    IRequest.prototype.abort = function() {};

    tuna.net.IRequest = IRequest;

})();
