/**
 * @extends {tuna.model.Record}
 * @param {!*=} opt_rawData Исходные данные экземпляра.
 * @constructor
 */
model.records.Order = function(opt_rawData) {

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

    tuna.model.Record.call(this, opt_rawData);
};

tuna.utils.extend(model.records.Order, tuna.model.Record);

/**
 * @override
 */
model.records.Order.prototype.populate = function(data) {
    this.id = data['id'];
    this.cake = new model.records.Cake(data['cake']);
    this.bakery = new model.records.Bakery(data['bakery']);
    this.recipe = new model.records.Recipe(data['recipe']);
    this.payment = new model.records.Payment(data['payment']);
};

/**
 * @override
 */
model.records.Order.prototype.serialize = function() {
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
model.records.Order.prototype.__getDeliveryPrice = function() {
    if (this.bakery !== null) {
        return this.bakery.deliveryPrice;
    }

    return 0;
};

/**
 * @return {number}
 * @private
 */
model.records.Order.prototype.__getRecipePrice = function() {
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
model.records.Order.prototype.__getDecorationPrice = function(bakery) {
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


tuna.model.recordFactory.registerRecord('order', new model.records.Order());