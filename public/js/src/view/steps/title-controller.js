(function() {

    var TitleController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(TitleController, tuna.view.PageViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('carousel');
        this._container.requireModule('popup-button');
        //this._container.requireModule('cake-image-popup');
    };

    tuna.view.registerController('title_step', new TitleController());

})();
