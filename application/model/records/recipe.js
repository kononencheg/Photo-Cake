(function() {

    var Recipe = function() {

        /**
         *
         * @type {String}
         */
        this.id = '';

        /**
         *
         * @type {String}
         */
        this.name = '';

        /**
         *
         * @type {String}
         */
        this.desc = '';

        /**
         *
         * @type {Number}
         */
        this.price = 0;

        /**
         *
         * @type {String}
         */
        this.imageUrl = '';

        /**
         *
         * @type {Object}
         */
        this.dimensionPrices = {};
    };

    tuna.utils.extend(Recipe, tuna.model.Record);

    model.records.Recipe = Recipe;

})();