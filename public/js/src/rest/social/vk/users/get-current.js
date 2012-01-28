(function() {

    var GetCurrent = function() {
        rest.social.vk.VKMethod.call(this, 'getProfiles');

        this.__user = null;

        this.__handleCity = tuna.bind(this.__handleCity, this);
    };

    tuna.extend(GetCurrent, rest.social.vk.VKMethod);

    GetCurrent.prototype._completeArguments = function(args) {
        return {
            'fields': 'uid,first_name,last_name,city',
            'uid': tuna.config.get('viewer_id')
        };
    };

    GetCurrent.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            var value = data.response[0];

            this.__user = new model.records.User();
            this.__user.id = value.uid;
            this.__user.name = value.first_name + ' ' + value.last_name;
            this.__user.userpicUrl = value.photo;

            VK.api('places.getCityById', {
                'cids': value.city
            }, this.__handleCity);

        } else {
            this.dispatch('error', data);
        }
    };

    GetCurrent.prototype.__handleCity = function(data) {
        if (data.response !== undefined) {
            this.__user.city = data.response[0].name;
            this.dispatch('result', this.__user);
        } else {
            this.dispatch('error', data);
        }
    };

    tuna.rest.factory.addMethod('social.users.getCurrent', new GetCurrent())

})();
