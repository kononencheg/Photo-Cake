(function() {

    tuna.namespace('tuna.tmpl.unit');

    var ListContainerRouter = function(containerElement) {
        this._container = containerElement;
    };

    tuna.implement(ListContainerRouter, tuna.tmpl.unit.IListItemRouter);

    ListContainerRouter.prototype.append = function(node) {
        this._container.appendChild(node);
    };

    tuna.tmpl.unit.ListContainerRouter = ListContainerRouter;
})();