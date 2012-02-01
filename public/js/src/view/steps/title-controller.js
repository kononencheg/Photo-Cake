(function() {

    /**
     * @constructor
     * @extends {tuna.view.PageViewController}
     * @param {string} id
     */
    var TitleController = function(id) {
        tuna.view.PageViewController.call(this, id);
    };

    tuna.extend(TitleController, tuna.view.PageViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('cake-image-popup');
    };

    tuna.view.registerController(new TitleController('title_step'));

})();
