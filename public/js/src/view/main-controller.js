(function() {

    var MainController = function() {
        tuna.view.NavigationViewController.call(this, null);
    };

    tuna.extend(MainController, tuna.view.NavigationViewController);
    
    tuna.view.setMainController(new MainController());

})();
