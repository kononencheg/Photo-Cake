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
     * @type {number}
     */
    this.price = 0;

    /**
     *
     * @type {string}
     */
    this.imageUrl = '';

    /**
     *
     * @type {Object}
     */
    this.dimensionPrices = {};
};

tuna.utils.extend(Recipe, tuna.model.Record);

/**
 * @extends {Record}
 * @constructor
 */
model.records.Recipe = Recipe;