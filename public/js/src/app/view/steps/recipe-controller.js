(function() {

    var RecipeController = function(id) {
        tuna.view.StepViewController.call(this, id);


    };

    tuna.extend(RecipeController, tuna.view.StepViewController);

    RecipeController.prototype.canGoNext = function() {
        return false;
    };

    RecipeController.prototype._bootstrap = function() {
        this.init();
    };

    RecipeController.prototype._requireModules = function() {
       //this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__updateView();
    };

    RecipeController.prototype.__updateView = function() {
        this._container.applyData({
            'cake': {
                'mass': '100 кг',
                'price': '1000 рублей'
            }
        });
    };

    tuna.view.registerController(new RecipeController('recipe_step'));
})();
