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
    var self = this;

    var recipePopupButton = this._container.getModuleInstanceByName
        ('popup-button', 'recipe-popup');

    var recipePopup = recipePopupButton.getPopup();

    var recipesTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipes-list');

    var recipesForm = this._container.getModuleInstanceByName
        ('form', 'recipes-list');

    model.currentBakery.addEventListener('update', function(event, bakery) {
        model.recipes.load({ 'bakery_id': bakery.id });

        self._navigation.navigate('title');
    });

    model.currentRecipe.addEventListener('update', function() {
        self.__updateOrder();
    });

    model.currentCake.addEventListener('update', function() {
        self.__updateOrder();
    });

    model.recipes.addEventListener('update', function(event, recipes) {
        recipesTransformer.applyTransform
            (tuna.model.serialize(recipes, model.currentCake.get()));
    });

    var bakery = model.currentBakery.get();
    if (bakery !== null) {
        model.recipes.load({ 'bakery_id': bakery.id });
    }

    recipePopup.addEventListener('popup-apply', function() {
        var recipeIds = recipesForm.getValue('recipe_id');
        var recipe = model.recipes.getItemById(recipeIds.shift());

        model.currentRecipe.set(recipe);
    });

    this.__orderTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'order-form');
};

/**
 * @override
 */
OrderController.prototype.open = function() {
    this.__updateOrder();
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
