/**
 * @extends {tuna.model.Record}
 * @param {!*=} opt_rawData Исходные данные экземпляра.
 * @constructor
 */
var Recipe = function(opt_rawData) {

    /**
     *
     * @type {string}
     */
    this.name = '';

    /**
     *
     * @type {string}
     */
    this.desc = '';

    /**
     *
     * @type {string}
     */
    this.imageUrl = '';

    /**
     *
     * @type {Object.<string, Object.<string, number>>}
     */
    this.dimensionPrices = {};

    tuna.model.Record.call(this, opt_rawData);
};

tuna.utils.extend(Recipe, tuna.model.Record);

/**
 * @override
 */
Recipe.prototype.populate = function(data) {
    this.id = data['id'];
    this.imageUrl = data['image_url'];
    this.desc = data['desc'];
    this.name = data['name'];
    this.dimensionPrices = data['dimension_prices'] || null;
};

/**
 * @override
 */
Recipe.prototype.serialize = function(cake) {
    var result = {
        'id': this.id,
        'imageUrl': this.imageUrl,
        'desc': this.desc,
        'name': this.name
    };

    if (cake !== undefined) {
        result['price'] = this.getWeightPrice(cake.dimension.weight);
    }

    return result;
};

/**
 * @private
 * @param {number} weight
 * @return {number}
 */
Recipe.prototype.getWeightPrice = function(weight) {
    var weightKey = (weight).toString().replace('.', '_');

    if (this.dimensionPrices !== null &&
        this.dimensionPrices[weightKey] !== undefined) {
        return this.dimensionPrices[weightKey]['price'];
    }

    return 0;
};

/**
 * @extends {Recipe}
 * @constructor
 */
model.records.Recipe = Recipe;

tuna.model.recordFactory.registerRecord('recipe', new model.records.Recipe());