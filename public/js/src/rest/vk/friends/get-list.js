(function() {

    tuna.namespace('rest.vk.friends');

    var GetList = function() {
        rest.vk.VKMethod.call(this, 'friends.get');
    };

    tuna.extend(GetList, rest.vk.VKMethod);

    GetList.prototype._completeArguments = function(args) {
        return { 'fields': 'uid,first_name,last_name,photo' };
    };

    GetList.prototype._mapResponse = function(response) {
        var result = [];

        var value = null;
        for (var i in response) {
            value = response[i];
            result.push({
                'id': value.uid,
                'name': value.first_name + ' ' + value.last_name,
                'userpic': value.photo
            });
        }

        return result;
    };

    rest.vk.friends.GetList = GetList;

})();
