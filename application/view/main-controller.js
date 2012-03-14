/**
 * @extends {tuna.view.ViewController}
 * @constructor
 */
var MainController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'navigation', 'popup-button', 'template-transformer',
        'autocomplete', 'yandex-share' ]
};

tuna.utils.extend(MainController, tuna.view.ViewController);

/**
 * @override
 */
MainController.prototype._initActions = function() {
    var self = this;

    tuna.rest.call('social.users.getCurrent', null, function(user) {
        model.users.setCurrentUser(user);
    });

    var cityAutocomplete = this._container.getModuleInstanceByName
        ('autocomplete', 'city-popup');

    cityAutocomplete.setItemSerializeCallback(function(city) {
        return city.name;
    });

    var cityPopupButton = this._container.getModuleInstanceByName
        ('popup-button', 'city-popup');

    var cityPopup = cityPopupButton.getPopup();

    cityPopup.addEventListener('popup-apply', function() {
        var city = cityAutocomplete.getSelectedData();
        if (city !== null) {
            self.__updateCurrentBakery(city);
        }
    });

    var bakeryTransformer = this._container.getModuleInstanceByName
        ('template-transformer', 'current-bakery');

    model.currentBakery.addEventListener('update', function(event, bakery) {
        bakeryTransformer.applyTransform(tuna.model.serialize(bakery));
        cityAutocomplete.selectValue(bakery.city.name);
    });

    model.cities.addEventListener('update', function(event, cities) {
        cityAutocomplete.setData(cities);
    });

    tuna.rest.call('cities.getCurrent', null, function(city) {

        model.bakeries.addEventListener('update', function() {
            var ids = [];
            var cities = model.bakeries.map(function(bakery) {
                var id = bakery.city.id;

                if (tuna.utils.indexOf(id, ids) === -1) {
                    ids.push(id);

                    return bakery.city;
                }

                return null;
            });

            model.cities.set(cities);

            self.__updateCurrentBakery(city);
        });

        model.bakeries.load();
    }, 'city');
};

/**
 *
 * @param {model.records.City} city
 * @private
 */
MainController.prototype.__updateCurrentBakery = function(city) {
    var bakeries = model.bakeries.find(function(bakery) {
        bakery.isNative = bakery.city.name === city.name;
        return bakery.isNative;
    });

    if (bakeries.length === 0) {
        bakeries = model.bakeries.get();
    }

    // TODO: Make selection random
    model.currentBakery.set(bakeries[0]);
};

tuna.view.setMainController(new MainController());

