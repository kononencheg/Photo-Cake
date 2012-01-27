(function() {

    tuna.namespace('model');

    var Bakeries = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Bakeries, tuna.model.Resource);

    Bakeries.prototype.setBakeries = function(bakeries) {
        this.__storage.set('bakeries', bakeries);
    };

    Bakeries.prototype.getBakeryAt = function(index) {
        return this.__storage.get('bakeries')[index];
    };

    Bakeries.prototype.getBakeries = function() {
        return this.__storage.get('bakeries');
    };

    model.bakeries = new Bakeries();

})();
