(function() {

    var OrderController = function(id) {
        tuna.view.StepViewController.call(this, id);
    };

    tuna.extend(OrderController, tuna.view.StepViewController);

    OrderController.prototype._bootstrap = function() {
        this.init();
    };

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    OrderController.prototype._initActions = function() {

    };


    tuna.view.registerController(new OrderController('order_step'));
})();
