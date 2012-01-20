(function() {

    var ShareController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__friendsAutocomplete = null;

        this.__wallPostMethod = null;
    };

    tuna.extend(ShareController, tuna.view.StepViewController);

    ShareController.prototype.canGoNext = function() {
        return true;
    };

    ShareController.prototype._bootstrap = function() {
        this.init();
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('autocomplete');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('popup');
    };

    ShareController.prototype._initActions = function() {
        this.__friendsAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__initFriendsPopup();
        this.__loadFriendsData();

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

            self.__wallPostMethod.call({
                'image_data': model.cakes.getCurrentCake().image_base64
            });
        });
    };

    ShareController.prototype.open = function() {
        var downloadDataInput = tuna.dom.selectOne('#download_data_input');
        downloadDataInput.value = model.cakes.getCurrentCake().image_base64;
    };

    ShareController.prototype.__initFriendsPopup = function() {
        var self = this;
        var popup = this._container.getOneModuleInstance('popup');
        
        popup.addEventListener('popup-close', function() {
            self.__friendsList.clearSelection();
        });

        popup.addEventListener('popup-apply', function() {
            var selectedFriend = self.__friendsAutocomplete.getCurrentItem();
            if (selectedFriend !== null) {
                self.__wallPostMethod.call({
                    'image_data': model.cakes.getCurrentCake().image_base64,
                    'user_id': selectedFriend.id
                });
            }
        });
    };

    ShareController.prototype.__loadFriendsData = function() {
        var self = this;
        tuna.rest.call('social.friends.get', function(result) {
            self.__friendsAutocomplete.setData(result);
        });
    };


    tuna.view.registerController(new ShareController('share_step'));
})();