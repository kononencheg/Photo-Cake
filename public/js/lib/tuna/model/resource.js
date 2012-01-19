(function() {
    tuna.namespace('tuna.model');

    var Resource = function() {
        this.__storage = null;

        tuna.model.addResource(this);
    };

    Resource.prototype.setStorage = function(storage) {
        this.__storage = storage;
    };

    tuna.model.Resource = Resource;

})();