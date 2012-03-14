/**
 * @constructor
 * @param {Object=} data
 * @extends {tuna.model.Record}
 */
var City = function (data) {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {string}
     */
    this.name = '';

    /**
     * @type {number}
     */
    this.timezoneOffset = 0;

    tuna.model.Record.call(this, data);
};

tuna.utils.extend(City, tuna.model.Record);

/**
 * @override
 */
City.prototype.populate = function(data) {
    this.id = data['id'] || null;
    this.name = data['name'] || null;
    this.timezoneOffset = data['timezone_offset'] || null;
};

/**
 * @override
 */
City.prototype.serialize = function() {
    return {
        'id': this.id,
        'name': this.name
    };
};

/**
 * @constructor
 * @extends {City}
 */
model.records.City = City;

tuna.model.recordFactory.registerRecord('city', new model.records.City());