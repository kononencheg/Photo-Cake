(function() {
    tuna.namespace('tuna.view');

    var ViewController = function(targetID) {
        this.__targetID = targetID;

        this._container = null;
        this._target = null;
        this._db = null;

        this._modules = null;
    };

    tuna.implement(ViewController, tuna.tmpl.ITransformHandler);

    ViewController.prototype.getTargetID = function() {
        return this.__targetID;
    };

    ViewController.prototype.bind = function(container) {
        this._container = container;

        this._target = container.getTarget();
        this._db = container.getDB();

        this._construct();
    };

    ViewController.prototype._construct = function() {};

    ViewController.prototype.init = function() {
        this._requireModules();

        this._container.initModules();

        this._initActions(this._container.getModules());
    };

    ViewController.prototype._requireModules = function() {};
    ViewController.prototype._initActions = function(modules) {};

    // Static methods

    ViewController.__idTable = {};

    ViewController.__mainController = null;

    ViewController.registerMainController = function(controller) {
        ViewController.__mainController = controller;
    };

    ViewController.registerController = function(controller) {
        ViewController.__idTable[controller.getTargetID()] = controller;
    };

    ViewController.getController = function(target) {
        var viewController = ViewController.__idTable[target.id];

        if (viewController !== undefined) {
            delete ViewController.__idTable[target.id];
        }

        return viewController;
    };

    ViewController.initMainController = function() {
        var controller = ViewController.__mainController;
        if (controller !== null) {
            var container = new tuna.ui.DataContainer(document.body);
            container.setDB(new tuna.control.DataDispatcher());
            
            controller.bind(container);
            controller.init();
        }
    };

    tuna.view.ViewController = ViewController;
})();