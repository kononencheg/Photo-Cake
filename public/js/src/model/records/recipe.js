(function() {

    tuna.namespace('model.records');

    var Recipe = function() {
        this.id = '';
        this.name = '';
        this.desc = '';

        this.price = 0;

        this.imageUrl = '';
    };

    tuna.extend(Recipe, tuna.model.Record);

    model.records.Recipe = Recipe;

})();