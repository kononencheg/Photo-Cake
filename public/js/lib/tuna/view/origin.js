(function() {
    tuna.namespace('tuna.view');

    var ContentOrigin = function() {
        this.__doc = document;
        this.__requestBuilder = null;
    };

    ContentOrigin.prototype.setRequestBuilder = function(builder) {
        this.__requestBuilder = builder;
    };

    ContentOrigin.prototype.__buildRequest = function(name) {
        var result = null;

        if (this.__requestBuilder) {
            result = this.__requestBuilder.build(name);
        }
        
        return result;
    };

    ContentOrigin.prototype.load = function(name, callback) {
        var self = this;

        var request = this.__buildRequest(name);
        request.subscribe('complete', function(type, response) {
            if (callback) {
                callback(tuna.dom.createFragment(response, self.__doc));
            }
        });

        request.send();
    };

    tuna.view.contentOrigin = new ContentOrigin();
})();