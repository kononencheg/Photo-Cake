(function() {

    var RecipeController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__descriptionPopup = null;

        this.__popupRecipe = null;
        this.__selectedRecipe = null;
    };

    tuna.extend(RecipeController, tuna.view.StepViewController);

    RecipeController.prototype.canGoNext = function() {
        return true;
    };

    RecipeController.prototype.canClose = function(nextPage) {
        if (nextPage.id !== 'share_step' && this.__selectedRecipe === null) {
            alert('Для продолжения необходимо выбрать рецепт!');
            return false;
        }

        return true;
    };

    RecipeController.prototype.handleTransformComplete
        = function(target, created, removed) {

        for (var i in created) {
            this._container.initModules(created[i]);
        }
    };

    RecipeController.prototype._bootstrap = function() {
        this.init();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__initRecipeList();
        this.__initRecipeSelection();
        this.__initDescriptionPopup();

        this._db.subscribe('cake_params', this.__updateView, this);
        this.__updateView();
    };

    RecipeController.prototype.__initRecipeList = function() {
        this._db.set('recipes', [
            { 'id': 1, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
            { 'id': 2, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
            { 'id': 3, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' },
            { 'id': 4, 'name': 'Тортильон кононенски', 'image_url': '/img/app/recipes/bayliss.jpg' }
        ]);
    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        this.__descriptionPopup = ui.Popup.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        this.__descriptionPopup.subscribe('popup-apply', function() {
            var input = tuna.dom.selectOne(
                'input[value=' + this.__popupRecipe.index + '].j-recipe-radio'
            );

            input.checked = true;
            tuna.dom.dispatchEvent(input, 'change');
        }, this);
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');
                var recipes  = self._db.get('recipes');
                
                self.__popupRecipe = recipes[index];
                self.__popupRecipe.index = index;
                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, 'input.j-recipe-radio', 'change',
            function(event) {
                var recipes  = self._db.get('recipes');
                self.__selectedRecipe = recipes[this.value];
            }
        );
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
                'recipes': this._db.get('recipes'),
                'popup_recipe': this.__popupRecipe
            });
        }
    };

    RecipeController.prototype.__calculatePrice = function() {
        return 1000;
    };

    tuna.view.registerController(new RecipeController('recipe_step'));
})();
