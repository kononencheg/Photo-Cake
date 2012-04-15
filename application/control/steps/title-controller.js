/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var TitleController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'template-transformer', 'carousel', 'vk-share',
                      'popup-button', 'button-group', 'selection-group' ];
};

tuna.utils.extend(TitleController, tuna.control.PageViewController);

/**
 * @override
 */
TitleController.prototype._initActions = function() {
    var cakeListTransformer = this._container.getModuleInstanceByName
                                    ('template-transformer', 'cake-list');

    model.cakes.addEventListener('update', function() {
        cakeListTransformer.applyTransform
            (tuna.model.serialize(model.cakes.get()));
    });

    cakeListTransformer.applyTransform(tuna.model.serialize(model.cakes.get()));
};

/**
 * @override
 */
TitleController.prototype.canClose = function() {
    var decorations = model.decorations.get();
    var bakery = model.currentBakery.get();

    return bakery !== null && decorations.length > 0;
};

tuna.control.registerController('title_step', new TitleController());

