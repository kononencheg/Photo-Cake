(function() {

    tuna.namespace('model.records');

    var Payment = function() {
        this.decoPrice = 0;
        this.recipePrice = 0;
        this.deliveryPrice = 0;

        this.totalPrice = 0;
    };

    tuna.extend(Payment, tuna.model.Record);

    model.records.Payment = Payment;

})();