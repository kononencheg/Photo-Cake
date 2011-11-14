(function() {
    tuna.namespace('tuna.view');

    var ContentFactory = function() {
        this.__doc = document;
        this.__requestBuilder = null;
    };

    ContentFactory.prototype.__buildRequest = function(path) {
        var result = null;

        if (this.__requestBuilder) {
            result = this.__requestBuilder.build(path);
        } else {
            result = new tuna.net.Request('/tmpl/');
            result.data = { 'path': path };
        }

        return result;
    };

    ContentFactory.prototype.create = function(path, callback) {
        var self = this;

        var request = this.__buildRequest(path);
        request.subscribe('complete', function(type, response) {
            if (callback) {
                callback(tuna.dom.createFragment(response, self.__doc));
            }
        });

        request.send();
    };

    tuna.view.contentFactory = new ContentFactory();
})();