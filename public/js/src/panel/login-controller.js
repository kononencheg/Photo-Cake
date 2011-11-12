(function() {

    var LoginController = function(id) {
        tuna.control.ViewController.call(this, id);

        this.__form = null;
    };

    tuna.extend(LoginController, tuna.control.ViewController);

    LoginController.prototype._requireModules = function() {
        this._container.requireModule('form');
    };

    LoginController.prototype._initListeners = function(modules) {
        this.__form = modules['form'][0];
        this.__form.subscribe('form-success', function(type, data) {
            debugger;
        });
    };

    tuna.control.ViewController.registerController(new LoginController('login_form'));

})();