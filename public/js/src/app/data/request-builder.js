(function() {

    var RequestBuilder = function() {
        this.__appURL = '/api/';
    };

    RequestBuilder.prototype.build = function(name, data) {
        var request = new tuna.net.Request();
        request.setData(data);

        var url = this.__getURL(name);
        if (url !== null) {
            request.setURL(url);
        }

        return request;
    };

    RequestBuilder.prototype.__getURL = function(name) {
        switch (name) {
            case 'cities': return this.__appURL + '?method=cities.getList';
        }

        return null;
    };

    tuna.data.origin.setRequestBuilder(new RequestBuilder());

})();