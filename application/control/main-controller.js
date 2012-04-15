/**
 * @extends tuna.control.ViewController
 * @constructor
 */
var MainController = function() {
    tuna.control.ViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'navigation', 'popup-button', 'template-transformer',
                      'autocomplete', 'yandex-share' ]
};

tuna.utils.extend(MainController, tuna.control.ViewController);

/**
 * @override
 */
MainController.prototype._initActions = function() {
    var self = this;

    var cityAutocomplete = this._container.getModuleInstanceByName
        ('autocomplete', 'city-popup');

    cityAutocomplete.setItemSerializeCallback(function(city) {
        return city.name;
    });

    var cityPopupButton = this._container.getModuleInstanceByName
        ('popup-button', 'city-popup');

    var cityPopup = cityPopupButton.getPopup();

    cityPopup.addEventListener('apply', function() {
        var city = cityAutocomplete.getSelectedData();
        if (city !== null) {
            self.__updateCurrentBakery(city);
        }
    });

    var bakeryTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'current-bakery');

    model.currentBakery.addEventListener('update', function(event, bakery) {
        bakeryTransformer.applyTransform(tuna.model.serialize(bakery));
    });

    model.cities.addEventListener('update', function(event, cities) {
        cityAutocomplete.setData(cities);
    });

    tuna.rest.call('cities.getCurrent', null, function(city) {
        var listener = function() {
            model.bakeries.removeEventListener('update', listener);

            var ids = [];
            model.cities.set(model.bakeries.map(function(bakery) {
                bakery.isNative = bakery.city.name === city.name;

                var id = bakery.city.id;
                if (tuna.utils.indexOf(id, ids) === -1) {
                    ids.push(id);

                    return bakery.city;
                }

                return null;
            }));

            self.__updateCurrentBakery(city);
        };

        model.bakeries.addEventListener('update', listener);
        model.bakeries.load();

    }, 'city');

    model.decorations.load();
};

/**
 *
 * @param {model.records.City} city
 * @private
 */
MainController.prototype.__updateCurrentBakery = function(city) {
    var bakeries = model.bakeries.find(function(bakery) {
        return bakery.city.name === city.name;
    });

    if (bakeries.length === 0) {
        bakeries = model.bakeries.get();
    }

    var bakery = bakeries[Math.floor(bakeries.length * Math.random())];

    model.currentBakery.set(bakery);
    model.cakes.load({ 'bakery_id': bakery.id });
};

tuna.control.setMainController(new MainController());

