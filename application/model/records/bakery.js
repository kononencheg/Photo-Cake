/**
 * @extends {tuna.model.Record}
 * @param {Object=} data
 * @constructor
 */
var Bakery = function(data) {

    /**
     * @type {string}
     */
    this.name = '';

    /**
     * @type string
     */
    this.email = '';

    /**
     * @type model.records.City
     */
    this.city = null;

    /**
     * @type number
     */
    this.deliveryPrice = 0;

    /**
     * @type {Array.<string>}
     */
    this.dimensionIds = null;

    /**
     * @type {boolean}
     */
    this.isNative = false;

    tuna.model.Record.call(this, data);
};

tuna.utils.extend(Bakery, tuna.model.Record);

/**
 * @override
 */
Bakery.prototype.populate = function(data) {
    this.id = data['id'];
    this.name = data['name'];
    this.email = data['email'];
    this.city = new model.records.City(data['city']);
    this.deliveryPrice = data['delivery_price'];
    this.dimensionIds = data['available_dimension_ids'];
};

/**
 * @override
 */
Bakery.prototype.serialize = function() {
    return {
        'id': this.id,
        'city': this.city.serialize(),
        'isNative': this.isNative
    };
};


/**
 * @extends {Bakery}
 * @constructor
 */
model.records.Bakery = Bakery;

tuna.model.recordFactory.registerRecord('bakery', new model.records.Bakery());