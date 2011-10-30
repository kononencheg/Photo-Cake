(function() {
    tuna.namespace('tuna.control');

    var ViewController = function(targetID) {
        this.__targetID = targetID;
        this._target = null;
        
        this._container = null;
        this._db = null;
    };

    tuna.implement(ViewController, tuna.tmpl.IElementHandler);

    ViewController.prototype.getTargetID = function() {
        return this.__targetID;
    };

    ViewController.prototype.init = function() {
        this._target = document.getElementById(this.__targetID);

        this._requireModules();

        this._initListeners();
        this._initData();
        this._initModules();
    };

    ViewController.prototype.setContainer = function(container) {
        this._container = container;
    };

    ViewController.prototype.setDB = function(db) {
        this._db = db;
    };

    ViewController.prototype._requireModules = function() {};
    ViewController.prototype._initListeners = function() {};
    ViewController.prototype._initData = function() {};
    
    ViewController.prototype._initModules = function(target) {
        this._container.initModules(target || this._target);
    };

    // Static methods

    ViewController.registerController = function(controller) {
        ViewController.__idTable[controller.getTargetID()] = controller;
    };

    ViewController.__idTable = {};

    ViewController.getController = function(target) {
        var viewController = ViewController.__idTable[target.id];

        if (viewController !== undefined) {
            delete ViewController.__idTable[target.id];
        }

        return viewController;
    };

    tuna.control.ViewController = ViewController;
})();