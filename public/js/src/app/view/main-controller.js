(function() {

    var MainController = function() {
        tuna.view.NavigationViewController.call(this, null);
    };

    tuna.extend(MainController, tuna.view.NavigationViewController);

    MainController.prototype._bootstrap = function() {
        this.init();
    };

    MainController.prototype._initActions = function() {
        tuna.view.NavigationViewController.prototype._initActions.call(this);
    };

    MainController.prototype._handlePageClose = function(page, newPage) {
        if (page.id === 'designer_step') {
            this._currentController.saveCakeData();
        }
    };


    
    tuna.view.setMainController(new MainController());

})();
