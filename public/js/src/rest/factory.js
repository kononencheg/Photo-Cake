(function() {

    var MethodFactory = function() {};

    tuna.utils.implement(MethodFactory, tuna.rest.IFactory);

    MethodFactory.prototype.createMethod = function(name) {
        return new rest.CommonMethod(name);
    };

    tuna.rest.factory.setDefaultFactory(new MethodFactory());

})();