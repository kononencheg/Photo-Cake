(function() {

    var Recipe = function() {
        this.id = '';
        this.name = '';
        this.desc = '';

        this.price = 0;

        this.imageUrl = '';
    };

    tuna.utils.extend(Recipe, tuna.model.Record);

    model.records.Recipe = Recipe;

})();