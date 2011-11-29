(function() {

    tuna.namespace('rest');

    var MethodFactory = function() {
        this.__socialFactory = null;
    };

    tuna.implement(MethodFactory, tuna.rest.IMethodFactory);

    MethodFactory.prototype.createMethod = function(name) {
        if (name.indexOf('social.') === -1) {
            return this.__createCommonMethod(name);
        } else {
            return this.__createSocialMethod(name);
        }
    };

    MethodFactory.prototype.__createCommonMethod = function(name) {
        return new rest.CommonMethod(name);
    };

    MethodFactory.prototype.__createSocialMethod = function(name) {
        var factory = this.__getSocialFactory();
        if (factory !== null) {
            return factory.createMethod(name);
        }

        return null;
    };

    MethodFactory.prototype.__getSocialFactory = function() {
        if (this.__socialFactory === null) {
            this.__socialFactory = this.__createSocialFactory();
        }

        return this.__socialFactory;
    };

    MethodFactory.prototype.__createSocialFactory = function() {
        switch (APP_NETWORK) {
            case 'vk': return new rest.vk.VKMethodFactory();
        }

        return null;
    };


    tuna.rest.factory.setCore(new MethodFactory());

})();
