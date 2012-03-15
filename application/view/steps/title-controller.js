/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var TitleController = function() {
    tuna.view.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'template-transformer', 'carousel', 'vk-share',
                      'popup-button', 'button-group', 'selection-group' ];
};

tuna.utils.extend(TitleController, tuna.view.PageViewController);

/**
 * @override
 */
TitleController.prototype._initActions = function() {
    var cakeListTransformer = this._container.getModuleInstanceByName
                                    ('template-transformer', 'cake-list');

    model.cakes.addEventListener('update', function(event, cakes) {
        cakeListTransformer.applyTransform(tuna.model.serialize(cakes));
    });

    model.cakes.load();
};

tuna.view.registerController('title_step', new TitleController());

