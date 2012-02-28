/**
 * @extends {tuna.view.NavigationViewController}
 * @constructor
 */
var MainController = function() {
    tuna.view.NavigationViewController.call(this);
};

tuna.utils.extend(MainController, tuna.view.NavigationViewController);

/**
 * @override
 */
MainController.prototype._initActions = function() {
    tuna.view.NavigationViewController.prototype._initActions.call(this);

    tuna.rest.call('social.users.getCurrent', null, function(user) {
        model.users.setCurrentUser(user);
    });
};

tuna.view.setMainController(new MainController());

