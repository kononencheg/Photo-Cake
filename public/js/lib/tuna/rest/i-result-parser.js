(function() {

    tuna.namespace('tuna.rest');

    var IResultParser = function() {};

    IResultParser.prototype.parse = function(response) {};
    
    IResultParser.prototype.getLastError = function() {};

    tuna.rest.IResultParser = IResultParser;

})();
