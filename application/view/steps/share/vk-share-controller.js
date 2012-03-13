/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var VKShareController = function() {
    tuna.view.PageViewController.call(this);


    /**
     * @override
     */
    this._modules = [ 'input-filter', 'data-image-copy', 'popup-button',
                      'button-group' ];
};

tuna.utils.extend(VKShareController, tuna.view.PageViewController);

/**
 * @override
 */
VKShareController.prototype.open = function() {
    var downloadDataInput = tuna.dom.selectOne('#download_data_input');
    var currentCake = model.cakes.getCurrentCake();

    if (currentCake !== null && downloadDataInput !== null) {
        downloadDataInput.value = currentCake.imageBase64;
    }
};

/**
 * @override
 */
VKShareController.prototype._initActions = function() {
    var inputFilter = this._container.getOneModuleInstance('input-filter');

    tuna.rest.call('social.friends.get', null, function(result) {
        inputFilter.setData(tuna.model.serialize(result));
    });

    var sendControls = this._container.getOneModuleInstance('button-group');
    sendControls.addEventListener('send', function(event, button) {
        var userId = button.getStringOption('user-id');
        var currentCake = model.cakes.getCurrentCake();

        tuna.rest.call('social.wall.post', {
            'image': currentCake.imageBase64,
            'user_id': userId
        }, function() {
            tuna.ui.popups.alert('Торт успешно опубликован!');
        });
    });
};

tuna.view.registerController('share_step', new VKShareController());