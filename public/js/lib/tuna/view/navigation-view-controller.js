(function() {
    tuna.namespace('tuna.view');

    var NavigationViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this._pageNavigation = null;
        this._currentController = null;

        this.__currentPage = null;

        this._testClose = tuna.bind(this._testClose, this);
        this._closePage = tuna.bind(this._closePage, this);
        this._openPage = tuna.bind(this._openPage, this);
    };

    tuna.extend(NavigationViewController, tuna.view.ViewController);

    NavigationViewController.prototype._requireModules = function() {
        this._container.requireModule('transform-container');
        this._container.requireModule('navigation');
    };

    NavigationViewController.prototype._initActions = function() {
        this._pageNavigation = this._container.getOneModuleInstance('navigation');

        this._pageNavigation.addEventListener('select', this._testClose);
        this._pageNavigation.addEventListener('deselected', this._closePage);
        this._pageNavigation.addEventListener('selected', this._openPage);

        var self = this;
        this._pageNavigation.mapItems(function(index, page) {
            var pageController = tuna.view.getController(page);
            if (pageController !== null) {
                pageController.setNavigation(self._pageNavigation);
            }
        });

        this._setCurrentPage(this._pageNavigation.getLastSelectedIndex());
    };

    NavigationViewController.prototype._openPage = function(event, index) {
        this._setCurrentPage(index);
    };

    NavigationViewController.prototype._testClose = function(event, index) {
        if (!this._canClose(index)) {
            event.preventDefault();
        }
    };

    NavigationViewController.prototype._closePage = function(event, index) {
        if (this._currentController !== null) {
            this._currentController.close();
        }
    };

    NavigationViewController.prototype._canClose = function(index) {
        if (this._currentController !== null) {
            return this._currentController.canClose(index);
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