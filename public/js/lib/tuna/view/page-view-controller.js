(function() {
    tuna.namespace('tuna.view');

    /**
     * @constructor
     * @extends {tuna.view.ViewController}
     * @param {string} targetID
     */
    tuna.view.PageViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this._navigation = null;
    };

    tuna.extend(tuna.view.PageViewController, tuna.view.ViewController);

    tuna.view.PageViewController.prototype.setNavigation = function(navigation) {
        this._navigation = navigation;
    };

    tuna.view.PageViewController.prototype.canClose = function(index) {
        return true;
    };

    tuna.view.PageViewController.prototype.close = function() {};
    
    tuna.view.PageViewController.prototype.open = function() {};
})();