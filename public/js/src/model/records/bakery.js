(function() {

    tuna.namespace('model.records');

    var Bakery = function() {
        this.id = '';
        this.city = '';
        this.deliveryPrice = 0;
    };

    tuna.extend(Bakery, tuna.model.Record);

    model.records.Bakery = Bakery;

})();