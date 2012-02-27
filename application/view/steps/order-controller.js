(function() {

    var OrderController = function() {
        tuna.view.PageViewController.call(this);

        this.__form = null;
        this.__cakeImage = null;

        this.__transformer = null;

        /**
         *
         * @type {?string}
         * @private
         */
        this.__orderId = null;
    };

    tuna.utils.extend(OrderController, tuna.view.PageViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('template-transformer');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('datepicker');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        var self = this;

        this.__transformer
            = this._container.getOneModuleInstance('template-transformer');
        this.__transformer.setTransformHandler(this);

        this.__form = this._container.getOneModuleInstance('form');
        this.__form.addEventListener('result', function(event, result) {
            self._navigation.navigate('result_step', result.cake);
        });

        this.__cakeImage
            = this._container.getOneModuleInstance('data-image-copy');
    };

    OrderController.prototype.open = function(args) {
        if (args.image !== undefined) {
            this.__cakeImage.src = args.image;

            var cake = model.cakes.createCampaingCake(args.weight, args.image);
            model.orders.updateCampaignOrder(args.campaign, cake, args.price);
        }

        var order = model.orders.getOrder();

        this.__form.setEnabled(false);

        var self = this;
        tuna.rest.call('orders.add', {
            'bakery_id': order.bakery.id,
            'recipe_id': order.recipe.id,

            'cake_shape': order.cake.shape,
            'cake_weight': order.cake.weight,
            'cake_markup_json': order.cake.markupJson,
            'cake_image_base64': order.cake.imageBase64,
            'cake_photo_base64': order.cake.photoBase64
        }, function(result) {
            order.id = result.id;

            self.__form.setEnabled(true);
            self.__transformer.applyTransform(order);
        });

        this.__transformer.applyTransform(order);
    };

    tuna.view.registerController('order_step', new OrderController());
})();
