(function() {

    tuna.namespace('rest.ok.wall');

    var Post = function(name) {
        tuna.rest.RemoteMethod.call(this, name);

        this.__handleConfirm = tuna.bind(this.__handleConfirm, this);
        this.__request = null;
    };

    tuna.extend(Post, tuna.rest.RemoteMethod);

    Post.prototype.call = function(args) {
        this.__request = {
            'method' : 'stream.publish',
            'uid': 0,
            'message': 'Смотри, какой у меня получился торт!'
        };

        FAPI.UI.showConfirmation(
            'stream.publish', 'Вы действительно хотите опубликовать торт?',
            FAPI.Util.calcSignature
                (this.__request, FAPI.Client.sessionSecretKey)
        );

        window.API_callback = this.__handleConfirm;
    };

    Post.prototype.__handleConfirm = function(method, status, attributes) {
        if(method == 'showConfirmation' && status == 'ok') {
            this.__request.sig = attributes;
            FAPI.Client.call(this.__request,
                function(status, data, error) {
                    alert(error.error_msg);
                }
            );
        }

        delete window.API_callback;
    };

    rest.ok.wall.Post = Post;
})();

