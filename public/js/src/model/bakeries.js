(function() {

    tuna.namespace('model');

    var Bakeries = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Bakeries, tuna.model.Resource);

    Bakeries.prototype.setBakeries = function(recipes) {
        this.__storage.set('bakeries', recipes);
    };

    Bakeries.prototype.getBakeryAt = function(index) {
        return this.__storage.get('bakeries')[index];
    };

    Bakeries.prototype.getBakeries = function() {
        return this.__storage.get('bakeries');
    };

    model.bakeries = new Bakeries();

})();
