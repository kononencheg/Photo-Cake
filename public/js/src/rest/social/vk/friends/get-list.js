(function() {

    var GetList = function() {
        rest.social.vk.VKMethod.call(this, 'friends.get');
    };

    tuna.utils.extend(GetList, rest.social.vk.VKMethod);

    GetList.prototype._completeArguments = function(args) {
        return { 'fields': 'uid,first_name,last_name,photo' };
    };

    GetList.prototype._mapResponse = function(response) {
        var result = [];

        var i = 0,
            l = response.length;

        var value = null;
        var user = null;
        while (i < l) {
            value = response[i];

            user = new model.records.User();
            user.id = value.uid;
            user.name = value.first_name + ' ' + value.last_name;
            user.userpicUrl = value.photo;

            result.push(user);

            i++;
        }


        return result;
    };

    tuna.rest.factory.addMethod('social.friends.get', new GetList())

})();
