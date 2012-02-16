(function() {

    var OrderController = function() {
        tuna.view.PageViewController.call(this);

        this.__form = null;
        this.__cakeImage = null;

        this.__transformer = null;
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
        var isConfirmed = false;

        this.__transformer
            = this._container.getOneModuleInstance('template-transformer');
        this.__transformer.setTransformHandler(this);

        this.__form = this._container.getOneModuleInstance('form');
        this.__form.addEventListener('result', function(event, result) {
            self._navigation.navigate('result_step', result.cake);

            isConfirmed = false;
        });

        this.__form.addEventListener('error', function() {
            isConfirmed = false;
        });

        this.__form.addEventListener('submit', function(event) {
            if (!isConfirmed) {
                event.preventDefault();

                tuna.ui.popups.confirm(
                    'Вы уверены что правильно заполнили все поля?',
                    function(result) {
                        isConfirmed = result;
                        if (isConfirmed) {
                            self.__form.submit();
                        }
                    }
                );
            }
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

        this.__transformer.applyTransform(model.orders.getOrder());
    };

    tuna.view.registerController('order_step', new OrderController());
})();
