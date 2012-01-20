(function() {

    var OrderController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__form = null;
    };

    tuna.extend(OrderController, tuna.view.StepViewController);

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

        tuna.dom.addEventListener(
            tuna.dom.selectOne('#submit_order_button'), 'click', function() {
                if (confirm('Вы уверены что правильно заполнили все поля?')) {
                    self.__form.submit();
                }
            }
        );

        var self = this;
        tuna.rest.call('cities.getList', function(result) {
            model.cities.setCities(result);
            self.__updateView();
        });
    };

    OrderController.prototype.open = function() {
        this.__updateView();
    };

    OrderController.prototype.__updateView = function() {
        this._container.applyData({
            'recipe': model.orders.getCurrentRecipe(),
            'price':  model.orders.getPrice(),
            'cake':   model.cakes.getCurrentCake(),
            'cities': model.cities.getCities()
        });
    };

    tuna.view.registerController(new OrderController('order_step'));
})();
