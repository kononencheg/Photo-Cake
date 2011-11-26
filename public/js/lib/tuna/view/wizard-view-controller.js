(function() {
    tuna.namespace('tuna.view');

    var WizardViewController = function(targetID) {
        tuna.view.NavigationViewController.call(this, targetID);

        this._nextButton = null;
        this._prevButton = null;
    };

    tuna.extend(WizardViewController, tuna.view.NavigationViewController);

    WizardViewController.prototype._canSwitchTo = function(index) {
        var result = tuna.view.NavigationViewController.prototype.
                        _canSwitchTo.call(this, index);
        
        if (result) {
            // TODO: with circle rewind has no sense
            if (index > this._pageNavigator.getCurrentIndex()) {
                result = this._currentController.canGoNext();
            } else {
                result = this._currentController.canGoPrev();
            }
        }

        return result;
    };

    WizardViewController.prototype._updateController = function() {
        tuna.view.NavigationViewController.prototype.
            _updateController.call(this);

        if (this._currentController !== null) {
            if (this._nextButton !== null) {
                tuna.dom.setClassExist(
                    this._nextButton, 'hidden',
                    !this._currentController.canGoNext()
                );
            }

            if (this.__prevButton !== null) {
                tuna.dom.setClassExist(
                    this._prevButton, 'hidden',
                    !this._currentController.canGoPrev()
                );
            }
        }
    };

    tuna.view.WizardViewController = WizardViewController;
})();