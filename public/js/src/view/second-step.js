(function() {

    var SecondStepController = function(id) {
        tuna.control.ViewController.call(this, id);
    };

    tuna.extend(SecondStepController, tuna.control.ViewController);

    SecondStepController.prototype._requireModules = function() {
        // TODO: Разобраться с инициализацией спрятанных итем рентдереров
        this._container.requireModule('popup');
    };

    SecondStepController.prototype._initListeners = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, 'input[type=radio]', 'change',
            function(event) {
                var currentRecipe = self.__selectRecipeWithID(event.target.getAttribute('data-value'));

                var prices = self._db.get('recipes.' + currentRecipe + '.prices');
                var mass =  self._db.get('order.cake.dimensions.mass');

                self._db.set('order.price', prices[mass]); // calculate price globally
                self._db.set('view.price', prices[mass] + ' рублей.'); // calculate price globally
                self._db.notify('view');
            }
        );

        tuna.dom.addChildEventListener(
            this._target, 'img.j-popup', 'click',
            function(event) {
                var popupRecipe = self.__selectRecipeWithID(event.target.getAttribute('data-value'));
                var recipe = self._db.get('recipes.' + popupRecipe);

                self._db.set('view.popup_recipe', recipe);
                self._db.notify('view');
            }
        );

        tuna.dom.addChildEventListener(
            this._target, '.j-selection-next', 'click',
            function(event) {
                if (self._db.get('view.current_recipe') === -1) {
                    tuna.dom.stopPropogation(event);
                    alert('Выберите начинку для торта!')
                }
            }
        );
    };

    SecondStepController.prototype._initData = function() {
        var self = this;

        var request = new tuna.net.Request(RECIPES_URL);
        request.subscribe('complete', function(type, response) {
            var data = JSON.parse(response);

            self._db.set('recipes', data);
            self._db.set('view.current_recipe', -1);
            self._db.set('view.recipes', data);

            self._db.notify('view');
        });

        request.send();
    };

    SecondStepController.prototype.handleTransformComplete = function(target, created, removed) {
        for (var key in created) {
            this._container.initModules(created[key]);
        }
    };
    SecondStepController.prototype.__selectRecipeWithID = function(id) {
        var recipes = this._db.get('recipes');

        for (var i in recipes) {
            if (recipes[i]._id.$id === id) {
                this._db.set('view.current_recipe', i);
                return i;
            }
        }
    };

    tuna.control.ViewController.registerController(new SecondStepController('second_step'));

})();