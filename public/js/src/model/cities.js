(function() {

    tuna.namespace('model');

    var Cities = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Cities, tuna.model.Resource);

    Cities.prototype.setCities = function(cities) {
        this.__storage.set('cities', cities);
    };

    Cities.prototype.getCities = function() {
        return this.__storage.get('cities');
    };

    model.cities = new Cities();

})();
