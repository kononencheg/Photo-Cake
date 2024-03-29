/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var VKShareController = function() {
    tuna.control.PageViewController.call(this);

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

    /**
     * @override
     */
    this._modules = [ 'input-filter', 'data-image-copy', 'popup-button',
                      'button-group' ];
};

tuna.utils.extend(VKShareController, tuna.control.PageViewController);

/**
 * @override
 */
VKShareController.prototype._initActions = function() {
    this.__downloadDataInput = tuna.dom.selectOne('#download_data_input');
    this.__cakeImage = this._container.getModuleInstanceByName
        ('data-image-copy', 'cake-image');

    var inputFilter = this._container.getModuleInstanceByName
      ('input-filter', 'friends-autocomplete');

    tuna.rest.call('social.friends.get', null, function(result) {
        inputFilter.setData(tuna.model.serialize(result));
    });

    var self = this;

    var sendControls = this._container.getModuleInstanceByName('button-group', 'share');
    sendControls.addEventListener('send', function(event, button) {
        tuna.rest.call('social.wall.post', {
            'image': self.__cakeImage.getData(),
            'user_id': button.getStringOption('user-id')
        }, function() {
            tuna.ui.popups.alert('Торт успешно опубликован!');
        });
    });
};

/**
 * @override
 */
VKShareController.prototype.open = function() {
    if (this.__cakeImage !== null && this.__downloadDataInput !== null) {
        this.__downloadDataInput.value = this.__cakeImage.getData();
    }
};

tuna.control.registerController('share_step', new VKShareController());