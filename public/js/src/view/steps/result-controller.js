(function() {

    var ResultController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(ResultController, tuna.view.PageViewController);

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    ResultController.prototype.open = function(args) {
        var image = this._container.getOneModuleInstance('data-image-copy');
        image.src = args.image_url;
    };

    tuna.view.registerController('result_step', new ResultController());
})();
