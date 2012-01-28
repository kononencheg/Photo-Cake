(function() {

    tuna.namespace('model.records');

    var User = function() {
        this.id = '';
        this.name = '';
        this.city = '';
        this.userpicUrl = '';
    };

    tuna.extend(User, tuna.model.Record);

    model.records.User = User;

})();