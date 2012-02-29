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
 * @override
 */
User.prototype.serialize = function() {
    return {
        'id': this.id,
        'name': this.name,
        'network': this.network,
        'userpicUrl': this.userpicUrl
    };
};


/**
 * @extends {User}
 * @constructor
 */
model.records.User = User;

