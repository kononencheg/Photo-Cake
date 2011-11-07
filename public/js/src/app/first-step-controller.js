(function() {

    var FirstStepController = function(id) {
        tuna.control.ViewController.call(this, id);
    };

    tuna.extend(FirstStepController, tuna.control.ViewController);

    FirstStepController.prototype._requireModules = function() {
        this._container.requireModule('slider');
    };

    FirstStepController.prototype._initListeners = function() {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-horizontal-slider, .j-vertical-slider', 'ui-value-change',
            function(event) {
                self._db.set('view.cake.current_mass', event.data);

                self.__syncCakeData();
            }
        );
    };

    FirstStepController.prototype._initData = function() {
        var self = this;

        var dimensionsRequest = new tuna.net.Request(DIMENSIONS_URL);
        dimensionsRequest.subscribe('complete', function(type, response) {
            var dimensions = JSON.parse(response);

            self._db.set('dimensions', dimensions);

            self._db.set('view.cake.masses_count', dimensions.length);
            self._db.set('view.cake.current_mass', 0);

            self.__syncCakeData();
        });

        dimensionsRequest.send();
    };

    FirstStepController.prototype.__syncCakeData = function() {
        var currentMass = this._db.get('view.cake.current_mass');
        var dimensions = this._db.get('dimensions.' + currentMass);

        this._db.set('order.cake.dimensions', {
            "shape":  "circle",
            "mass":   dimensions.mass,
            "ratio":  dimensions.ratio,
            "width":  dimensions.circle.width,
            "height": dimensions.circle.height,
            "persons_count": dimensions.persons_count
        });

        this._db.set('view.cake.dimensions', {
            "mass":   dimensions.mass + '00 кг.',
            "width":  dimensions.circle.width + ' см.',
            "height": dimensions.circle.height + ' см.',
            "persons_count": dimensions.persons_count
        });

        this._db.notify('view');
    };

    tuna.control.ViewController.registerController(new FirstStepController('first_step'));

})();