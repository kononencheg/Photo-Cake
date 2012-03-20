/**
 * @extends {tuna.view.ViewController}
 * @constructor
 */
var BakeryMainController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'navigation', 'template-transformer' ];
};

tuna.utils.extend(BakeryMainController, tuna.view.ViewController);

/**
 * @override
 */
BakeryMainController.prototype._initActions = function() {
    var bakeryTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'current-bakery');

    model.currentBakery.addEventListener('update', function(event, bakery) {
        bakeryTransformer.applyTransform(tuna.model.serialize(bakery));
    });

    var id = tuna.utils.config.get('bakery_id');
    if (id !== null) {
        tuna.rest.call('users.getBakeries', { 'id': id }, function(bakery) {
            model.currentBakery.set(bakery);
        }, 'bakery');
    }

    model.decorations.load();
};


tuna.view.setMainController(new BakeryMainController());

