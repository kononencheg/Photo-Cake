(function() {

    tuna.namespace('rest');

    var CommonRESTFactory = function() {
        tuna.rest.RESTFactory.call(this);
        
        this._defaultParser = 'xhr';
    };

    tuna.implement(CommonRESTFactory, tuna.rest.RESTFactory);


    CommonRESTFactory.prototype._buildParser = function(name) {
        switch(name) {
            case 'xhr': return new rest.XHRResultParser();
            case 'form': return new rest.FormResultParser();
        }
    };

    CommonRESTFactory.prototype._buildMethod = function(name) {
        var request = new tuna.net.Request();
        request.method = 'POST';
        request.setURL(this.__getURL(name));

        return new tuna.rest.RemoteMethod(request);
    };

    // TODO: create tuna.config('api.path')
    CommonRESTFactory.prototype.__getURL = function(name) {
        return '/api/?method=' + name;
    };

    tuna.rest.factory.setCore(new CommonRESTFactory());

})();
