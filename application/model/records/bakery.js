/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Bakery = function() {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {string}
     */
    this.city = '';

    /**
     * @type {number}
     */
    this.deliveryPrice = 0;
};

tuna.utils.extend(Bakery, tuna.model.Record);

/**
 * @override
 */
Bakery.prototype.populate = function(data) {
    this.id = data['id'];
    this.city = data['city']['name'];
    this.deliveryPrice = data['delivery_price'];
};

/**
 * @override
 */
Bakery.prototype.serialize = function() {
    return {
        'id': this.id,
        'city': this.city
    };
};


/**
 * @extends {Bakery}
 * @constructor
 */
model.records.Bakery = Bakery;

tuna.model.recordFactory.registerRecord('bakery', new model.records.Bakery());