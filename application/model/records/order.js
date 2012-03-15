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
    var decorationPrice = this.__getDecorationPrice();
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
 * @return {number}
 * @private
 */
Order.prototype.__getDecorationPrice = function() {
    var price = 0;

    if (this.cake !== null) {
        var deco = this.cake.getDecorations();
        if (deco !== null) {
            var i = 0,
                l = deco.length;

            while (i < l) {
                price += this.__getDecorationItemPrice(deco[i]['name']);
                i++;
            }
        }
    }

    return price;
};

/**
 * @param {string} name
 * @return {number}
 * @private
 */
Order.prototype.__getDecorationItemPrice = function(name) {
    switch (name) {
        case 'cherry': case 'grape': case 'kiwi': case 'raspberry':
        case 'strawberry': case 'orange': case 'peach': case 'lemon':
        case 'blueberry': case 'currant':
        return 10;

        case 'pig1': case 'car1': case 'hare1': case 'hedgehog1':
        case 'moose1': case 'owl1': case 'pin1': case 'sheep1':
        case 'raven1': case 'bear1': case 'car2': case 'car3': case 'mat1':
        case 'ia': case 'ladybug': case 'pig': case 'rabbit': case 'tiger':
        case 'winnie': case 'winnie1': case 'bootes':
        return 250;

        case 'doll1': case 'doll2':
        return 350;

        case 'flower1': case 'flower2':
        return 300;

        case 'flower3': case 'flower4': case 'flower5': case 'flower6':
        case 'physalis':
            return 200;

        default:
            return 0;
    }
};


/**
 * @extends {Order}
 * @constructor
 */
model.records.Order = Order;
