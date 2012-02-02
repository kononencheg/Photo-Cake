(function() {

    tuna.namespace('model.records');

    var Cake = function() {
        this.id = '';
        this.imageUrl = '';

        this.markupJson = '';
        this.imageBase64 = '';
        this.photoBase64 = '';

        this.dimensions = null;
        this.content = null;
    };

    tuna.extend(Cake, tuna.model.Record);

    model.records.Cake = Cake;

})();