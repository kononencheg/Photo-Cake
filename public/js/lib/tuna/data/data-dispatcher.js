(function() {
    tuna.namespace('tuna.data');

    var DataDispatcher = function() {
        tuna.events.EventDispatcher.call(this);
    };

    tuna.extend(DataDispatcher, tuna.events.EventDispatcher);

    DataDispatcher.prototype.notify = function(type, notification) {
        for (var path in this._listeners) {
            if (type === undefined || type.indexOf(path) === 0) {

                var i = this._listeners[path].length - 1;
                var listenData;
                while (i >= 0) {
                    listenData = this._listeners[path][i];
                    listenData[0].call(listenData[1], type, notification);

                    i--;
                }
            }
        }
    };

    DataDispatcher.prototype.set = function(path, value) {
        if (path instanceof Array) {
            var scope = this;

            var i = 0,
                l = path.length;

            var key;
            while (i < l) {
                key = path[i++];

                if (scope[key] === undefined) {
                    scope[key] = {};
                }

                if (i === l) {
                    scope[key] = value;
                } else {
                    scope = scope[key];
                }
            }
        } else {
            this.set(path.split('.'), value);
        }
    };

    DataDispatcher.prototype.get = function(path) {
        var result = undefined;

        if(path instanceof Array) {
            var scope = this;

            var i = 0,
                l = path.length;

            var key;
            while (i < l) {
                key = path[i++];

                if (scope === undefined) {
                    break;
                }

                if (i === l) {
                    result = scope[key];
                } else {
                    scope = scope[key];
                }
            }
        } else {
            result = path.length > 0 ? this.get(path.split('.')) : this;
        }

        return result;
    };

    DataDispatcher.prototype.unset = function(path) {
        if (path instanceof Array) {
            var scope = this;

            var i = 0,
                l = path.length;

            var key;
            while (i < l) {
                key = path[i++];

                if (scope[key] === undefined) {
                    scope[key] = {};
                }

                if (i === l) {
                   delete scope[key];
                } else {
                    scope = scope[key];
                }
            }
        } else {
            this.unset(path.split('.'));
        }
    };

    tuna.data.DataDispatcher = DataDispatcher;
})();