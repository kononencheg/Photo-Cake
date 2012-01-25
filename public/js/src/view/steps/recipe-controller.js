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
        var cityList = tuna.dom.selectOne('#city_list');
        tuna.dom.removeClass(cityList, 'hidden');
        var selectedBakery = null;

        this.__cityAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__cityAutocomplete.setFilterCallback(function(item) {
            return item.city.name;
        });

        /*this.__cityAutocomplete.addEventListener('selected', function(event, item) {
            tuna.dom.addClass(cityList, 'hidden');
            selectedBakery = item;
        });

        var input = this.__cityAutocomplete.getInput();

        tuna.dom.addEventListener(input, 'focus', function(event) {


            self.__cityAutocomplete.applyFilter('');
            input.value = '';
        });

        tuna.dom.addEventListener(input, 'change', function(event) {
            if (self.__cityAutocomplete.getCurrentItem() !== null) {
                tuna.dom.addClass(cityList, 'hidden');
            }
        });*/

        this.__cityPopup
            = ui.Popup.create(tuna.dom.selectOne('#city_selection_popup'));

        this.__cityPopup.addEventListener('popup-apply', function(event) {
            if (selectedBakery === null) {
                event.preventDefault();
            } else {
                tuna.rest.call(
                    'recipes.getList', { 'bakery_id': selectedBakery.id },
                    function(result) {
                        model.recipes.setRecipes(result);
                        self.__updateView();
                    }
                );
            }
        });

        var self = this;
        tuna.rest.call('bakeries.getList', function(result) {
            self.__cityAutocomplete.setData(result);
        });
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