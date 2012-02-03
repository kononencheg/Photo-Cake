(function() {

    var ShareController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__wallPostMethod = null;
        this.__imageData = null;
    };

    tuna.utils.extend(ShareController, tuna.view.PageViewController);

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
        var friendsPopup = this._container.getOneModuleInstance('friends-popup');

        tuna.dom.addEventListener(
            tuna.dom.selectOne('#wall_post_link'), 'click', function(event) {
                tuna.dom.preventDefault(event);
                friendsPopup.postImage();
            }
        );
    };

    tuna.view.registerController(new ShareController('share_step'));
})();