(function() {

    var container = null;
    var target = null;
    var db = null;

    var controller = new tuna.control.ViewController('second_step');

    controller.subscribe('prepare', function(type, targetContainer) {
        container = targetContainer;
        container.addModule('popup', 3, this);

        db = container.getDB();
    });

    controller.subscribe('init', function(type, element) {
        target = element;

        container.initModules();

        initData();
        initListeners();
    });

    controller.subscribe('create-node', function(type, node) {
        debugger;
        container.initModules(node);
    });

    controller.subscribe('remove-node', function(type, node) {

    });

    controller.wait();


    function initListeners() {
        tuna.dom.addChildEventListener(
            target, 'input[type=radio]', 'change',
            function(event) {
                var currentRecipe = selectRecipeWithID(event.target.value);

                var prices = db.get('recipes.' + currentRecipe + '.prices');
                var mass =  db.get('order.cake.mass');

                db.set('order.price', prices[mass]);
                db.notify();
            }
        );

        tuna.dom.addChildEventListener(
            target, '.j-selection-next', 'click',
            function(event) {
                if (db.get('order.view.currentRecipe') === -1) {
                    tuna.dom.stopPropogation(event);
                    alert('Выберите начинку для торта!')
                }
            }
        );
    }

    function initData() {
        var request = new tuna.net.Request(RECIPES_URL);
        request.subscribe('complete', function(type, response) {
            //try {
                handleRecipes(JSON.parse(response));
            //} catch (error) {
            //    console.error(error);
            //}
        });

        request.send();
    }

    function handleRecipes(data) {
        db.set('recipes', data);
        db.set('order.view.currentRecipe', -1);
        db.notify();
    }

    function selectRecipeWithID(id) {
        var recipes = db.get('recipes');

        for (var i in recipes) {
            if (recipes[i]._id.$id === id) {
                db.set('order.view.currentRecipe', i);
                return i;
            }
        }
    }

})();