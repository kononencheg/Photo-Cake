/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var OrderController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @private
     * @type tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer
     */
    this.__orderTransformer = null;

    /**
     * @type {function()}
     * @private
     */
    this.__handleBakeryUpdate = tuna.utils.bind(this.__handleBakeryUpdate, this);

    /**
     * @type {function()}
     * @private
     */
    this.__updateOrder = tuna.utils.bind(this.__updateOrder, this);

    /**
     * @override
     */
    this._modules = [ 'template-transformer', 'data-image-copy', 'datepicker',
                      'form', 'popup', 'popup-button', 'button-group' ];
};

tuna.utils.extend(OrderController, tuna.control.PageViewController);

/**
 * @override
 */
OrderController.prototype._initActions = function() {
    this.__orderTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'order-form');

    var self = this;

    var recipePopupButton = this._container.getModuleInstanceByName
        ('popup-button', 'recipe-popup');

    var recipePopup = recipePopupButton.getPopup();
    recipePopup.open();

    var recipesTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipes-list');

    var recipesForm = this._container.getModuleInstanceByName
        ('form', 'recipes-list');

    recipePopup.addEventListener('apply', function() {
        var recipeIds = recipesForm.getValue('recipe_id');
        var recipe = model.recipes.getItemById(recipeIds.shift());

        model.currentRecipe.set(recipe);
    });

    var orderForm = this._container.getModuleInstanceByName
        ('form', 'order-form');

    orderForm.addEventListener('result', function(event, order) {
        self._navigation.navigate('result', order);
    });

    orderForm.setValue('client_network', APP_NETWORK);

    var updateRecipesList = function() {
        var recipes = model.recipes.get();
        var cake = model.currentCake.get();
        if (recipes !== null && cake !== null) {
            recipesTransformer.applyTransform
                (tuna.model.serialize(recipes, cake));
        }
    };

    var popupRecipe = null;

    var recipeInfoPopup = this._container.getModuleInstanceByName
        ('popup', 'recipe-info-popup');

    var recipeInfoTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipe-info-popup');


    var recipesControls = this._container.getModuleInstanceByName
        ('button-group', 'recipes-list');

    recipesControls.addEventListener('show', function(event, button) {
        popupRecipe
            = model.recipes.getItemById(button.getStringOption('recipe-id'));

        if (popupRecipe !== null) {
            recipeInfoTransformer.applyTransform(popupRecipe.serialize());
            recipeInfoPopup.open();
            recipePopup.close();
        }
    });

    recipeInfoPopup.addEventListener('apply', function() {
        recipesForm.setValue('recipe_id', popupRecipe.id);
        recipePopup.open();
    });

    recipeInfoPopup.addEventListener('close', function() {
        recipePopup.open();
    });

    model.recipes.addEventListener('update', updateRecipesList);
    model.currentCake.addEventListener('update', updateRecipesList);
};

/**
 * @override
 */
OrderController.prototype.open = function() {
    model.currentRecipe.clear();
    model.currentBakery.addEventListener('update', this.__handleBakeryUpdate);
    model.currentCake.addEventListener('update', this.__updateOrder);
    model.currentRecipe.addEventListener('update', this.__updateOrder);

    this.__updateOrder();

    var bakery = model.currentBakery.get();
    if (bakery !== null) {
        model.recipes.load({ 'bakery_id': bakery.id });
    }
};

/**
 * @override
 */
OrderController.prototype.close = function() {
    model.currentBakery.removeEventListener('update', this.__handleBakeryUpdate);
    model.currentCake.addEventListener('update', this.__updateOrder);
    model.currentRecipe.addEventListener('update', this.__updateOrder);
};

/**
 * @private
 */
OrderController.prototype.__handleBakeryUpdate = function() {
    var bakery = model.currentBakery.get();
    if (bakery !== null) {
        model.recipes.load({ 'bakery_id': bakery.id });
    }

    this._navigation.navigate('title');
};

/**
 * @private
 */
OrderController.prototype.__updateOrder = function() {
    var order = model.currentOrder.get();
    if (order === null) {
        order = new model.records.Order();
        model.currentOrder.set(order);
    }

    order.cake = model.currentCake.get();
    order.bakery = model.currentBakery.get();
    order.recipe = model.currentRecipe.get();

    this.__orderTransformer.applyTransform(tuna.model.serialize(order));
};

tuna.control.registerController('order_step', new OrderController());
