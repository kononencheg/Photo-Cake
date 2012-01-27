(function() {

    tuna.namespace('rest.ok.friends');

    var GetList = function() {
        tuna.rest.RemoteMethod.call(this);

        this.__handleFriendsList = tuna.bind(this.__handleFriendsList, this);
        this.__handleFriendsData = tuna.bind(this.__handleFriendsData, this);
    };


    tuna.extend(GetList, tuna.rest.RemoteMethod);

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

    rest.ok.friends.GetList = GetList;

})();
