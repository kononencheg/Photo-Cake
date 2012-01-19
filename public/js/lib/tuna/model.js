(function() {

    tuna.namespace('tuna');

    var Model = function() {
        this.__defaultStorage = null;
        this.__resources = [];
    };

    Model.prototype.setDefaultStorage = function(storage) {
        this.__defaultStorage = storage;
        this.__initResources();
    };

    Model.prototype.getDefaultStorage = function() {
        return this.__defaultStorage;
    };

    Model.prototype.addResource = function(resource) {
        this.__resources.push(resource);
    };

    Model.prototype.__initResources = function() {
        var i = 0,
            l = this.__resources.length;

        while (i < l) {
            this.__resources[i].setStorage(this.__defaultStorage);

            i++;
        }
    };

    tuna.model = new Model();

})();