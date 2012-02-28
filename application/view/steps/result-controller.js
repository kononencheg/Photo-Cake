/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var ResultController = function() {
    tuna.view.PageViewController.call(this);
};

tuna.utils.extend(ResultController, tuna.view.PageViewController);

/**
 * @override
 */
ResultController.prototype._requireModules = function() {
    this._container.requireModule('data-image-copy');
};

tuna.view.registerController('result_step', new ResultController());
