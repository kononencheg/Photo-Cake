(function() {

    var GetList = function() {
        tuna.rest.Method.call(this);

        this.__handleFriendsList = tuna.utils.bind(this.__handleFriendsList, this);
        this.__handleFriendsData = tuna.utils.bind(this.__handleFriendsData, this);
    };

    tuna.utils.extend(GetList, tuna.rest.Method);

    GetList.prototype.call = function(args) {
        var self = this;

        FAPI.Client.call({
            'method': 'friends.get'
        }, this.__handleFriendsList);
    };

    GetList.prototype.__handleFriendsList = function(status, data, error) {
        if (status === 'ok') {
            FAPI.Client.call({
                'method': 'users.getInfo',
                'uids': data.join(','),
                'fields': 'uid,first_name,last_name,pic_1'
            }, this.__handleFriendsData);
        } else {
            this.notify('error', error);
        }
    };

    GetList.prototype.__handleFriendsData = function(status, data, error) {
        if (status === 'ok') {
            var result = [];

            var value = null;
            for (var i in data) {
                value = data[i];
                result.push({
                    'id': value.uid,
                    'name': value.first_name + ' ' + value.last_name,
                    'userpic': value.pic_1
                });
            }

            this.dispatch('result', result);
        } else {
            this.dispatch('error', error);
        }
    };

    tuna.rest.factory.addMethod('social.friends.get', new GetList())

})();
