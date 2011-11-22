(function() {

    tuna.namespace('rest');

    var CommonRESTFactory = function() {
        tuna.rest.RESTFactory.call(this);
    };

    tuna.implement(CommonRESTFactory, tuna.rest.RESTFactory);

    CommonRESTFactory.prototype._buildParser = function(name) {
        switch(name) {
            case 'cakes-xhr': return new rest.cakes.CakesXHRResultParser();
            case 'cakes-form': return new rest.cakes.CakesFormResultParser();
            case 'ok-xhr': return new rest.ok.OKXHRResultParser();
        }
    };

    CommonRESTFactory.prototype._buildMethod = function(name) {

    };

    CommonRESTFactory.prototype._getMethodParser = function(name) {

    };

    tuna.rest.setFactory(new CommonRESTFactory());

})();
