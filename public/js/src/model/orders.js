(function() {

    tuna.namespace('model');

    var Orders = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Orders, tuna.model.Resource);

    Orders.prototype.initCurrentOrder = function() {
        var cake = this.__storage.get('current_cake');

        this.__storage.set('deco_price', this.__getDecorationPrice(cake));

        var recipe = this.__storage.get('current_recipe');
        if (recipe !== null) {
            this.__storage.set
                ('recipe_price', this.__getRecipePrice(cake, recipe));
        }
    };

    Orders.prototype.setCurrentRecipeIndex = function(index) {
        var cake = this.__storage.get('current_cake');
        var recipe = model.recipes.getRecipeAt(index);

        this.__storage.set('current_recipe', recipe);
        this.__storage.set('recipe_price', this.__getRecipePrice(cake, recipe));
    };

    Orders.prototype.getPrice = function() {
        return this.__storage.get('deco_price') +
                    this.__storage.get('recipe_price');
    };

    Orders.prototype.__getRecipePrice = function(cake, recipe) {
        return 1500 * cake.dimensions.mass;
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
