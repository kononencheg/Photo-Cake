(function() {

    tuna.namespace('model');

    var Orders = function() {
        this.__order = null;
    };

    Orders.prototype.getOrder = function() {
        return this.__order;
    };

    Orders.prototype.updateOrder = function() {
        if (this.__order === null) {
            this.__order = new model.records.Order();
            this.__order.user = model.users.getCurrentUser().clone();
        }

        this.__order.cake = model.cakes.getCurrentCake().clone();
        this.__updateOrderPrice();
    };

    Orders.prototype.setOrderRecipe = function(recipe) {
        this.__order.recipe = recipe;
        this.__updateOrderPrice();
    };

    Orders.prototype.setOrderBakery = function(bakery) {
        this.__order.bakery = bakery;
        this.__updateOrderPrice();
    };

    Orders.prototype.getOrderRecipe = function() {
        return this.__order.recipe;
    };

    Orders.prototype.getOrderBakery = function() {
        return this.__order.bakery;
    };

    Orders.prototype.__updateOrderPrice = function() {
        if (this.__order.payment === null) {
            this.__order.payment = new model.records.Payment();
        }

        var payment = this.__order.payment;

        payment.decoPrice = this.__getDecorationPrice(this.__order.cake);

        if (this.__order.recipe !== null) {
            payment.recipePrice = this.__getRecipePrice
                (this.__order.cake, this.__order.recipe);
        }

        if (this.__order.bakery !== null) {
            payment.deliveryPrice = this.__order.bakery.deliveryPrice;
        }

        payment.totalPrice
            = payment.decoPrice + payment.recipePrice + payment.deliveryPrice;
    };

    Orders.prototype.__getRecipePrice = function(cake, recipe) {
        return recipe.price * cake.dimensions.mass;
    };

    Orders.prototype.__getDecorationPrice = function(cake) {
        var price = 0;

        if (cake.content.deco !== undefined) {
            var deco = cake.content.deco;

            var i = 0,
                l = deco.length;

            while (i < l) {
                price += this.__getDecorationItemPrice(deco[i].name);
                i++;
            }
        }

        return price;
    };

    Orders.prototype.__getDecorationItemPrice = function(name) {
        switch (name) {
            case 'cherry': case 'grape': case 'kiwi': case 'raspberry':
            case 'strawberry': case 'orange': case 'peach': case 'lemon':
                return 10;

            case 'pig1': case 'car1': case 'hare1': case 'hedgehog1':
            case 'moose1': case 'owl1': case 'pin1': case 'sheep1':
            case 'raven1': case 'bear1': case 'car2': case 'car3': case 'mat1':
                return 250;

            case 'doll1': case 'doll2':
                return 350;

            case 'flower1': case 'flower2':
                return 300;

            case 'flower3': case 'flower4': case 'flower5': case 'flower6':
                return 200;

            default:
                return 0;
        }
    };

    model.orders = new Orders();
})();
