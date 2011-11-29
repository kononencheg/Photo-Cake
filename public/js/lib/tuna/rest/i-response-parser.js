(function() {

    tuna.namespace('tuna.rest');

    var IResponseParser = function() {};

    IResponseParser.prototype.parse = function(response) {};
    
    IResponseParser.prototype.getLastError = function() {};

    tuna.rest.IResponseParser = IResponseParser;

})();
