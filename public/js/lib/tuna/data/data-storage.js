(function() {
    tuna.namespace('tuna.data');

    var DataStorage = function() {
        tuna.utils.Notifier.call(this);

        this.__data = {};
    };

    tuna.extend(DataStorage, tuna.utils.Notifier);

    DataStorage.prototype.get = function(key) {
        if (this.__data[key] !== undefined) {
            return tuna.clone(this.__data[key]);
        }

        return null;
    };

    DataStorage.prototype.set = function(key, value) {
        this.__data[key] = value;

        var self = this;
        setTimeout(function() {
            self.notify(key, value);
        }, 0);
    };

    tuna.data.DataStorage = DataStorage;
})();