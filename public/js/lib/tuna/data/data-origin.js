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

    DataOrigin.prototype.__buildRequest = function(path) {
        var result = null;

        if (this.__requestBuilder) {
            result = this.__requestBuilder.build(path);
        }

        return result;
    };

    DataOrigin.prototype.fetch = function(name, callback) {
        var self = this;

        var request = this.__buildRequest(name);
        request.subscribe('complete', function(type, response) {
            self.__dataStorage.set(name, response);

            if (callback) {
                callback(self.__dataStorage.get(name));
            }
        });

        request.send();
    };

    tuna.data.dataOrigin = new DataOrigin();
})();