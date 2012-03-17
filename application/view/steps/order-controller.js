/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var OrderController = function() {
    tuna.view.PageViewController.call(this);

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
                      'form', 'popup', 'popup-button' ];
};

tuna.utils.extend(OrderController, tuna.view.PageViewController);

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

    var recipesTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipes-list');

    var recipesForm = this._container.getModuleInstanceByName
        ('form', 'recipes-list');

    recipePopup.addEventListener('popup-apply', function() {
        var recipeIds = recipesForm.getValue('recipe_id');
        var recipe = model.recipes.getItemById(recipeIds.shift());

        model.currentRecipe.set(recipe);
    });

    var orderForm = this._container.getModuleInstanceByName
        ('form', 'order-form');

    orderForm.addEventListener('result', function() {
        self._navigation.navigate('result');
    });

    orderForm.setValue('client_network', APP_NETWORK);

    model.recipes.addEventListener('update', function(event, recipes) {
        recipesTransformer.applyTransform
            (tuna.model.serialize(recipes, model.currentCake.get()));
    });
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

tuna.view.registerController('order_step', new OrderController());
