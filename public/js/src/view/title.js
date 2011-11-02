(function() {

    var TitleController = function(id) {
        tuna.control.ViewController.call(this, id);
    };

    tuna.extend(TitleController, tuna.control.ViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('carousel');
    };

    TitleController.prototype._initListeners = function() {

    };

    TitleController.prototype._initData = function() {

    };

    tuna.control.ViewController.registerController(new TitleController("title_step"));

})();