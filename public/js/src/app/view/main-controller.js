(function() {

    var MainController = function() {
        tuna.view.WizardViewController.call(this, null);
    };

    tuna.extend(MainController, tuna.view.WizardViewController);

    MainController.prototype._bootstrap = function() {
        this.init();
    };

    MainController.prototype._initActions = function() {
        this._nextButton = tuna.dom.selectOne('#next_step_button');
        this._prevButton = tuna.dom.selectOne('#prev_step_button');

        tuna.view.WizardViewController.prototype._initActions.call(this);
    };

    MainController.prototype._handlePageClose = function(page, newPage) {
        if (page.id === 'designer_step') {
            var designerController = this._currentController;
            var cakeData = designerController.getCakeData();
            
            this._db.set('cake_data', cakeData);
        }
    };


    
    tuna.view.setMainController(new MainController());

})();
