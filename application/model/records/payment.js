/**
 * @extends {tuna.model.Record}
 * @param {!*=} opt_rawData Исходные данные экземпляра.
 * @constructor
 */
model.records.Payment = function(opt_rawData) {
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

    tuna.model.Record.call(this, opt_rawData);
};

tuna.utils.extend(model.records.Payment, tuna.model.Record);

/**
 * @override
 */
model.records.Payment.prototype.populate = function(data) {
    this.decoPrice = data['decoration_price'] || 0;
    this.recipePrice = data['recipe_price'] || 0;
    this.deliveryPrice = data['delivery_price'] || 0;
};

/**
 * @override
 */
model.records.Payment.prototype.serialize = function() {
    return {
        'decoPrice': this.decoPrice,
        'recipePrice': this.recipePrice,
        'deliveryPrice': this.deliveryPrice,
        'totalPrice': this.getTotalPrice()
    };
};

/**
 * @return {number}
 */
model.records.Payment.prototype.getTotalPrice = function() {
    return this.decoPrice + this.recipePrice + this.deliveryPrice;
};
