(function() {

    var RecipeController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__popupRecipe = null;
        this.__popupIndex = -1;
    };

    tuna.extend(RecipeController, tuna.view.StepViewController);

    RecipeController.prototype.canClose = function(index) {
        var selectedRecipe = model.orders.getCurrentRecipe();
        if (index === 'order_step' && selectedRecipe === null) {
            alert('Для продолжения необходимо выбрать рецепт!');
            return false;
        }

        return true;
    };

    RecipeController.prototype.open = function() {
        model.orders.initCurrentOrder(model.cakes.getCurrentCake());

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__initRecipeList();
        this.__initRecipeSelection();
        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initRecipeList = function() {
        var self = this;

        var getRecipesList
            = tuna.rest.factory.createMethod('recipes.getList');

        getRecipesList.addEventListener('result', function(event, result) {
            model.recipes.setRecipes(result);
            self.__updateView();
        });

        getRecipesList.call();
    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        var self = this;

        var descriptionPopup = ui.Popup.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        descriptionPopup.addEventListener('popup-apply', function() {
            var input = tuna.dom.selectOne(
                'input[value=' + self.__popupIndex + '].j-recipe-radio'
            );

            input.checked = true;

            tuna.dom.dispatchEvent(input, 'click');
        });
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');

                self.__popupRecipe = model.recipes.getRecipeAt(index);
                self.__popupIndex = index;

                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, 'input.j-recipe-radio', 'click',
            function(event) {
                model.orders.setCurrentRecipeIndex(this.value);

                self.__updateView();
            }
        );
    };

    RecipeController.prototype.__updateView = function() {
        this._container.applyData({
            'cake': model.cakes.getCurrentCake(),
            'price': model.orders.getPrice(),
            'recipes': model.recipes.getRecipes(),
            'popup_recipe': this.__popupRecipe
        });
    };

    tuna.view.registerController(new RecipeController('recipe_step'));

})();