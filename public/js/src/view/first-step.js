(function() {

    // Return to OOP adn extend controllers

    var controller = new tuna.control.ViewController('first_step');

    var container = null;
    var target = null;
    var db = null;

    controller.subscribe('prepare', function(type, targetContainer) {
        container = targetContainer;
        db = container.getDB();

        container.addModule('slider');
    });

    controller.subscribe('init', function(type, element) {
        target = element;

        container.initModules();

        initData();
        initListeners();
    });

    controller.wait();

    function initListeners() {
        tuna.dom.addChildEventListener(
            target, '.j-horizontal-slider, .j-vertical-slider', 'ui-value-change',
            function(event) {
                db.set('order.view.currentMass', event.data);

                syncCakeData();
            }
        );
    }

    function initData() {
        var dimensionsRequest = new tuna.net.Request(DIMENSIONS_URL);
        dimensionsRequest.subscribe('complete', function(type, response) {
            try {
                handleDimensions(JSON.parse(response));
            } catch (error) {
                console.error(error);
            }
        });

        dimensionsRequest.send();
    }

    function handleDimensions(dimensions) {
        db.set('dimensions', dimensions);

        db.set('order.view.massesCount', dimensions.length);
        db.set('order.view.currentMass', 2);

        syncCakeData();
    }

    function syncCakeData() {
        var currentMass = db.get('order.view.currentMass');
        var dimension = db.get('dimensions.' + currentMass);
        var cake = db.get('order.cake') || {};

        cake.width = dimension.circleWidth;
        cake.height = dimension.circleHeight;
        cake.personsCount = dimension.personsCount;
        cake.mass = dimension.mass;

        db.set('order.cake', cake);
        db.notify('order.cake');
    }


})();