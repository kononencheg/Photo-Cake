(function() {

    var ShareController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__friendsPopup = null;
        this.__friendsList = null;
        this.__friendsListContainer = null;

        this.__cakeImage = null;
        this.__downloadLink = null;

        this.__selectedFriend = null;
    };

    tuna.extend(ShareController, tuna.view.StepViewController);

    ShareController.prototype._bootstrap = function() {
        this.init();
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('transform-container');
        this._container.requireModule('item-selector');
        this._container.requireModule('popup');
    };

    ShareController.prototype._initActions = function() {
        this.__initCakeImage();

        this.__loadFriendsData();
        this.__initFriendsList();
        this.__initFriendsPopup();
    };

    ShareController.prototype.__initCakeImage = function() {
        this.__downloadLink = tuna.dom.selectOne('#download_link');
        this.__cakeImage = tuna.dom.selectOne('#share_cake_image');

        this._db.subscribe('cake_data', function(event, data) {
            this.__cakeImage.src = data.image_url;
            this.__downloadLink.href
                = '/api/?method=utils.downloadImage&url=' + data.image_url;
        }, this);
    };

    ShareController.prototype.__initFriendsPopup = function() {
        this.__friendsPopup = this._container.getOneModuleInstance('popup');
        this.__friendsPopup.subscribe('popup-close', function() {
            this.__friendsList.clear();
        }, this);

        this.__friendsPopup.subscribe('popup-apply', function() {
            this.__friendsList.clear();
        }, this);
    };

    ShareController.prototype.__initFriendsList = function() {
        this.__friendsList
            = this._container.getOneModuleInstance('item-selector');

        this.__friendsList.subscribe('selected', function(event, index) {
            this.__selectedFriend = this._db.get('friends_list')[index];
        }, this);

        this.__friendsList.subscribe('deselected', function(event, index) {
            this.__selectedFriend = null;
        }, this);
    };

    ShareController.prototype.__loadFriendsData = function() {
        this.__friendsListContainer
            = this._container.getOneModuleInstance('transform-container');

        var getFriends
            = tuna.rest.factory.createMethod('social.friends.getList');

        getFriends.subscribe('result', function(event, result) {
            this._db.set('friends_list', result);

            this.__friendsListContainer.applyData(result);
            this.__friendsList.update();
        }, this);

        getFriends.call();
    };

    ShareController.prototype.canGoNext = function() {
        return false;
    };

    tuna.view.registerController(new ShareController('share_step'));
})();

89052942279