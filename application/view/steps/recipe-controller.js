/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var RecipeController = function() {
    tuna.view.PageViewController.call(this);

    /**
     * @type {model.records.Order}
     * @private
     */
    this.__order = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.popups.Popup}
     * @private
     */
    this.__cityPopup = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.forms.Autocomplete}
     * @private
     */
    this.__cityAutocomplete = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     * @private
     */
    this.__recipeTransformer = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     * @private
     */
    this.__cakeTransformer = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     * @private
     */
    this.__priceTransformer = null;
};

tuna.utils.extend(RecipeController, tuna.view.PageViewController);

/**
 * @override
 */
RecipeController.prototype.open = function() {
    this.__order = model.orders.updateOrder();

    this.__cakeTransformer.applyTransform(this.__order.cake.serialize());
    this.__priceTransformer.applyTransform(this.__order.payment.serialize());

    this.__cityPopup.open();
};

/**
 * @override
 */
RecipeController.prototype._requireModules = function() {
    this._container.requireModule('template-transformer');
    this._container.requireModule('data-image-copy');
    this._container.requireModule('button-group');
    this._container.requireModule('autocomplete');
    this._container.requireModule('popup');
};

/**
 * @override
 */
RecipeController.prototype._initActions = function() {
    this.__recipeTransformer = this._container.getModuleInstanceByName
                                ('template-transformer', 'recipes-list');
    this.__recipeTransformer.setTransformHandler(this);

    this.__cakeTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'cake-info');

    this.__priceTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'price-info');

    this.__initCityPopup();

    this.__initRecipePopup();

    var self = this;

    tuna.rest.call('users.getBakeries', null, function(result) {
        model.bakeries.setBakeries(result);

        self.__cityAutocomplete.setData(result);

        var user = model.users.getCurrentUser();
        if (user !== null) {
            self.__cityAutocomplete.selectValue(user.city);
        }

    }, 'bakery');

};

/**
 * @private
 */
RecipeController.prototype.__initCityPopup = function() {
    var self = this;

    this.__cityAutocomplete
        = this._container.getOneModuleInstance('autocomplete');

    this.__cityAutocomplete.setItemSerializeCallback(
        /**
         * @param {model.records.Bakery} bakery
         * @return {string}
         */
        function(bakery) {
            return bakery.city;
        }
    );

    var okButton = tuna.dom.selectOne('#city_ok_button');
    if (okButton !== null) {
        this.__cityAutocomplete.addEventListener('change', function() {
            if (null === self.__cityAutocomplete.getSelectedData()) {
                tuna.dom.addClass(okButton, 'disabled');
            } else {
                tuna.dom.removeClass(okButton, 'disabled');
            }
        });
    }

    this.__cityPopup = this._container.getModuleInstanceByName
                                            ('popup', 'city-popup');

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

                self.__priceTransformer.applyTransform
                    (self.__order.payment.serialize());
            }
        }
    });

};


/**
 * @private
 */
RecipeController.prototype.__initRecipePopup = function() {
    var self = this;


    var recipeTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipe-popup');


    var recipePopup = this._container.getModuleInstanceByName
        ('popup', 'recipe-popup');

    recipePopup.addEventListener('popup-apply', function(event, data) {
        self.__selectRecipeWithId(data['recipe_id']);
    });

    var recipeControls = this._container.getModuleInstanceByName
        ('button-group', 'recipes-list');

    recipeControls.setPreventDefault(false);

    recipeControls.addEventListener('show-recipe', function(event, button) {
        recipeTransformer.applyTransform
            (model.recipes.getRecipeById
                (button.getStringOption('recipe-id')).serialize());

        recipePopup.open();
    });

    recipeControls.addEventListener('select-recipe', function(event, button) {
        model.orders.setOrderRecipe
            (model.recipes.getRecipeById(button.getStringOption('recipe-id')));

        self.__priceTransformer.applyTransform
            (self.__order.payment.serialize());
    });
};

/**
 * @param {string} index
 * @private
 */
RecipeController.prototype.__selectRecipeWithId = function(index) {
    var input = tuna.dom.selectOne
        ('input[value=' + index + ']', this._container.getTarget());

    input.checked = true;

    tuna.dom.dispatchEvent(input, 'click');
};

/**
 * @private
 */
RecipeController.prototype.__loadRecipes = function() {
    var self = this;
    var bakery = model.orders.getOrderBakery();

    tuna.rest.call('recipes.get', { 'bakery_id': bakery.id }, function(result) {
        model.recipes.setRecipes(result);

        self.__recipeTransformer.applyTransform
            (tuna.model.serializeArray(result));

        self.__selectRecipeWithId(result[0].id);
    }, 'recipe');
};

tuna.view.registerController('recipe_step', new RecipeController());
