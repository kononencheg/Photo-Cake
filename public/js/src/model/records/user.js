(function() {

    var User = function() {
        this.id = '';
        this.name = '';
        this.city = '';
        this.userpicUrl = '';
        this.network = ''
    };

    tuna.utils.extend(User, tuna.model.Record);

    model.records.User = User;

})();