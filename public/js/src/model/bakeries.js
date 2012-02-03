(function() {

    var Bakeries = function() {
        this.__list = []
    };

    Bakeries.prototype.addBakery = function(bakery) {
        this.__list.push(bakery);
    };

    Bakeries.prototype.getBakeryAt = function(index) {
        return this.__list[index];
    };

    Bakeries.prototype.getList = function() {
        return this.__list;
    };

    model.bakeries = new Bakeries();

})();
