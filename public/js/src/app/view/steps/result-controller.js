(function() {

    var ResultController = function(id) {
        tuna.view.StepViewController.call(this, id);
    };

    tuna.extend(ResultController, tuna.view.StepViewController);

    ResultController.prototype.canGoNext = function() {
        return false;
    };

    ResultController.prototype._bootstrap = function() {
        this.init();
    };

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    ResultController.prototype._initActions = function() {

    };

    tuna.view.registerController(new ResultController('result_step'));
})();
