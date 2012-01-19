(function() {
    tuna.namespace('tuna.model');

    var DataStorage = function(core) {
        tuna.events.EventDispatcher.call(this);

        this.__data = core == undefined ? {} : core;
    };

    tuna.extend(DataStorage, tuna.events.EventDispatcher);

    DataStorage.prototype.get = function(key) {
        if (this.__data[key] !== undefined) {
            return tuna.clone(this.__data[key]);
        }

        return null;
    };

    DataStorage.prototype.set = function(key, value) {
        this.__data[key] = value;

        var self = this;
        tuna.nextTick(function() {
            self.dispatch(new tuna.events.Event(key), value);
        });
    };

    tuna.model.DataStorage = DataStorage;
})();