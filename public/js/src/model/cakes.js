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

        cake.dimensions = markup.dimensions;
        cake.content = markup.content;

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
