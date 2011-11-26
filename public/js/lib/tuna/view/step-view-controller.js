(function() {
    tuna.namespace('tuna.view');

    var StepViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);
    };

    tuna.extend(StepViewController, tuna.view.PageViewController);

    StepViewController.prototype.canGoNext = function() {
        return true;
    };

    StepViewController.prototype.canGoPrev = function() {
        return true;
    };

    tuna.view.StepViewController = StepViewController;
})();