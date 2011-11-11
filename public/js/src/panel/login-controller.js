(function() {

    var LoginController = function(id) {
        tuna.control.ViewController.call(this, id);
    };

    tuna.extend(LoginController, tuna.control.ViewController);

    LoginController.prototype._requireModules = function() {
        this._container.requireModule('form');
    };

    LoginController.prototype._initListeners = function() {

    };

    LoginController.prototype._initData = function() {

    };

    tuna.control.ViewController.registerController(new LoginController('login_form'));

})();