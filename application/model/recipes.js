(function() {

    var Recipes = function() {
        this.__list = [];
    };

    Recipes.prototype.clearRecipes = function() {
        this.__list.length = 0;
    };

    Recipes.prototype.addRecipe = function(recipe) {
        this.__list.push(recipe);
    };

    Recipes.prototype.getRecipeAt = function(index) {
        return this.__list[index];
    };

    Recipes.prototype.getList = function() {
        return this.__list;
    };

    model.recipes = new Recipes();

})();
