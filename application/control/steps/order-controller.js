/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var OrderController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @private
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     */
    this.__orderTransformer = null;

    /**
     *
     * @type {tuna.ui.ModuleInstance|tuna.ui.forms.Form}
     * @private
     */
    this.__orderForm = null;

    /**
     *
     * @type {tuna.ui.ModuleInstance|tuna.ui.popups.Popup}
     * @private
     */
    this.__recipePopup = null;

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
                      'form', 'popup', 'popup-button', 'button', 'button-group' ];
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

    this.__recipePopup = recipePopupButton.getPopup();

    var recipesTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'recipes-list');

    this.__recipePopup.addEventListener('apply', function() {
        var recipeId = null;

        var recipeIds = self.__orderForm.getValue('recipe_id');
        if (recipeIds instanceof Array) {
            recipeId = recipeIds.shift()
        } else {
            recipeId = recipeIds;
        }

        var recipe = model.recipes.getItemById(recipeId);
        model.currentRecipe.set(recipe);
    });

    this.__orderForm = this._container.getModuleInstanceByName
        ('form', 'order-form');

    this.__orderForm.addEventListener('submit', function() {
        self.__orderForm.setEnabled(false);
    });

    this.__orderForm.addEventListener('error', function() {
        self.__orderForm.setEnabled(true);
    });

    this.__orderForm.addEventListener('result', function(event, order) {
        self._navigation.navigate('result', order);
        self.__orderForm.setEnabled(true);
    });

    this.__orderForm.setValue('partner_id', tuna.utils.config.get('partner_id'));

    var deliveryButton = this._container.getModuleInstanceByName
        ('button', 'delivery-button');

    deliveryButton.addEventListener('click', function() {
        var isPickup = self.__orderForm.getValue('delivery_is_pickup') !== null;
        var bakery = model.currentBakery.get();

        self.__orderForm.setInputEnabled('delivery_address', !isPickup);
        self.__orderForm.setValue
            ('delivery_address', isPickup ? bakery.address : 'г. ' + bakery.city.name + ', ');

        self.__updateOrder();
    });


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
            self.__recipePopup.close();
        }
    });

    recipeInfoPopup.addEventListener('apply', function() {
        self.__orderForm.setValue('recipe_id', popupRecipe.id);
        self.__recipePopup.open();
    });

    recipeInfoPopup.addEventListener('close', function() {
        self.__recipePopup.open();
    });

    model.recipes.addEventListener('update', updateRecipesList);
    model.currentCake.addEventListener('update', updateRecipesList);
};

/**
 * @override
 */
OrderController.prototype.open = function() {
    model.currentBakery.addEventListener('update', this.__handleBakeryUpdate);
    model.currentCake.addEventListener('update', this.__updateOrder);
    model.currentRecipe.addEventListener('update', this.__updateOrder);

    var bakery = model.currentBakery.get();
    if (bakery !== null) {
        model.recipes.load({ 'bakery_id': bakery.id });
    }

    this.__orderForm.setValue('delivery_address', 'г. ' + bakery.city.name + ', ');
    this.__orderForm.setValue('delivery_is_pickup', null);
    this.__orderForm.setInputEnabled('delivery_address', true);

    this.__recipePopup.open();

    this.__updateOrder();
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
    order.isPickup = this.__orderForm.getValue('delivery_is_pickup') !== null;

    this.__orderTransformer.applyTransform(tuna.model.serialize(order));
};

tuna.control.registerController('order_step', new OrderController());
