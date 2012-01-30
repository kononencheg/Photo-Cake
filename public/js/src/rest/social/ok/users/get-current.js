(function() {

    var GetCurrent = function() {
        tuna.rest.RemoteMethod.call(this, null);
    };

    tuna.extend(GetCurrent, tuna.rest.RemoteMethod);

    GetCurrent.prototype.call = function(args) {
        var self = this;
        FAPI.Client.call({
            'method': 'users.getInfo',
            'fields': 'uid,first_name,last_name,current_location,gender',
            'uids': FAPI.Client.uid
        }, function(status, data, error) {
            if (status === 'ok') {
                var value = data ? data[0] : {location:{}};

                var user = new model.records.User();
                user.id = value.uid;
                user.name = value.first_name + ' ' + value.last_name;
                user.city = value.location.city;
                user.userpicUrl = value.pic_1;

                self.dispatch('result', user);
            } else {
                self.dispatch('error', error);
            }
        });
    };

    tuna.rest.factory.addMethod('social.users.getCurrent', new GetCurrent())

})();
