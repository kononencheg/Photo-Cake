(function() {

    var RecipeController = function() {
        tuna.view.PageViewController.call(this);

        this.__popupRecipe = null;
        this.__popupIndex = -1;

        this.__cityPopup = null;
        this.__cityAutocomplete = null;

        this.__transformer = null;
    };

    tuna.utils.extend(RecipeController, tuna.view.PageViewController);

    RecipeController.prototype.open = function() {
        model.orders.updateOrder();

        this.__cityPopup.open();

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('template-transformer');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('autocomplete');
        this._container.requireModule('popup-button');
    };

    RecipeController.prototype._initActions = function() {
        model.orders.updateOrder();

        this.__transformer
            = this._container.getOneModuleInstance('template-transformer');
        this.__transformer.setTransformHandler(this);

        this.__initCityPopup();

        this.__loadBakeries();

        this.__initRecipeSelection();

        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initCityPopup = function() {
        var self = this;

        this.__cityAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__cityAutocomplete.setItemSerializeCallback(function(bakery) {
            return bakery.city;
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
            = tuna.ui.popups.create(tuna.dom.selectOne('#city_selection_popup'));

        var bakery = null;

        this.__cityPopup.addEventListener('popup-open', function(event) {
            bakery = model.orders.getOrderBakery();
        });

        this.__cityPopup.addEventListener('popup-apply', function(event) {
            var selectedBakery = self.__cityAutocomplete.getSelectedData();
            if (selectedBakery === null) {
                event.preventDefault();
            } else {
                if (bakery !== selectedBakery) {
                    model.orders.setOrderBakery(selectedBakery);

                    self.__loadRecipes();
                    self.__updateView();
                }
            }
        });

    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        var descriptionPopup = tuna.ui.popups.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        var self = this;
        descriptionPopup.addEventListener('popup-apply', function() {
            self.__selectRecipeAt(self.__popupIndex);
        });
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;
        var target = this._container.getTarget();

        tuna.dom.addChildEventListener(
            target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');

                self.__popupRecipe = model.recipes.getRecipeAt(index);
                self.__popupIndex = index;

                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            target, 'input.j-recipe-radio', 'click',
            function(event) {
                var recipe = model.recipes.getRecipeAt(this.value);
                model.orders.setOrderRecipe(recipe);

                self.__updateView();
            }
        );
    };

    RecipeController.prototype.__updateView = function() {
        this.__transformer.applyTransform({
            'order': model.orders.getOrder(),
            'recipes': model.recipes.getList(),
            'popup_recipe': this.__popupRecipe
        });
    };

    RecipeController.prototype.__selectRecipeAt = function(index) {
        var input = tuna.dom.selectOne
            ('input[value=' + index + '].j-recipe-radio');

        input.checked = true;

        tuna.dom.dispatchEvent(input, 'click');
    };

    RecipeController.prototype.__loadRecipes = function() {
        var self = this;
        var bakery = model.orders.getOrderBakery();

        tuna.rest.call('recipes.get', { 'bakery_id': bakery.id },
            function(result) {
                model.recipes.clearRecipes();

                var i = 0,
                    l = result.length;

                var value = null;
                var recipe = null;
                while (i < l) {
                    value = result[i];

                    recipe = new model.records.Recipe();
                    recipe.id = value.id;
                    recipe.name = value.name;
                    recipe.desc = value.desc;
                    recipe.price = value.price;
                    recipe.imageUrl = value.image_url;
                    recipe.dimensionPrices = value.dimension_prices;

                    model.recipes.addRecipe(recipe);

                    i++;
                }


                self.__updateView();
                self.__selectRecipeAt(0);
            }
        );
    };

    RecipeController.prototype.__loadBakeries = function() {
        var self = this;

        tuna.rest.call('users.getBakeries', null, function(result) {
            var i = 0,
                l = result.length;

            var value = null;
            var bakery = null;
            while (i < l) {
                value = result[i];

                bakery = new model.records.Bakery();
                bakery.id = value.id;
                bakery.city = value.city.name;
                bakery.deliveryPrice = value.delivery_price;

                model.bakeries.addBakery(bakery);

                i++;
            }

            self.__cityAutocomplete.setData(model.bakeries.getList());

            var user = model.users.getCurrentUser();
            if (user !== null) {
                self.__cityAutocomplete.selectValue(user.city);
            }
        });
    };

    tuna.view.registerController('recipe_step', new RecipeController());

})();