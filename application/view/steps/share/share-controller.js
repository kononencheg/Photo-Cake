/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var ShareController = function() {
    tuna.view.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'data-image-copy' ];
};

tuna.utils.extend(ShareController, tuna.view.PageViewController);

/**
 * @override
 */
ShareController.prototype.open = function() {
    var downloadDataInput = tuna.dom.selectOne('#download_data_input');
    var currentCake = model.cakes.getCurrentCake();

    if (currentCake !== null && downloadDataInput !== null) {
        downloadDataInput.value = currentCake.imageBase64;
    }
};

tuna.view.registerController('share_step', new ShareController());