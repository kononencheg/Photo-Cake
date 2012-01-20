(function() {

    tuna.namespace('rest.vk');

    var VKMethodFactory = function() {};

    tuna.implement(VKMethodFactory, tuna.rest.IMethodFactory);

    VKMethodFactory.prototype.createMethod = function(name) {
        switch (name) {
            case 'social.friends.get': return new rest.vk.friends.GetList();
            case 'social.wall.post': return new rest.vk.wall.Post();
        }

        return null;
    };

    rest.vk.VKMethodFactory = VKMethodFactory;

})();
(function() {

    tuna.namespace('rest.vk');

    var VKMethod = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this._handleResponse = tuna.bind(this._handleResponse, this);
    };

    tuna.extend(VKMethod, tuna.rest.RemoteMethod);

    VKMethod.prototype.call = function(args) {
        VK.api(this._name, this._completeArguments(args), this._handleResponse);
    };

    VKMethod.prototype._completeArguments = function(args) {
        return args;
    };

    VKMethod.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            this.dispatch('result', this._mapResponse(data.response));
        } else {
            this.dispatch('error', data);
        }
    };

    VKMethod.prototype._mapResponse = function(response) {
        return null;
    };

    rest.vk.VKMethod = VKMethod;

})();
(function() {

    tuna.namespace('rest.vk.friends');

    var GetList = function() {
        rest.vk.VKMethod.call(this, 'friends.get');
    };

    tuna.extend(GetList, rest.vk.VKMethod);

    GetList.prototype._completeArguments = function(args) {
        return { 'fields': 'uid,first_name,last_name,photo' };
    };

    GetList.prototype._mapResponse = function(response) {
        var result = [];

        var value = null;
        for (var i in response) {
            value = response[i];
            result.push({
                'id': value.uid,
                'name': value.first_name + ' ' + value.last_name,
                'userpic': value.photo
            });
        }

        return result;
    };

    rest.vk.friends.GetList = GetList;

})();
(function() {

    tuna.namespace('rest.vk.wall');

    var Post = function() {
        rest.CommonMethod.call(this, 'social.vk.uploadImage');

        this.__userID = null;
        this.__imageData = null;

        this.__handleSavePhoto = tuna.bind(this.__handleSavePhoto, this);
        this.__handleWallPost  = tuna.bind(this.__handleWallPost, this);
        this.__handleUploadURL = tuna.bind(this.__handleUploadURL, this);
    };

    tuna.extend(Post, rest.CommonMethod);

    Post.prototype.call = function(args) {
        if (args !== undefined) {
            this.__userID = args.user_id || null;
            this.__imageData = args.image_data || null;
        }

        var params = {};
        if (this.__userID  !== null) {
            params.uid = this.__userID;
        }

        VK.api('photos.getWallUploadServer', params, this.__handleUploadURL);
    };

    Post.prototype.__handleUploadURL = function(result) {
        if (result.response !== undefined) {
            result.response.image = this.__imageData;
            rest.CommonMethod.prototype.call.call(this, result.response);
        } else {
            this.dispatch('error', result);
        }
    };

    Post.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) {}

        if (result !== null && result.response !== undefined) {
            VK.api('photos.saveWallPhoto', result.response, this.__handleSavePhoto);
        } else {
            this.dispatch('error', data);
        }
    };

    Post.prototype.__handleSavePhoto = function(result) {
        if (result.response !== undefined && result.response.length > 0) {
            var photo = result.response[0];
            
            var userID = this.__userID;
            if (userID === null) {
                userID = photo.owner_id;
            }

            VK.api('wall.post', {
                'owner_id': userID,
                'message': 'Смотри, какой у меня получился торт!',
                'attachments': photo.id
            }, this.__handleWallPost);
        } else {
            this.dispatch('error', result);
        }
    };

    Post.prototype.__handleWallPost = function(result) {
        if (result.response !== undefined) {
            this.dispatch('result', true);
        } else {
            this.dispatch('error', result);
        }
    };

    rest.vk.wall.Post = Post;

})();
