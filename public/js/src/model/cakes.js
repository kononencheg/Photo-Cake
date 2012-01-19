(function() {

    tuna.namespace('model');

    var Cakes = function() {
        tuna.model.Resource.call(this);
    };

    tuna.extend(Cakes, tuna.model.Resource);

    Cakes.prototype.saveCurrentCake = function(markupJSON, imageBase64,
                                               photoBase64) {
        var markup = JSON.parse(markupJSON);
        var cake = {
            'markup_json': markupJSON,
            'image_base64': imageBase64,
            'photo_base64': photoBase64,
            'dimensions': markup.dimensions,
            'content': markup.content
        };

        this.__storage.set('current_cake', cake);

        return cake;
    };

    Cakes.prototype.getCurrentCake = function() {
        return this.__storage.get('current_cake');
    };

    model.cakes = new Cakes();

})();
