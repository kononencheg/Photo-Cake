(function() {

    tuna.namespace('model.records');

    var User = function() {
        this.id = '';
        this.name = '';
        this.city = '';
        this.userpicUrl = '';
        this.network = ''
    };

    tuna.extend(User, tuna.model.Record);

    model.records.User = User;

})();