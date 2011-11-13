(function() {

    var LoginController = function(id) {
        tuna.control.ViewController.call(this, id);
    };

    tuna.extend(LoginController, tuna.control.ViewController);

    LoginController.prototype._requireModules = function() {
        this._container.requireModule('form');
    };

    LoginController.prototype._initListeners = function(modules) {
        var form = modules['form'][0];
        if (form !== undefined) {
            form.subscribe('form-success', function(type, data) {
                location.reload();
            });
        }
    };

    tuna.control.ViewController.registerController(new LoginController('login_form'));

})();