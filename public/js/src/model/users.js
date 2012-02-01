(function() {

    tuna.namespace('model');

    /**
     * @constructor
     */
    var Users = function() {
        this.__currentUser = null;
    };

    Users.prototype.setCurrentUser = function(user) {
        this.__currentUser = user;
    };

    Users.prototype.getCurrentUser = function() {
        return this.__currentUser;
    };

    model.users = new Users();

})();
