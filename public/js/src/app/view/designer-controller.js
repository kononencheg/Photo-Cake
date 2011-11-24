(function() {

    var DesignerController = function(id) {
        tuna.view.ViewController.call(this, id);

        this.__movieID = null;
        this.__movie = null;
    };

    tuna.extend(DesignerController, tuna.view.ViewController);

    DesignerController.prototype._bootstrap = function() {
        this.init();
    };

    DesignerController.prototype._requireModules = function() {
        this._container.requireModule('swf', {
            params: {
                'wmode': 'direct',
                'allowfullscreen': false,
                'allowscriptaccess': 'sameDomain',
                'menu': false//,
                //'scale': 'noscale',
                //'align': 't'
            }
        });
    };

    DesignerController.prototype._initActions = function() {
        this.__movieID = this._container.getOneModuleInstance('swf');

    };

    DesignerController.prototype.__getMovie = function() {
        if (this.__movie === null) {
            this.__movie = swfobject.getObjectById(this.__movieID);
        }

        return this.__movie;
    };

    DesignerController.prototype.onFlashReady = function() {
        var self = this;
        setTimeout(function() {
            self.__getMovie().initialize('round', 0.9);
        }, 0);
    };

    var controller = new DesignerController('designer_step');

    onFlashReady = tuna.bind(controller.onFlashReady, controller);

    tuna.view.registerController(controller);
})();
