(function() {

    var Cake = function() {
        this.imageUrl = '';

        this.markupJson = '';
        this.imageBase64 = '';
        this.photoBase64 = '';

        this.content = null;

        this.weight = '';
        this.personsCount = 0;
    };

    tuna.utils.extend(Cake, tuna.model.Record);

    model.records.Cake = Cake;

})();