(function() {

    tuna.namespace('rest.ok.wall');

    var Post = function(name) {
        tuna.rest.RemoteMethod.call(this, name);
    };

    tuna.extend(Post, tuna.rest.RemoteMethod);

    Post.prototype.call = function(args) {
        if (args.user_id === undefined) {
            this.__wallPost();
        }
    };

    Post.prototype.__notificationPost = function(uid) {
        var request = {
            'uid': uid,
            'method' : 'notifications.sendSimple',
            'text': 'Смотри, какой у меня получился торт!'
        };

        var self = this;
        FAPI.Client.call(request, function(status, data, error) {
            if (error === null) {
                self.dispatch('result', data);
            } else {
                self.dispatch('error', error);
            }
        });
    };

    Post.prototype.__wallPost = function() {
        var request = {
            'method' : 'stream.publish',
            'message': 'сделал прекрасный тортик ',
            'attachment': JSON.stringify({
                'caption': 'Попробуйте сделать свой тортик! Закажите настоящий или отправьте друзьям!',
                'media': [{ 'href': 'link', 'src': 'img/title.jpg', 'type': 'image' }]
            }),
            'action_links': JSON.stringify([{'text': 'Сделать тортик', 'href': 'param1=value1' }])
        };


        var self = this;
        FAPI.Client.call(request, function(status, data, error) {
            if (error === null) {
                self.dispatch('result', data);
            } else {
                self.dispatch('error', error);
            }
        });
    };

    rest.ok.wall.Post = Post;
})();

