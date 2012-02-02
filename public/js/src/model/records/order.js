(function() {

    tuna.namespace('model.records');

    var Order = function() {
        this.user = null;
        this.cake = null;

        this.bakery = null;
        this.recipe = null;

        this.payment = null;

        this.campaign = '';
    };

    tuna.extend(Order, tuna.model.Record);

    model.records.Order = Order;

})();