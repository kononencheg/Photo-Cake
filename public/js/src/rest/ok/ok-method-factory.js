(function() {

    tuna.namespace('rest.ok');

    var OKMethodFactory = function() {};

    tuna.implement(OKMethodFactory, tuna.rest.IMethodFactory);

    OKMethodFactory.prototype.createMethod = function(name) {
        switch (name) {
            case 'social.friends.get': return new rest.ok.friends.GetList();
            case 'social.wall.post': return new rest.ok.wall.Post();
        }

        return null;
    };

    rest.ok.OKMethodFactory = OKMethodFactory;

})();
