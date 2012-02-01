(function() {

    tuna.namespace('tuna.model');

    /**
     * @constructor
     */
    tuna.model.Record = function() {};

    /**
     * @return {tuna.model.Record}
     */
    tuna.model.Record.prototype.clone = function() {
        var clone = new this.constructor();
        for (var param in this) {
            if (this.hasOwnProperty(param)) {
                clone[param] = this[param];
            }
        }

        return clone;
    };

})();
