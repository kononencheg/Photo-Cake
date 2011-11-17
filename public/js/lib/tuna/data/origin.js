(function() {
    tuna.namespace('tuna.data');

    var DataOrigin = function() {
        this.__dataStorage = null;
        this.__requestBuilder = null;
    };

    DataOrigin.prototype.setDataStorage = function(dataStorage) {
        this.__dataStorage = dataStorage;
    };

    DataOrigin.prototype.setRequestBuilder = function(builder) {
        this.__requestBuilder = builder;
    };

    DataOrigin.prototype.__buildRequest = function(path, query) {
        if (this.__requestBuilder !== null) {
            return this.__requestBuilder.build(path, query);
        }

        return null;
    };

    DataOrigin.prototype.load = function(name, query, callback) {
        var self = this;

        var request = this.__buildRequest(name, query);
        request.subscribe('complete', function(type, response) {
            

            self.__dataStorage.set(name, response);

            if (callback) {
                callback(self.__dataStorage.get(name));
            }
        });

        request.send();
    };

    tuna.data.origin = new DataOrigin();
})();