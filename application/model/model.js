/**
 * @type tuna.model.ListResource
 */
model.bakeries = new tuna.model.ListResource('users.getBakeries', 'bakery');

/**
 * @type tuna.model.ListResource
 */
model.cities = new tuna.model.ListResource();

/**
 * @type tuna.model.ListResource
 */
model.cakes = new tuna.model.ListResource('cakes.getPromoted', 'cake');

/**
 * @type tuna.model.ListResource
 */
model.dimensions = new tuna.model.ListResource('dimensions.get', 'dimension');

/**
 * @type tuna.model.ListResource
 */
model.recipes = new tuna.model.ListResource('recipes.get', 'recipe');

/**
 * @type tuna.model.ItemResource
 */
model.currentBakery = new tuna.model.ItemResource();

/**
 * @type tuna.model.ItemResource
 */
model.currentCake = new tuna.model.ItemResource();

/**
 * @type tuna.model.ItemResource
 */
model.currentRecipe = new tuna.model.ItemResource();

/**
 * @type tuna.model.ItemResource
 */
model.currentOrder = new tuna.model.ItemResource();
