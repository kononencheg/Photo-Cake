/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var TitleController = function() {
    tuna.view.PageViewController.call(this);
};

tuna.utils.extend(TitleController, tuna.view.PageViewController);

/**
 * @override
 */
TitleController.prototype._requireModules = function() {
    this._container.requireModule('carousel');
    this._container.requireModule('vk-share');
    this._container.requireModule('popup-button');
    this._container.requireModule('button-group');
    this._container.requireModule('selection-group');
    this._container.requireModule('template-transformer');
};

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

        self._navigation.navigate('designer_step', cakes[i]);
    });

    tuna.rest.call('cakes.getPromoted', null, function(result) {
        cakes = result;
        cakeListTransformer.applyTransform(tuna.model.serializeArray(cakes));
    }, 'cake');
};

tuna.view.registerController('title_step', new TitleController());

