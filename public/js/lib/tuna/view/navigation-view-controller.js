(function() {
    tuna.namespace('tuna.view');

    var NavigationViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this._pageNavigator = null;
        this._currentController = null;

        this.__currentPage = null;
    };

    tuna.extend(NavigationViewController, tuna.view.ViewController);

    NavigationViewController.prototype._requireModules = function() {
        this._container.requireModule('item-selector');
        this._container.requireModule('transform-container');
    };

    NavigationViewController.prototype._initActions = function(modules) {
        this._pageNavigator
            = this._container.getOneModuleInstance('item-selector');

        // TODO: Implement preventDefault for notifications
        this._pageNavigator.subscribe('select', this._handlePageChange, this);

        this._setCurrentPage(this._pageNavigator.getCurrentIndex());
    };

    NavigationViewController.prototype._handlePageChange = function(event, index) {
        if (this._canSwitchTo(index)) {
            if (this._currentController !== null) {
                this._currentController.close();
            }

            this._setCurrentPage(index);

            return true;
        }

        return false;
    };

    NavigationViewController.prototype._canSwitchTo = function(index) {
        if (this._currentController !== null) {
            var nextPage = this._pageNavigator.getItemAt(index);
            return this._currentController.canClose(nextPage);
        }

        return true;
    };

    NavigationViewController.prototype._setCurrentPage = function(index) {
        var newPage = this._pageNavigator.getItemAt(index);
        var oldPage = this.__currentPage;

        if (oldPage !== null) {
            this._handlePageClose(oldPage, newPage);
        }

        this.__currentPage = newPage;
        this._updateController();

        this._handlePageOpen(newPage, oldPage);
    };

    NavigationViewController.prototype._updateController = function() {
        this._currentController = tuna.view.getController(this.__currentPage);
        if (this._currentController !== null) {
            this._currentController.open();
        }
    };

    NavigationViewController.prototype._handlePageClose = function(page, newPage) {};
    NavigationViewController.prototype._handlePageOpen = function(page, oldPage) {};

    tuna.view.NavigationViewController = NavigationViewController;
})();