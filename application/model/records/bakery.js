(function() {

    var Bakery = function() {
        this.id = '';
        this.city = '';
        this.deliveryPrice = 0;
    };

    tuna.utils.extend(Bakery, tuna.model.Record);

    model.records.Bakery = Bakery;

})();