(function() {
    tuna.namespace('tuna.view');

    var PageViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);
    };

    tuna.extend(PageViewController, tuna.view.ViewController);

    PageViewController.prototype.canClose = function(nextPage) {
        return true;
    };

    PageViewController.prototype.close = function() {};
    
    PageViewController.prototype.open = function() {};

    tuna.view.PageViewController = PageViewController;
})();