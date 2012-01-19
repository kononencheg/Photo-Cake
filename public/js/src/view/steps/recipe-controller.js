(function() {

    var RECIPE_LIST = [
        { 'name': 1, 'title': 'Фреш', 'image_url': '/img/app/recipes/fresh.jpg',
          'desc': 'Самый легкий торт: нежное пропитанное алкогольным сиропом бисквитное тесто, пюре манго и суфле на основе сметаны.' },
        { 'name': 2, 'title': 'Тирамису', 'image_url': '/img/app/recipes/tiramisu.jpg',
          'desc': 'Классический итальянский десерт – нежный и соблазнительный. Шоколадно-миндальный бисквит, пропитанный кофе с ликером Амаретто, оригинальный сливочный крем на основе итальянского сыра Маскарпоне, нежное песочное печенье.' },
        { 'name': 3, 'title': 'Марципан', 'image_url': '/img/app/recipes/marzipan.jpg',
          'desc': 'Натуральный марципан (размолотый в муку предварительно обжаренный миндаль, смешанный с сахарной пудрой), тонкий миндальный бисквит, сливочно-карамельный крем, натуральные сливки и фисташковая паста.' },
        { 'name': 4, 'title': 'Трюфельный', 'image_url': '/img/app/recipes/truffle.jpg',
          'desc': 'Все самое вкусное придумали французы - классический французский торт. Щедро-шоколадный бисквит, пропитанный сиропом, шоколадный трюфель, крем на основе натуральных сливок, шоколадный гаммаж сверху.' },
        { 'name': 5, 'title': 'Торт-Бейлиз', 'image_url': '/img/app/recipes/bayliss.jpg',
          'desc': 'Кто не любит вкус этого сливочного ликера? Французский бисквит, щедро пропитанный коньячно-ликерным сиропом, легкое нежное суфле ирландским ликером, свежие ягоды.' },
        { 'name': 6, 'title': 'Манго', 'image_url': '/img/app/recipes/mango.jpg',
          'desc': 'Яркий и легкий торт. Песочное тесто, нежное суфле из натуральных сливок и пюре маракуйи и манго.' },
        { 'name': 7, 'title': 'Шоколад', 'image_url': '/img/app/recipes/chocolate.jpg',
          'desc': 'Роскошный торт с насыщенным шоколадно-коньячным вкусом. Тонкий миндальный бисквит, сливочный мусс с темным бельгийским шоколадом, шоколадный гаммаж.' },
        { 'name': 8, 'title': 'Клубничный', 'image_url': '/img/app/recipes/strawberry.jpg',
          'desc': 'Нежный низкокалорийный торт. Нижний слой – тонкий французский бисквит, пропитанный сиропом. Половинки свежей клубники, ванильно-йогуртовое суфле.' },
        { 'name': 9, 'title': 'Чизкейк', 'image_url': '/img/app/recipes/cheese-cake.jpg',
          'desc': 'Торт, любимый всеми. Мягкое песочное тесто внизу, начинка на основе сыра Филадельфия и ликера, с добавлением цедры лимона и апельсина, натуральные сливки, свежие ягоды.' }
    ];

    var RecipeController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__descriptionPopup = null;

        this.__popupRecipe = null;
        this.__popupIndex = -1;
    };

    tuna.extend(RecipeController, tuna.view.StepViewController);

    RecipeController.prototype.canClose = function(index) {
        if (index === 'order_step' && this.__selectedRecipe === null) {
            alert('Для продолжения необходимо выбрать рецепт!');
            return false;
        }

        return true;
    };

    RecipeController.prototype.open = function() {
        model.orders.initCurrentOrder(model.cakes.getCurrentCake());

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('popup');
    };

    RecipeController.prototype._initActions = function() {
        this.__initRecipeList();
        this.__initRecipeSelection();
        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initRecipeList = function() {
        model.recipes.setRecipes(RECIPE_LIST);
    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        var self = this;

        this.__descriptionPopup = ui.Popup.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        this.__descriptionPopup.addEventListener('popup-apply', function() {
            var input = tuna.dom.selectOne(
                'input[value=' + self.__popupIndex + '].j-recipe-radio'
            );

            input.checked = true;

            tuna.dom.dispatchEvent(input, 'click');
        });
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');

                self.__popupRecipe = model.recipes.getRecipeAt(index);
                self.__popupIndex = index;

                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, 'input.j-recipe-radio', 'click',
            function(event) {
                model.orders.setCurrentRecipeIndex(this.value);

                self.__updateView();
            }
        );
    };


    RecipeController.prototype.__updateView = function() {
        this._container.applyData({
            'cake': model.cakes.getCurrentCake(),
            'price': model.orders.getPrice(),
            'recipes': model.recipes.getRecipes(),
            'popup_recipe': this.__popupRecipe
        });
    };


    tuna.view.registerController(new RecipeController('recipe_step'));

})();






















