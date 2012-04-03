/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var ResultController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'data-image-copy' ];
};

tuna.utils.extend(ResultController, tuna.control.PageViewController);

tuna.control.registerController('result_step', new ResultController());
