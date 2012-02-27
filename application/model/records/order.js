(function() {

    var Order = function() {
        this.id = null;
        this.user = null;
        this.cake = null;

        this.bakery = null;
        this.recipe = null;

        this.payment = null;

        this.campaign = '';
    };

    tuna.utils.extend(Order, tuna.model.Record);

    model.records.Order = Order;

})();