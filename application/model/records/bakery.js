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
 * @extends {Bakery}
 * @constructor
 */
model.records.Bakery = Bakery;
