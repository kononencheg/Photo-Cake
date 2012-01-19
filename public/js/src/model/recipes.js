(function() {

    tuna.namespace('model');

    var Recipes = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Recipes, tuna.model.Resource);

    Recipes.prototype.setRecipes = function(recipes) {
        this.__storage.set('recipes', recipes);
    };

    Recipes.prototype.getRecipeAt = function(index) {
        return this.__storage.get('recipes')[index];
    };

    Recipes.prototype.getRecipes = function() {
        return this.__storage.get('recipes');
    };

    model.recipes = new Recipes();

})();
