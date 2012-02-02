(function() {

    tuna.namespace('model.records');

    var Cake = function() {
        this.imageUrl = '';

        this.markupJson = '';
        this.imageBase64 = '';
        this.photoBase64 = '';

        this.content = null;

        this.weight = 0;
        this.personsCount = 0;
    };

    tuna.extend(Cake, tuna.model.Record);

    model.records.Cake = Cake;

})();