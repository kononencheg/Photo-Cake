(function() {

    var TitleController = function(id) {
        tuna.view.StepViewController.call(this, id);
    };

    tuna.extend(TitleController, tuna.view.StepViewController);

    TitleController.prototype.canGoPrev = function() {
        return false;
    };

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('item-selector');
        this._container.requireModule('image-popup');
    };

    TitleController.prototype._initActions = function() {

    };

    tuna.view.registerController(new TitleController('title_step'));
})();
