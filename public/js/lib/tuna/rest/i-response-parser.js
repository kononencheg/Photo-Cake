(function() {

    tuna.namespace('tuna.rest');

    var IResponseParser = function() {};

    IResponseParser.prototype.parse = function(response) {};
    
    IResponseParser.prototype.getErrors = function() {};

    tuna.rest.IResponseParser = IResponseParser;

})();
