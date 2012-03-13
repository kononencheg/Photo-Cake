/**
 * @extends {tuna.view.ViewController}
 * @constructor
 */
var MainController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'navigation', 'yandex-share' ]
};

tuna.utils.extend(MainController, tuna.view.ViewController);

/**
 * @override
 */
MainController.prototype._initActions = function() {
    tuna.rest.call('social.users.getCurrent', null, function(user) {
        model.users.setCurrentUser(user);
    });
};

tuna.view.setMainController(new MainController());

