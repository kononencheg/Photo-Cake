(function() {

    var RecipeController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__cakeImage = null;
    };

    tuna.extend(RecipeController, tuna.view.StepViewController);

    RecipeController.prototype.canGoNext = function() {
        return false;
    };

    RecipeController.prototype.handleTransformComplete
        = function(target, created, removed) {

        for (var i in created) {
            this._container.initModules(created[i]);
        }

        debugger;
    };

    RecipeController.prototype._bootstrap = function() {
        this.init();
    };

    RecipeController.prototype._requireModules = function() {
       this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__cakeImage = tuna.dom.selectOne('#recipe_cake_image');

        this._db.subscribe('cake_params', this.__updateView, this);
        this._db.subscribe('cake_image_element', this.__updateView, this);

        this.__updateView();
    };

    RecipeController.prototype.__updateView = function() {
        var cakeParams = this._db.get('cake_params');
        if (cakeParams !== null) {
            var price = this.__calculatePrice();

            this._container.applyData({
                'cake': {
                    'weight': cakeParams.dimensions.mass + ' кг',
                    'persons_count': cakeParams.dimensions.persons_count,
                    'price': price + ' рублей'
                },
                'recipes': [
                    { 'id': 1, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
                    { 'id': 2, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
                    { 'id': 3, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
                    { 'id': 4, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' }
                ]
            });
        }

        var image = this._db.get('cake_image_element');
        if (image !== null) {
            this.__cakeImage.parentNode.replaceChild(image, this.__cakeImage);
            this.__cakeImage = image;
        }
    };

    RecipeController.prototype.__calculatePrice = function() {
        return 1000;
    };

    tuna.view.registerController(new RecipeController('recipe_step'));
})();
