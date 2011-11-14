(function() {

    var MainController = function() {
        tuna.view.StateViewController.call(this, null);

        this.__loginState = null;
    };

    tuna.extend(MainController, tuna.view.StateViewController);

    MainController.prototype._construct = function() {
        this.__loginState = new LoginState();
        
        this._setCurrentState(this.__loginState);
    };

    tuna.view.ViewController.registerMainController(new MainController());

    var LoginState = function() {};

    tuna.implement(LoginState, tuna.view.IViewState);

    LoginState.prototype.requireModules = function(container) {
        container.requireModule('form');
    };

    LoginState.prototype.initActions = function(modules) {
        debugger;

        var form = modules['form'][0];
        if (form !== undefined) {
            form.subscribe('form-success', function(type, data) {
                location.reload();
            });
        }
    };

})();