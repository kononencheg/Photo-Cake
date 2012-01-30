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


        var self = this;

    };

    tuna.rest.factory.addMethod('social.wall.post', new Post())

})();

