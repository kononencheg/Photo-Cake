(function() {

    var ShareController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__friendsList = null;
        this.__friendsListContainer = null;

        this.__wallPostMethod = null;
        
        this.__selectedFriend = null;

        this.__updateSelectedFriend = tuna.bind(this.__updateSelectedFriend, this);
        this.__updateFriendList = tuna.bind(this.__updateFriendList, this);
    };

    tuna.extend(ShareController, tuna.view.StepViewController);

    ShareController.prototype.canGoNext = function() {
        return true;
    };

    ShareController.prototype._bootstrap = function() {
        this.init();
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('transform-container');
        this._container.requireModule('selection-group');
        this._container.requireModule('popup');
        this._container.requireModule('data-image');
    };

    ShareController.prototype._initActions = function() {
        this.__initCakeImage();

        this.__initFriendsList();
        this.__initFriendsPopup();
        this.__initFriendsSearch();

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
                'image_data': self._db.get('cake_image')
            });
        });
    };

    ShareController.prototype.__initCakeImage = function() {
        var cakeDataImage = this._container.getOneModuleInstance('data-image');
        var downloadDataInput = tuna.dom.selectOne('#download_data_input');

        this._db.addEventListener('cake_image', function(event, data) {
            cakeDataImage.setData(data);
            downloadDataInput.value = data;
        });
    };

    ShareController.prototype.__initFriendsPopup = function() {
        var self = this;
        var popup = this._container.getOneModuleInstance('popup');
        
        popup.addEventListener('popup-close', function() {
            self.__friendsList.clearSelection();
        });

        popup.addEventListener('popup-apply', function() {
            self.__wallPostMethod.call({
                'image_data': self._db.get('cake_image'),
                'user_id': self.__selectedFriend.id
            });

            self.__friendsList.clearSelection();
        });
    };

    ShareController.prototype.__initFriendsList = function() {
        this.__friendsList
            = this._container.getOneModuleInstance('selection-group');

        this.__friendsList.addEventListener
            ('selected', this.__updateSelectedFriend);
        this.__friendsList.addEventListener
            ('deselected', this.__updateSelectedFriend);

        this._db.addEventListener
            ('filtered_friends_list', this.__updateSelectedFriend);

        this._db.addEventListener
            ('filtered_friends_list', this.__updateFriendList);

    };

    ShareController.prototype.__loadFriendsData = function() {
        var self = this;

        this.__friendsListContainer
            = this._container.getOneModuleInstance('transform-container');

        var getFriends = tuna.rest.factory.createMethod('social.friends.get');

        getFriends.addEventListener('result', function(event, result) {
            self._db.set('friends_list', result);
            self._db.set('filtered_friends_list', result);
        });

        getFriends.call();
    };

    ShareController.prototype.__initFriendsSearch = function() {
        var friendNameInput = tuna.dom.selectOne('#friend_search_input');
        var lastValue = null;

        tuna.dom.addEventListener(
            friendNameInput, 'keyup', tuna.bind(function(event) {
                if (friendNameInput.value !== lastValue) {
                    lastValue = friendNameInput.value;

                    this._db.set
                        ('filtered_friends_list', this.__filterNamedList
                            (lastValue, this._db.get('friends_list')));
                }
            }, this)
        );
    };

    ShareController.prototype.__updateSelectedFriend = function() {
        debugger;

        var friends = this._db.get('filtered_friends_list');
        var index = this.__friendsList.getLastSelectedIndex();

        if (friends[index] !== undefined) {
            this.__selectedFriend = friends[index];
        } else {
            this.__selectedFriend = null;
        }
    };

    ShareController.prototype.__updateFriendList = function(event, friends) {
        this.__friendsListContainer.applyData(friends);
        this.__friendsList.updateView();
    };

    ShareController.prototype.__filterNamedList = function(term, list) {
        var result = [];

        if (term.length === 0) {
            result = list;
        } else {
            var needle = term.toUpperCase();

            var i = 0,
                l = list.length;
            while (i < l) {
                if (list[i].name.toUpperCase().indexOf(needle) !== -1) {
                    result.push(list[i]);
                }

                i++;
            }
        }

        return result;
    };

    tuna.view.registerController(new ShareController('share_step'));
})();