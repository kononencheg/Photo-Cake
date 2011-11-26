(function() {

    var ShareController = function(id) {
        tuna.view.StepViewController.call(this, id);
    };

    tuna.extend(ShareController, tuna.view.StepViewController);

    ShareController.prototype._bootstrap = function() {
        this.init();
    };

    ShareController.prototype._requireModules = function() {
        debugger;
        this._container.requireModule('popup');
    };

    ShareController.prototype._initActions = function() {
        debugger;
    };

    ShareController.prototype.canGoNext = function() {
        return false;
    };

    tuna.view.registerController(new ShareController('share_step'));
})();
