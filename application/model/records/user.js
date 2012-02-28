/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var User = function() {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {string}
     */
    this.name = '';

    /**
     * @type {string}
     */
    this.city = '';

    /**
     * @type {string}
     */
    this.userpicUrl = '';

    /**
     * @type {string}
     */
    this.network = ''
};

tuna.utils.extend(User, tuna.model.Record);

/**
 * @extends {User}
 * @constructor
 */
model.records.User = User;

