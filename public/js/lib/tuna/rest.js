(function() {

    tuna.namespace('tuna.rest');

    var commonFactory = null;

    tuna.rest.setFactory = function(factory) {
        commonFactory = factory;
    };

    tuna.rest.getFactory = function() {
        return commonFactory;
    };

})();
