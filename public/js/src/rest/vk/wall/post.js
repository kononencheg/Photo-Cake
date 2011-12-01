(function() {

    tuna.namespace('rest.vk.wall');

    var Post = function() {
        rest.CommonMethod.call(this, 'social.wall.post');

        this.__userID = null;
    };

    tuna.extend(Post, rest.CommonMethod);

    Post.prototype.call = function(args) {
        if (args !== undefined && args.user_id !== undefined) {
            this.__userID = args.user_id;
        }

        rest.CommonMethod.prototype.call.call(this, args);
    };

    Post.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) { alert(data); }

        if (result !== null) {
            var self = this;
            VK.api('wall.post', {
                'owner_id': this.__userID,
                'message': 'Смотри, какой у меня получился торт!',
                'attachments': result.id
            }, function(res) {
                if (res.response !== undefined) {
                    self.notify('result', true);
                } else {
                    self.notify('error', data);
                }
            });
        } else {
            self.notify('error', data);
        }
    };

    rest.vk.wall.Post = Post;

})();
