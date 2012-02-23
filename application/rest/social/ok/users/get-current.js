(function() {

    var GetCurrent = function() {
        tuna.rest.Method.call(this, null);
    };

    tuna.utils.extend(GetCurrent, tuna.rest.Method);

    GetCurrent.prototype.call = function(args) {
        var self = this;
        FAPI.Client.call({
            'method': 'users.getInfo',
            'fields': 'uid,first_name,last_name,current_location,gender',
            'uids': FAPI.Client.uid
        }, function(status, data, error) {
            if (status === 'ok' && data !== null && data.length > 0) {
                var value = data[0];

                var user = new model.records.User();
                user.id = value.uid;
                user.name = value.first_name + ' ' + value.last_name;
                user.city = value.location.city;
                user.userpicUrl = value.pic_1;
                user.network = 'ok';

                self.dispatch('result', user);
            } else {
                self.dispatch('error', error);
            }
        });
    };

    tuna.rest.methodFactory.registerMethod('social.users.getCurrent', new GetCurrent())

})();
