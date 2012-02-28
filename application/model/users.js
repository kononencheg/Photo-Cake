/**
 * @constructor
 */
var Users = function() {
    this.__currentUser = null;
};

/**
 * @param {model.records.User} user
 */
Users.prototype.setCurrentUser = function(user) {
    this.__currentUser = user;
};

/**
 * @return {model.records.User}
 */
Users.prototype.getCurrentUser = function() {
    return this.__currentUser;
};

/**
 * @type {Users}
 */
model.users = new Users();

