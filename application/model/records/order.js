/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Order = function() {

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
 * @override
 */
Order.prototype.serialize = function() {
    var decorationPrice = this.__getDecorationPrice(this.bakery);
    var recipePrice = this.__getRecipePrice();
    var deliveryPrice = this.__getDeliveryPrice();

    return {
        'cake': tuna.model.serialize(this.cake),
        'recipe': tuna.model.serialize(this.recipe),
        'bakery': tuna.model.serialize(this.bakery),
        'decorationPrice': decorationPrice,
        'recipePrice': recipePrice,
        'deliveryPrice': deliveryPrice,
        'totalPrice': decorationPrice + recipePrice + deliveryPrice
    };
};

/**
 * @return {number}
 * @private
 */
Order.prototype.__getDeliveryPrice = function() {
    if (this.bakery !== null) {
        return this.bakery.deliveryPrice;
    }

    return 0;
};

/**
 * @return {number}
 * @private
 */
Order.prototype.__getRecipePrice = function() {
    if (this.recipe !== null && this.cake !== null) {
        return this.recipe.getWeightPrice(this.cake.dimension.weight);
    }

    return 0;
};

/**
 * @param {model.records.Bakery} bakery
 * @return {number}
 * @private
 */
Order.prototype.__getDecorationPrice = function(bakery) {
    var price = 0;

    if (this.cake !== null) {
        var deco = this.cake.getDecorations();
        if (deco !== null) {
            var i = 0,
                l = deco.length;

            while (i < l) {
                price += bakery.decorationPrices[deco[i]['name']];
                i++;
            }
        }
    }

    return price;
};

/**
 * @extends {Order}
 * @constructor
 */
model.records.Order = Order;
