/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var OKShareController = function() {
    tuna.view.PageViewController.call(this);

    /**
     * @type {Node}
     * @private
     */
    this.__downloadDataInput = null;

    /**
     * @private
     * @type ?tuna.ui.ModuleInstance|ui.DataImage
     */
    this.__cakeImage = null;


    /**
     * @type {?string}
     * @private
     */
    this.__albumId = null;

    this.__showFriendsPopup = tuna.utils.bind(this.__showFriendsPopup, this);
    this.__post = tuna.utils.bind(this.__post, this);

    /**
     * @override
     */
    this._modules = [ 'data-image-copy', 'button-group' ];
};

tuna.utils.extend(OKShareController, tuna.view.PageViewController);

/**
 * @override
 */
OKShareController.prototype.open = function() {
    if (this.__cakeImage !== null && this.__downloadDataInput !== null) {
        this.__downloadDataInput.value = this.__cakeImage.getData();
    }
};

/**
 * @override
 */
OKShareController.prototype._initActions = function() {
    this.__downloadDataInput = tuna.dom.selectOne('#download_data_input');
    this.__cakeImage = this._container.getModuleInstanceByName
        ('data-image-copy', 'cake-image');

    var self = this;

    var sendControls = this._container.getOneModuleInstance('button-group');
    sendControls.addEventListener('publish', function() {
        if (this.__albumId === null) {
            this.__getAlbum(this.__post);
        } else {
            this.__uploadPhoto(this.__post);
        }
    });

    sendControls.addEventListener('notify', function() {
        if (self.__albumId === null) {
            self.__getAlbum(self.__showFriendsPopup);
        } else {
            self.__uploadPhoto(self.__showFriendsPopup);
        }
    });
};

/**
 * @param {Object} albums
 * @private
 */
OKShareController.prototype.__fetchAlbumId = function(albums) {
    var i = 0,
        l = albums.length;

    var album = null;
    while (i < l) {
        album = albums[i];

        if (album['title'] === 'Мои тортики' &&
            album['description'] === 'Из приложения "Фото На Торте"') {
            this.__albumId = album['aid'];

            break;
        }

        i++;
    }
};

/**
 *
 * @param {function(string)} callback
 * @private
 */
OKShareController.prototype.__getAlbum = function(callback) {
    var self = this;

    var getAlbums = function() {
        FAPI.Client.call({
            'method': 'photos.getAlbums'
        }, function(status, data) {
            if (status === 'ok') {
                self.__fetchAlbumId(data['albums']);

                if (self.__albumId === null) {
                    FAPI.Client.call({
                        'method': 'photos.createAlbum',
                        'title': 'Мои тортики',
                        'description': 'Из приложения "Фото На Торте"',
                        'type': 'friends'
                    }, function(status, aid, error) {
                        if (status === 'ok') {
                            self.__albumId = aid;
                            self.__uploadPhoto(callback);
                        }
                    });
                } else {
                    self.__uploadPhoto(callback);
                }

            }
        });
    };

    FAPI.Client.call({
        'method': 'users.hasAppPermission',
        'ext_perm': 'PHOTO CONTENT'
    }, function(status, data, error) {
        if (!data) {
            window.API_callback = function(method, status, resig) {
                if (status === 'ok' && method === 'showPermissions') {
                    getAlbums();
                }

                window.API_callback = null;
            };

            FAPI.UI.showPermissions('["PHOTO CONTENT"]');
        } else {
            getAlbums();
        }
    });
};

/**
 * @param {function(string)} callback
 * @private
 */
OKShareController.prototype.__uploadPhoto = function(callback) {
    var self = this;

    tuna.rest.call('social.ok.uploadImage', {
        'image': this.__cakeImage.getData(),
        'upload_url': 'http://api.odnoklassniki.ru/api/photos/upload',
        'album_id': this.__albumId,
        'session_key': FAPI.Client['sessionKey'],
        'application_key' : FAPI.Client['applicationKey'],
        'secret_key' : FAPI.Client['sessionSecretKey']
    }, function() {
        FAPI.Client.call({
            'method': 'photos.getUserAlbumPhotos',
            'aid': self.__albumId,
            'pagingDirection': 'backward',
            'count': 1
        }, function(status, data, error) {
            callback(data['photos'].shift());
        });
    });

};

/**
 * @param {string} photo
 * @private
 */
OKShareController.prototype.__showFriendsPopup = function(photo) {
    FAPI.UI.showNotification(
        'Смотри какой у меня получился торт!',
        'ok_cake_url=' +
            (photo ? this.__parsePhotoUrl(photo['standard_url']) : 'url')
    );
};

/**
 * @param {string} photo
 * @private
 */
OKShareController.prototype.__post = function(photo) {
    var url = photo ? this.__parsePhotoUrl(photo['standard_url']) : 'url';
    var request = {
        'application_key': FAPI.Client['applicationKey'],
        'session_key': FAPI.Client['sessionKey'],
        'format': FAPI.Client['format'],
        'method' : 'stream.publish',
        'message': 'сделала торт!',
        'attachment': JSON.stringify({
            'caption': 'Попробуйте сделать свой тортик! Закажите настоящий или отправьте друзьям!',
            'media': [{ 'href': 'link', 'src': url, 'type': 'image' }]
        }),
        'action_links': JSON.stringify([
            {'text': 'Посмотреть тортик!', 'href': 'ok_cake_url=' + url },
            {'text': 'Сделать свой!', 'href': 'action=create'}
        ])
    };

    var sig = FAPI.Util.calcSignature(request, FAPI.Client['sessionSecretKey']);

    window['API_callback'] = function(method, status, resig) {
        if(status === 'ok') {
            FAPI.Client.call(request, function(status, data, error) {
                if (status === 'ok') {
                    tuna.ui.popups.alert('Торт успешно опубликован!');
                } else {
                    tuna.ui.popups.alert(JSON.stringify(error));
                }
            }, resig);
        }

        window['API_callback'] = null;
    };

    FAPI.UI.showConfirmation('stream.publish', 'Запостить в ленту?', sig);
};

/**
 * @param {string} url
 * @return {string}
 * @private
 */
OKShareController.prototype.__parsePhotoUrl = function(url) {
    var id = url.split('photoId=').pop().split('&').shift();
    var server = url.split('//').pop().split('.').shift();

    return server + '/' + id;
};

tuna.view.registerController('share_step', new OKShareController());