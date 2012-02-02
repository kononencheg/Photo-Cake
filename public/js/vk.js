(function() {

    tuna.namespace('rest.social.vk');

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

    rest.social.vk.VKMethod = VKMethod;

})();
(function() {

    var GetCurrent = function() {
        rest.social.vk.VKMethod.call(this, 'getProfiles');

        this.__user = null;

        this.__handleCity = tuna.bind(this.__handleCity, this);
    };

    tuna.extend(GetCurrent, rest.social.vk.VKMethod);

    GetCurrent.prototype._completeArguments = function(args) {
        return {
            'fields': 'uid,first_name,last_name,city',
            'uid': tuna.config.get('viewer_id')
        };
    };

    GetCurrent.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            var value = data.response[0];

            this.__user = new model.records.User();
            this.__user.id = value.uid;
            this.__user.name = value.first_name + ' ' + value.last_name;
            this.__user.userpicUrl = value.photo;
            this.__user.network = 'vk';

            VK.api('places.getCityById', {
                'cids': value.city
            }, this.__handleCity);

        } else {
            this.dispatch('error', data);
        }
    };

    GetCurrent.prototype.__handleCity = function(data) {
        if (data.response !== undefined) {
            this.__user.city = data.response[0].name;
            this.dispatch('result', this.__user);
        } else {
            this.dispatch('error', data);
        }
    };

    tuna.rest.factory.addMethod('social.users.getCurrent', new GetCurrent())

})();
(function() {

    var GetList = function() {
        rest.social.vk.VKMethod.call(this, 'friends.get');
    };

    tuna.extend(GetList, rest.social.vk.VKMethod);

    GetList.prototype._completeArguments = function(args) {
        return { 'fields': 'uid,first_name,last_name,photo' };
    };

    GetList.prototype._mapResponse = function(response) {
        var result = [];

        var i = 0,
            l = response.length;

        var value = null;
        var user = null;
        while (i < l) {
            value = response[i];

            user = new model.records.User();
            user.id = value.uid;
            user.name = value.first_name + ' ' + value.last_name;
            user.userpicUrl = value.photo;

            result.push(user);

            i++;
        }


        return result;
    };

    tuna.rest.factory.addMethod('social.friends.get', new GetList())

})();
(function() {

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
            this.__imageData = args.image || null;
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

    tuna.rest.factory.addMethod('social.wall.post', new Post())

})();
