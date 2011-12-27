(function() {

    var OrderController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__form = null;
    };

    tuna.extend(OrderController, tuna.view.StepViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        this.__form = this._container.getOneModuleInstance('form');

        var self = this;
        var button = tuna.dom.selectOne('#submit_order_button');
        button.onclick = function() {
            self.__form.submit();
        };

        var imageDataInput = tuna.dom.selectOne('#cake_image_data');
        imageDataInput.value = this._db.get('cake_image');

        //var photoDataInput = tuna.dom.selectOne('#cake_photo_data');
        //photoDataInput.value = this._db.get('cake_photo');
    };


    tuna.view.registerController(new OrderController('order_step'));
})();
