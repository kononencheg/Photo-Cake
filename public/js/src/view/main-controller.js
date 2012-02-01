(function() {

    /**
     * @constructor
     * @extends {tuna.view.NavigationViewController}
     */
    var MainController = function() {
        tuna.view.NavigationViewController.call(this, null);
    };

    tuna.extend(MainController, tuna.view.NavigationViewController);

    MainController.prototype._initActions = function() {
        tuna.view.NavigationViewController.prototype._initActions.call(this);

        tuna.rest.call('social.users.getCurrent', function(user) {
            model.users.setCurrentUser(user);
        });
    };

    tuna.view.setMainController(new MainController());

})();
