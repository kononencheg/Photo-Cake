(function() {

    var ResultController = function(id) {
        tuna.view.PageViewController.call(this, id);
    };

    tuna.extend(ResultController, tuna.view.PageViewController);

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    tuna.view.registerController(new ResultController('result_step'));
})();
