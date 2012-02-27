(function() {

    var TitleController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(TitleController, tuna.view.PageViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('carousel');
        this._container.requireModule('popup-button');
        this._container.requireModule('button-group');
        this._container.requireModule('template-transformer');
    };

    TitleController.prototype._initActions = function() {
        var self = this;
        var cakes = {};

        var cakeListTransformer = this._container.getModuleInstanceByName
                                        ('template-transformer', 'cake-list');

        var wantButton = this._container.getModuleInstanceByName
                                            ('button-group', 'cake-list');

        wantButton.addEventListener('buy', function(event, button) {
            var cakeId = button.getOption('cake-id');
            for (var i in cakes) {
                if (cakes[i].id === cakeId) {
                    self._navigation.navigate('designer_step', cakes[i]);
                    break;
                }
            }
        });

        tuna.rest.call('cakes.getPromoted', null, function(result) {
            cakes = result;
            cakeListTransformer.applyTransform(cakes);
        });


    };

    tuna.view.registerController('title_step', new TitleController());

})();
