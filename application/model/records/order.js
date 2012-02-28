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
     * @type {model.records.User|tuna.model.Record}
     */
    this.user = null;

    /**
     * @type {model.records.Cake}
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
 * @extends {Order}
 * @constructor
 */
model.records.Order = Order;
