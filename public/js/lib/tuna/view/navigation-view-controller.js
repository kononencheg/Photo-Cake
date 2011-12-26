(function() {
    tuna.namespace('tuna.view');

    var NavigationViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this._pageNavigation = null;
        this._currentController = null;

        this.__currentPage = null;

        this._handlePageChange = tuna.bind(this._handlePageChange, this);
    };

    tuna.extend(NavigationViewController, tuna.view.ViewController);

    NavigationViewController.prototype._requireModules = function() {
        this._container.requireModule('transform-container');
        this._container.requireModule('navigation');
    };

    NavigationViewController.prototype._initActions = function(modules) {
        this._pageNavigation = this._container.getOneModuleInstance('navigation');

        this._pageNavigation.addEventListener('select', this._handlePageChange);

        this._setCurrentPage(this._pageNavigation.getLastSelectedIndex());
    };

    NavigationViewController.prototype._handlePageChange = function(event, index) {
        if (this._canSwitchTo(index)) {
            if (this._currentController !== null) {
                this._currentController.close();
            }

            this._setCurrentPage(index);
        } else {
            event.preventDefault();
        }
    };

    NavigationViewController.prototype._canSwitchTo = function(index) {
        if (this._currentController !== null) {
            var nextPage = this._pageNavigation.getItemAt(index);
            return this._currentController.canClose(nextPage);
        }

        return true;
    };

    NavigationViewController.prototype._setCurrentPage = function(index) {
        var newPage = this._pageNavigation.getItemAt(index);
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