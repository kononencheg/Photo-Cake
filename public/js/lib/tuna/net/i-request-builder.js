(function() {

    tuna.namespace("tuna.net");

    var IRequestBuilder = function() {};

    IRequestBuilder.prototype.build = function(key, data) {};

    tuna.net.IRequestBuilder = IRequestBuilder;

})();