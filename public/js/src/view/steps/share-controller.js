(function() {

    var ShareController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__wallPostMethod = null;
        this.__imageData = null;
    };

    tuna.extend(ShareController, tuna.view.PageViewController);

    ShareController.prototype.open = function() {
        var currentCake = model.cakes.getCurrentCake();
        this.__imageData = currentCake.imageBase64;

        var downloadDataInput = tuna.dom.selectOne('#download_data_input');
        downloadDataInput.value = this.__imageData;
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('friends-popup');
    };

    ShareController.prototype._initActions = function() {
        var self = this;

        this.__wallPostMethod
            = tuna.rest.factory.createMethod('social.wall.post');

        this.__wallPostMethod.addEventListener('result', function() {
            alert('Торт успешно опубликован!')
        });

        var wallPostLink = tuna.dom.selectOne('#wall_post_link');
        tuna.dom.addEventListener(wallPostLink, 'click', function(event) {
            tuna.dom.preventDefault(event);

            self.__wallPostMethod.call({ 'image': self.__imageData });
        });
    };

    tuna.view.registerController(new ShareController('share_step'));
})();