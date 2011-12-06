(function() {

    tuna.namespace('rest.vk.wall');

    var Post = function() {
        rest.CommonMethod.call(this, 'social.wall.post');

        this.__userID = null;
        this.__imageURL = null;

        this.__handleSavePhoto = tuna.bind(this.__handleSavePhoto, this);
        this.__handleWallPost  = tuna.bind(this.__handleWallPost, this);
        this.__handleUploadURL = tuna.bind(this.__handleUploadURL, this);
    };

    tuna.extend(Post, rest.CommonMethod);

    Post.prototype.call = function(args) {
        if (args !== undefined) {
            this.__userID = args.user_id || null;
            this.__imageURL = args.image_url || null;
        }

        var params = {};
        if (this.__userID  !== null) {
            params.uid = this.__userID;
        }

        VK.api('photos.getWallUploadServer', params, this.__handleUploadURL);
    };

    Post.prototype.__handleUploadURL = function(result) {
        if (result.response !== undefined) {
            result.response.image_url = this.__imageURL;
            rest.CommonMethod.prototype.call.call(this, result.response);
        } else {
            this.notify('error', result);
        }
    };

    Post.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) {}

        if (result !== null) {
            VK.api('photos.saveWallPhoto', result, this.__handleSavePhoto);
        } else {
            this.notify('error', data);
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
            this.notify('error', result);
        }
    };

    Post.prototype.__handleWallPost = function(result) {
        if (result.response !== undefined) {
            this.notify('result', true);
        } else {
            this.notify('error', result);
        }
    };

    rest.vk.wall.Post = Post;

})();