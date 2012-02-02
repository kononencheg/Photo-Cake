(function() {

    tuna.namespace('model');

    var Cakes = function() {
        this.__currentCake = null;
    };

    Cakes.prototype.createCake = function(markupJSON, imageBase64,
                                          photoBase64) {

        var markup = JSON.parse(markupJSON);

        var cake = new model.records.Cake();
        cake.markupJson = markupJSON;
        cake.imageBase64 = imageBase64;
        cake.photoBase64 = photoBase64;

        cake.content = markup.content;

        cake.weight = markup.dimensions.mass;
        cake.personsCount = markup.dimensions.persons_count;

        return cake;
    };

    Cakes.prototype.createCampaingCake = function(weight, imageUrl) {
        var cake = new model.records.Cake();
        cake.weight = weight;
        cake.imageUrl = imageUrl;

        return cake;
    };

    Cakes.prototype.setCurrentCake = function(cake) {
        this.__currentCake = cake;
    };

    Cakes.prototype.getCurrentCake = function() {
        return this.__currentCake;
    };

    model.cakes = new Cakes();

})();
