/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Order = function() {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {tuna.model.Record|model.records.User}
     */
    this.user = null;

    /**
     * @type {model.records.RawCake}
     */
    this.cake = null;

    /**
     * @type {model.records.Bakery}
     */
    this.bakery = null;

    /**
     * @type {model.records.Recipe}
     */
    this.recipe = null;


    /**
     * @type {model.records.Payment}
     */
    this.payment = null;
};

tuna.utils.extend(Order, tuna.model.Record);

/**
 * @override
 */
Order.prototype.serialize = function() {
    return {
        'id': this.id,
        'user': this.user && this.user.serialize()
    };
};

/**
 * @extends {Order}
 * @constructor
 */
model.records.Order = Order;
