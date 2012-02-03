(function() {

    var OrderController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__form = null;
        this.__cakeImage = null;
    };

    tuna.utils.extend(OrderController, tuna.view.PageViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('datepicker');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        var self = this;
        var isConfirmed = false;

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

                ui.Popup.confirm(
                    'Вы уверены что правильно заполнили все поля?',
                    function() {
                        isConfirmed = true;
                        self.__form.submit();
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

        this._container.applyData(model.orders.getOrder());
    };

    tuna.view.registerController(new OrderController('order_step'));
})();
