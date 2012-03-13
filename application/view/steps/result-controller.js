/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var ResultController = function() {
    tuna.view.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'data-image-copy' ];
};

tuna.utils.extend(ResultController, tuna.view.PageViewController);

tuna.view.registerController('result_step', new ResultController());
