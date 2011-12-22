(function() {

    var RECIPE_LIST = [
        { 'id': 1, 'name': 'Фреш', 'image_url': '/img/app/recipes/fresh.jpg',
          'desc': 'Самый легкий торт: нежное пропитанное алкогольным сиропом бисквитное тесто, пюре манго и суфле на основе сметаны.' },
        { 'id': 2, 'name': 'Тирамису', 'image_url': '/img/app/recipes/tiramisu.jpg',
          'desc': 'Классический итальянский десерт – нежный и соблазнительный. Шоколадно-миндальный бисквит, пропитанный кофе с ликером Амаретто, оригинальный сливочный крем на основе итальянского сыра Маскарпоне, нежное песочное печенье.' },
        { 'id': 3, 'name': 'Марципан', 'image_url': '/img/app/recipes/marzipan.jpg',
          'desc': 'Натуральный марципан (размолотый в муку предварительно обжаренный миндаль, смешанный с сахарной пудрой), тонкий миндальный бисквит, сливочно-карамельный крем, натуральные сливки и фисташковая паста.' },
        { 'id': 4, 'name': 'Трюфельный', 'image_url': '/img/app/recipes/truffle.jpg',
          'desc': 'Все самое вкусное придумали французы - классический французский торт. Щедро-шоколадный бисквит, пропитанный сиропом, шоколадный трюфель, крем на основе натуральных сливок, шоколадный гаммаж сверху.' },
        { 'id': 5, 'name': 'Торт-Бейлиз', 'image_url': '/img/app/recipes/bayliss.jpg',
          'desc': 'Кто не любит вкус этого сливочного ликера? Французский бисквит, щедро пропитанный коньячно-ликерным сиропом, легкое нежное суфле ирландским ликером, свежие ягоды.' },
        { 'id': 6, 'name': 'Манго', 'image_url': '/img/app/recipes/mango.jpg',
          'desc': 'Яркий и легкий торт. Песочное тесто, нежное суфле из натуральных сливок и пюре маракуйи и манго.' },
        { 'id': 7, 'name': 'Шоколад', 'image_url': '/img/app/recipes/chocolate.jpg',
          'desc': 'Роскошный торт с насыщенным шоколадно-коньячным вкусом. Тонкий миндальный бисквит, сливочный мусс с темным бельгийским шоколадом, шоколадный гаммаж.' },
        { 'id': 8, 'name': 'Клубничный', 'image_url': '/img/app/recipes/strawberry.jpg',
          'desc': 'Нежный низкокалорийный торт. Нижний слой – тонкий французский бисквит, пропитанный сиропом. Половинки свежей клубники, ванильно-йогуртовое суфле.' },
        { 'id': 9, 'name': 'Чизкейк', 'image_url': '/img/app/recipes/cheese-cake.jpg',
          'desc': 'Торт, любимый всеми. Мягкое песочное тесто внизу, начинка на основе сыра Филадельфия и ликера, с добавлением цедры лимона и апельсина, натуральные сливки, свежие ягоды.' }
    ];


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
        this._db.set('recipes', RECIPE_LIST);
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
                self.__updateView();
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
        var result = 1000;

        if (this.__selectedRecipe !== null) {
            var cakeParams = this._db.get('cake_params');
            result += 1500 * cakeParams.dimensions.mass;
        }

        return result;
    };

    tuna.view.registerController(new RecipeController('recipe_step'));
})();






















