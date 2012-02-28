/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Payment = function() {
    /**
     * @type {number}
     */
    this.decoPrice = 0;

    /**
     * @type {number}
     */
    this.recipePrice = 0;

    /**
     * @type {number}
     */
    this.deliveryPrice = 0;

    /**
     * @type {number}
     */
    this.totalPrice = 0;
};

tuna.utils.extend(Payment, tuna.model.Record);

/**
 * @extends {Payment}
 * @constructor
 */
model.records.Payment = Payment;
