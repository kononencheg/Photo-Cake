/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var ShareController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'data-image-copy' ];

    /**
     * @type {Node}
     * @private
     */
    this.__downloadDataInput = null;

    /**
     * @private
     * @type ?tuna.ui.ModuleInstance|ui.DataImage
     */
    this.__cakeImage = null;
};

tuna.utils.extend(ShareController, tuna.control.PageViewController);

/**
 * @override
 */
ShareController.prototype._initActions = function() {
    this.__downloadDataInput = tuna.dom.selectOne('#download_data_input');
    this.__cakeImage = this._container.getModuleInstanceByName
        ('data-image-copy', 'cake-image');

};

/**
 * @override
 */
ShareController.prototype.open = function() {
    if (this.__cakeImage !== null && this.__downloadDataInput !== null) {
        this.__downloadDataInput.value = this.__cakeImage.getData();
    }
};

tuna.control.registerController('share_step', new ShareController());