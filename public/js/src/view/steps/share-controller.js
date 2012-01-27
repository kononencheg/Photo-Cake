(function() {

    var ShareController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__wallPostMethod = null;
        this.__imageData = null;
    };

    tuna.extend(ShareController, tuna.view.PageViewController);

    ShareController.prototype.canGoNext = function() {
        return true;
    };

    ShareController.prototype.open = function() {
        var currentCake = model.cakes.getCurrentCake();
        this.__imageData = currentCake.image_base64;

        var downloadDataInput = tuna.dom.selectOne('#download_data_input');
        downloadDataInput.value = this.__imageData;
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('filtration');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('popup');
    };

    ShareController.prototype._initActions = function() {
        if (APP_NETWORK === 'ok') {
            this.__initOKNotificationPopup();
        } else {
            this.__initFriendsPopup();
        }

        this.__initWallPost();
    };

    ShareController.prototype.__initWallPost = function() {
        var self = this;

        this.__wallPostMethod
            = tuna.rest.factory.createMethod('social.wall.post');

        this.__wallPostMethod.addEventListener('result', function() {
            alert('Торт успешно опубликован!')
        });

        var wallPostLink = tuna.dom.selectOne('#wall_post_link');
        tuna.dom.addEventListener(wallPostLink, 'click', function(event) {
            tuna.dom.preventDefault(event);

            self.__wallPostMethod.call({ 'image_data': this.__imageData });
        });
    };

    ShareController.prototype.__initFriendsPopup = function() {
        var popup = this._container.getOneModuleInstance('popup');

        var self = this;
        tuna.dom.addChildEventListener(
            popup.getTarget(), '.j-send-button', 'click', function() {
                self.__wallPostMethod.call({
                    'image_data': this.__imageData,
                    'user_id': this.getAttribute('data-user-id')
                });
            }
        );

        var friendsFiltration
            = this._container.getOneModuleInstance('filtration');

        tuna.rest.call('social.friends.get', function(result) {
            friendsFiltration.setData(result);
        });
    };

    ShareController.prototype.__initOKNotificationPopup = function() {
        var popup = this._container.getOneModuleInstance('popup');
        popup.addEventListener('popup-open', function(event) {
            event.preventDefault();

            tuna.rest.call('cakes.uploadImage', {
                'image_data': this.__imageData
            }, function(result) {
                FAPI.UI.showNotification
                    ('Сматри какой я сделал тортик!', 'url=' + result);
            });
        });
    };

    tuna.view.registerController(new ShareController('share_step'));
})();