(function() {

    tuna.namespace('rest.vk');

    var VKMethodFactory = function() {};

    tuna.implement(VKMethodFactory, tuna.rest.IMethodFactory);

    VKMethodFactory.prototype.createMethod = function(name) {
        switch (name) {
            case 'social.friends.get': return new rest.vk.friends.GetList();
            case 'social.wall.post': return new rest.vk.wall.Post();
        }

        return null;
    };

    rest.vk.VKMethodFactory = VKMethodFactory;

})();
