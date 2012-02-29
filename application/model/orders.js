/**
 * @constructor
 */
var Orders = function() {
    this.__order = null;
};

Orders.prototype.getOrder = function() {
    return this.__order;
};

Orders.prototype.updateOrder = function() {
    if (this.__order === null) {
        this.__initOrder();
    }

    this.__order.cake = model.cakes.getCurrentCake();
    this.__updateOrderPrice();

    return this.__order;
};

Orders.prototype.__initOrder = function() {
    this.__order = new model.records.Order();

    var user = model.users.getCurrentUser();
    if (user !== null) {
        this.__order.user = user.clone();
    }
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

    this.__order.payment.decoPrice
        = this.__getDecorationPrice(this.__order.cake);

    if (this.__order.recipe !== null) {
        this.__order.payment.recipePrice =
            this.__order.recipe.getWeightPrice(this.__order.cake.getWeight());
    }

    if (this.__order.bakery !== null) {
        this.__order.payment.deliveryPrice = this.__order.bakery.deliveryPrice;
    }
};


Orders.prototype.__getDecorationPrice = function(cake) {
    var price = 0;

    var deco = cake.getDecorations();
    if (deco !== null) {
        var i = 0,
            l = deco.length;

        while (i < l) {
            price += this.__getDecorationItemPrice(deco[i]['name']);
            i++;
        }
    }

    return price;
};

Orders.prototype.__getDecorationItemPrice = function(name) {
    switch (name) {
        case 'cherry': case 'grape': case 'kiwi': case 'raspberry':
        case 'strawberry': case 'orange': case 'peach': case 'lemon':
        case 'blueberry': case 'currant':
            return 10;

        case 'pig1': case 'car1': case 'hare1': case 'hedgehog1':
        case 'moose1': case 'owl1': case 'pin1': case 'sheep1':
        case 'raven1': case 'bear1': case 'car2': case 'car3': case 'mat1':
        case 'ia': case 'ladybug': case 'pig': case 'rabbit': case 'tiger':
        case 'winnie': case 'winnie1': case 'bootes':
            return 250;

        case 'doll1': case 'doll2':
            return 350;

        case 'flower1': case 'flower2':
            return 300;

        case 'flower3': case 'flower4': case 'flower5': case 'flower6':
        case 'physalis':
            return 200;

        default:
            return 0;
    }
};

/**
 * @type {Orders}
 */
model.orders = new Orders();
