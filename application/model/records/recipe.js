/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Recipe = function() {

    /**
     *
     * @type {string}
     */
    this.id = '';

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
    this.dimensionPrices = data['dimension_prices'];
};

/**
 * @override
 */
Recipe.prototype.serialize = function() {
    return {
        'id': this.id,
        'imageUrl': this.imageUrl,
        'desc': this.desc,
        'name': this.name
    };
};

/**
 * @param {number} weight
 * @return {number}
 */
Recipe.prototype.getWeightPrice = function(weight) {
    var weightKey = (weight).toString().replace('.', '_');
    return this.dimensionPrices[weightKey]['price'];
};

/**
 * @extends {Recipe}
 * @constructor
 */
model.records.Recipe = Recipe;

tuna.model.recordFactory.registerRecord('recipe', new model.records.Recipe());