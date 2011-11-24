(function() {

    var MainController = function() {
        tuna.view.ViewController.call(this, null);
    };

    tuna.extend(MainController, tuna.view.ViewController);

    MainController.prototype._bootstrap = function() {
        this.init();
    };

    MainController.prototype._requireModules = function() {
        this._container.requireModule('item-selector');
        this._container.requireModule('transform-container');
    };

    MainController.prototype._initActions = function() {
        /*var getCurrentUser
            = tuna.rest.factory.createMethod('social.getCurrentUser');

        getCurrentUser.subscribe('result', function(event, result) {

        }, this);

        getCurrentUser.call();*/
    };

    MainController.prototype._destroyActions = function() {

    };

    tuna.view.setMainController(new MainController());

})();
