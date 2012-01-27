(function() {

    var RecipeController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__popupRecipe = null;
        this.__popupIndex = -1;

        this.__cityPopup = null;
        this.__cityAutocomplete = null;
    };

    tuna.extend(RecipeController, tuna.view.PageViewController);

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

        this.__cityPopup.open();

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('autocomplete');
        this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__initCityPopup();

        this.__initRecipeSelection();

        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initCityPopup = function() {
        var self = this;

        this.__cityAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__cityAutocomplete.setFilterCallback(function(item) {
            return item.city.name;
        });

        var okButton = tuna.dom.selectOne('#city_ok_button');
        this.__cityAutocomplete.addEventListener('change', function() {
            if (null === self.__cityAutocomplete.getSelectedData()) {
                tuna.dom.addClass(okButton, 'disabled');
            } else {
                tuna.dom.removeClass(okButton, 'disabled');
            }
        });

        this.__cityPopup
            = ui.Popup.create(tuna.dom.selectOne('#city_selection_popup'));

        this.__cityPopup.addEventListener('popup-apply', function(event) {
            var selectedBakery = self.__cityAutocomplete.getSelectedData();
            if (selectedBakery === null) {
                event.preventDefault();
            } else {
                model.orders.setCurrentBakery(selectedBakery);

                tuna.rest.call(
                    'recipes.getList', { 'bakery_id': selectedBakery.id },
                    function(result) {
                        model.recipes.setRecipes(result);
                        self.__updateView();
                        self.__selectRecipeAt(0);
                    }
                );

                self.__updateView();
            }
        });

        var self = this;
        tuna.rest.call('bakeries.getList', function(result) {
            self.__cityAutocomplete.setData(result);
            model.bakeries.setBakeries(result);
        });
    };


    RecipeController.prototype.__initDescriptionPopup = function() {
        var descriptionPopup = ui.Popup.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        var self = this;
        descriptionPopup.addEventListener('popup-apply', function() {
            self.__selectRecipeAt(self.__popupIndex);
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

    RecipeController.prototype.__selectRecipeAt = function(index) {
        var input = tuna.dom.selectOne
            ('input[value=' + index + '].j-recipe-radio');

        input.checked = true;

        tuna.dom.dispatchEvent(input, 'click');
    };

    tuna.view.registerController(new RecipeController('recipe_step'));

})();