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
    var self = this;
    var cakes = [];

    var cakeListTransformer = this._container.getModuleInstanceByName
                                    ('template-transformer', 'cake-list');

    var cakesControls = this._container.getModuleInstanceByName
                                        ('button-group', 'cake-list');

    cakesControls.addEventListener('buy', function(event, button) {
        var cakeId = button.getStringOption('cake-id');

        var i = 0,
            l = cakes.length;

        while (i < l) {
            if (cakes[i].id === cakeId) {
                break;
            }

            i++;
        }

        self._navigation.navigate('designer', cakes[i]);
    });

    tuna.rest.call('cakes.getPromoted', null, function(result) {
        cakes = result;
        cakeListTransformer.applyTransform(tuna.model.serialize(cakes));
    }, 'cake');
};

tuna.view.registerController('title_step', new TitleController());

