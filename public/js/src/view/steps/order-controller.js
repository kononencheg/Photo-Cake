(function() {

    var OrderController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__form = null;
    };

    tuna.extend(OrderController, tuna.view.PageViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('datepicker');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        var self = this;

        this.__form = this._container.getOneModuleInstance('form');
        this.__form.addEventListener('result', function() {
            alert('Спасибо за заказ! Пожалуйста, ожидайте звонка!');
            self._navigation.selectIndex('title_step');
        });

        this.__form.addEventListener('submit', function(event) {
            if (!confirm('Вы уверены что правильно заполнили все поля?')) {
                event.preventDefault();
            }
        });
    };

    OrderController.prototype.open = function() {
        this.__updateView();
    };

    OrderController.prototype.__updateView = function() {
        this._container.applyData({ 'order': model.orders.getOrder() });
    };

    tuna.view.registerController(new OrderController('order_step'));
})();
