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
};

tuna.utils.extend(Payment, tuna.model.Record);

/**
 * @override
 */
Payment.prototype.serialize = function() {
    return {
        'decoPrice': this.decoPrice,
        'recipePrice': this.recipePrice,
        'deliveryPrice': this.deliveryPrice,
        'totalPrice': this.decoPrice + this.recipePrice + this.deliveryPrice
    };
};

/**
 * @extends {Payment}
 * @constructor
 */
model.records.Payment = Payment;
