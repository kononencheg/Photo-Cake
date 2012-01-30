(function() {
    var FriendsPopup = function() {
        tuna.ui.modules.Module.call(this, 'friends-popup', '.j-friends-popup');

        this.__albumId = null;
    };

    tuna.extend(FriendsPopup, tuna.ui.modules.Module);

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

        FAPI.Client.call(
            { 'method': 'photos.getUploadUrl', 'aid': this.__albumId },
            function (status, url, error) {
                if (status === 'ok') {
                    var currentCake = model.cakes.getCurrentCake();
                    tuna.rest.call('social.ok.uploadImage', {
                        'image': currentCake.imageBase64,
                        'upload_url': 'http://api-sandbox.odnoklassniki.ru:8088/api/photos/upload',
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
                }
            }
        );
    };

    FriendsPopup.prototype.__showFriendsPopup = function(photo) {
        FAPI.UI.showNotification(
            'Смотри какой у меня получился торт!',
            'ok_cake_url=' + encodeURI(photo.standard_url)
        );
    };

    FriendsPopup.prototype.__post = function(photo) {
        FAPI.Client.call({
            'method' : 'stream.publish',
            'message': 'сделал прекрасный тортик ',
            'attachment': JSON.stringify({
                'caption': 'Попробуйте сделать свой тортик! Закажите настоящий или отправьте друзьям!',
                'media': [{ 'href': 'link', 'src': photo.standard_url, 'type': 'image' }]
            }),
            'action_links': JSON.stringify([{'text': 'Сделать тортик', 'href': '' }])
        }, function(status, data, error) {
            if (status === 'ok') {
                ui.Popup.alert('Торт успешно опубликован!');
            }
        });
    };

    tuna.ui.modules.register(new FriendsPopup());

})();