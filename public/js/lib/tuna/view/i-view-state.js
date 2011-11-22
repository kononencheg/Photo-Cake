(function() {

    tuna.namespace('tuna.view');

    var IViewState = function() {};

    IViewState.prototype.requireModules = function(container) {};
    
    IViewState.prototype.initActions = function(modules) {};

    tuna.view.IViewState = IViewState;

})();