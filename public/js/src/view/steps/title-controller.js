(function() {

    var TitleController = function(id) {
        tuna.view.PageViewController.call(this, id);
    };

    tuna.extend(TitleController, tuna.view.StepViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('image-popup');
    };

    tuna.view.registerController(new TitleController('title_step'));

})();
