(function() {

    var ResultController = function(id) {
        tuna.view.PageViewController.call(this, id);
    };

    tuna.utils.extend(ResultController, tuna.view.PageViewController);

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    ResultController.prototype.open = function(args) {
        var image = this._container.getOneModuleInstance('data-image-copy');
        image.src = args.image_url;
    };

    tuna.view.registerController(new ResultController('result_step'));
})();
