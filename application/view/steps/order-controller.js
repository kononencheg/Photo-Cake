/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var OrderController = function() {
    tuna.view.PageViewController.call(this);

    this.__form = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     * @private
     */
    this.__orderTransformer = null;

    /**
     * @type {tuna.ui.ModuleInstance|tuna.ui.transformers.TemplateTransformer}
     * @private
     */
    this.__priceTransformer = null;

    /**
     * @override
     */
    this._modules = [ 'template-transformer', 'data-image-copy', 'datepicker',
                      'form' ];
};

tuna.utils.extend(OrderController, tuna.view.PageViewController);

/**
 * @override
 */
OrderController.prototype._initActions = function() {
    var self = this;

    this.__priceTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'price-info');

    this.__orderTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'order-form');

    this.__form = this._container.getOneModuleInstance('form');
    this.__form.addEventListener('result', function() {
        self._navigation.navigate('result');
    });
};

/**
 * @override
 */
OrderController.prototype.open = function() {
    this.__form.setEnabled(false);

    var order = model.orders.getOrder();

    var self = this;
    tuna.rest.call('orders.add', {
        'bakery_id': order.bakery.id,
        'recipe_id': order.recipe.id,

        'cake_shape': order.cake.getShape(),
        'cake_weight': order.cake.getWeight(),
        'cake_markup_json': order.cake.markupJson,
        'cake_image_base64': order.cake.imageBase64,
        'cake_photo_base64': order.cake.photoBase64
    }, function(result) {
        order.id = result.id;

        self.__orderTransformer.applyTransform(order.serialize());

        self.__form.setEnabled(true);
    });

    this.__priceTransformer.applyTransform(order.payment.serialize());
};

tuna.view.registerController('order_step', new OrderController());
