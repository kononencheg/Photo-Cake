(function() {

    tuna.namespace('rest.vk.wall');

    var Post = function() {
        rest.CommonMethod.call(this, 'social.wall.post');
    };

    tuna.extend(Post, rest.CommonMethod);

    Post.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) { alert(data); }

        VK.api('wall.post', {
            'message': 'кононенко! торт!',
            'attachments': result.id
        }, function(res) {
            if (res.response !== undefined) {
                this.notify('result', true);
            } else {
                this.notify('error');
            }
        });
    };

    rest.vk.wall.Post = Post;

})();
