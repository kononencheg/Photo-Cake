(function() {

    var TitleController = function(id) {
        tuna.view.ViewController.call(this, id);
    };

    tuna.extend(TitleController, tuna.view.ViewController);

    TitleController.prototype._bootstrap = function() {
        this.init();
    };

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('carousel');
    };

    TitleController.prototype._initActions = function() {
        /*tuna.data.origin.load('cities', null, function(cities) {
           debugger;
        });*/
    };

    tuna.view.registerController(new TitleController('title_step'));

})();
