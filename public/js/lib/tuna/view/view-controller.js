(function() {
    tuna.namespace('tuna.view');

    /**
     * @constructor
     * @implements {tuna.tmpl.ITransformHandler}
     * @param {string|null} targetID
     */
    tuna.view.ViewController = function(targetID) {
        this.__targetID = targetID;

        this._container = null;
        this._target = null;
    };

    tuna.implement(tuna.view.ViewController, tuna.tmpl.ITransformHandler);

    tuna.view.ViewController.prototype.getTargetID = function() {
        return this.__targetID;
    };

    tuna.view.ViewController.prototype.bindContainer = function(container) {
        this._container = container;

        this._target = container.getTarget();

        this._bootstrap(); // TODO: Implement _terminate
    };

    tuna.view.ViewController.prototype._bootstrap = function() {
        this.init();
    };

    tuna.view.ViewController.prototype.init = function() {
        this._requireModules();

        this._container.initModules();

        this._initActions();
    };

    tuna.view.ViewController.prototype._requireModules = function() {};
    tuna.view.ViewController.prototype._initActions = function() {};

    tuna.view.ViewController.prototype.destroy = function() {
        this._container.destroyModules();

        this._destroyActions();
    };

    tuna.view.ViewController.prototype._destroyActions = function() {};

    tuna.view.ViewController.prototype.handleTransformStart
        = function(target) {};


    tuna.view.ViewController.prototype.handleTransformComplete
        = function(target, createdElements, removedElements) {

        var i = 0,
            l = createdElements.length;

        while (i < l) {
            this._container.initModules(createdElements[i]);
            i++;
        }
    };

    tuna.view.ViewController.prototype.handleDestroy
        = function(target, removedElements) {};

})();