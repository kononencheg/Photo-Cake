/**
 * @constructor
 */
var Recipes = function() {

    /**
     * @type {Array.<model.records.Recipe>}
     * @private
     */
    this.__list = null;
};

/**
 * @param {Array.<model.records.Recipe>} recipes
 */
Recipes.prototype.setRecipes = function(recipes) {
    this.__list = recipes;
};

/**
 * @param {string} id
 * @return {model.records.Recipe}
 */
Recipes.prototype.getRecipeById = function(id) {
    var i = 0,
        l = this.__list.length;

    while (i < l) {
        if (this.__list[i].id === id) {
            return this.__list[i];
        }

        i++;
    }

    return null;
};

/**
 * @return {Array.<model.records.Recipe>}
 */
Recipes.prototype.getRecipes = function() {
    return this.__list;
};

/**
 * @type {Recipes}
 */
model.recipes = new Recipes();

