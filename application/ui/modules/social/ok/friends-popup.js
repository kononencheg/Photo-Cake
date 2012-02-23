(function() {
    var FriendsPopup = function() {
        tuna.ui.Module.call(this, '.j-friends-popup');

        this.__albumId = null;

        this.__showFriendsPopup = tuna.utils.bind(this.__showFriendsPopup, this);
        this.__post = tuna.utils.bind(this.__post, this);
    };

    tuna.utils.extend(FriendsPopup, tuna.ui.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        var self = this;

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            if (self.__albumId === null) {
                self.__getAlbum(self.__showFriendsPopup);
            } else {
                self.__uploadPhoto(self.__showFriendsPopup);
            }
        });

        return this;
    };

    FriendsPopup.prototype.postImage = function() {
        if (this.__albumId === null) {
            this.__getAlbum(this.__post);
        } else {
            this.__uploadPhoto(this.__post);
        }
    };

    FriendsPopup.prototype.__getAlbum = function(callback) {
        var self = this;

        var getAlbums = function() {
            FAPI.Client.call({
                'method': 'photos.getAlbums'
            }, function(status, data, error) {
                if (status === 'ok') {
                    self.__fetchAlbumId(data.albums);

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

    FriendsPopup.prototype.__fetchAlbumId = function(albums) {
        var i = 0,
            l = albums.length;

        var album = null;
        while (i < l) {
            album = albums[i];

            if (album.title === 'Мои тортики' &&
                album.description === 'Из приложения "Фото На Торте"') {
                this.__albumId = album.aid;
                break;
            }

            i++;
        }
    };

    FriendsPopup.prototype.__uploadPhoto = function(callback) {
        var self = this;

        var currentCake = model.cakes.getCurrentCake();
        tuna.rest.call('social.ok.uploadImage', {
            'image': currentCake.imageBase64,
            'upload_url': 'http://api.odnoklassniki.ru/api/photos/upload',
            'album_id': self.__albumId,
            'session_key': FAPI.Client.sessionKey,
            'application_key' : FAPI.Client.applicationKey,
            'secret_key' : FAPI.Client.sessionSecretKey
        }, function() {
            FAPI.Client.call({
                'method': 'photos.getUserAlbumPhotos',
                'aid': self.__albumId,
                'pagingDirection': 'backward',
                'count': 1
            }, function(status, data, error) {
                callback(data.photos.shift());
            });
        });

    };

    FriendsPopup.prototype.__showFriendsPopup = function(photo) {
        FAPI.UI.showNotification(
            'Смотри какой у меня получился торт!',
            'ok_cake_url=' + (photo ? this.__parsePhotoUrl(photo.standard_url) : 'url')
        );
    };

    FriendsPopup.prototype.__post = function(photo) {
        var url = photo ? this.__parsePhotoUrl(photo.standard_url) : 'url';
        var request = {
            'application_key': FAPI.Client.applicationKey,
            'session_key': FAPI.Client.sessionKey,
            'format': FAPI.Client.format,
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

        var sig = FAPI.Util.calcSignature(request, FAPI.Client.sessionSecretKey);

        window.API_callback = function(method, status, resig) {
            if(status == 'ok') {
                FAPI.Client.call(request, function(status, data, error) {
                    if (status === 'ok') {
                        tuna.ui.popups.alert('Торт успешно опубликован!');
                    } else {
                        tuna.ui.popups.alert(JSON.stringify(error));
                    }
                }, resig);
            }

            window.API_callback = null;
        };

        FAPI.UI.showConfirmation('stream.publish', 'Запостить в ленту?', sig);
    };

    FriendsPopup.prototype.__parsePhotoUrl = function(url) {
        var id = url.split('photoId=').pop().split('&').shift();
        var server = url.split('//').pop().split('.').shift();

        return server + '/' + id;
    };

    tuna.ui.modules.register('friends-popup', new FriendsPopup());

})();