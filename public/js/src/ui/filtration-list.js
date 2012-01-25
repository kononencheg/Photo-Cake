(function() {
    tuna.namespace('ui');

    var FiltrationList = function(input, transformer) {
        tuna.events.EventDispatcher.call(this);
        
        this._input = input;
        this._transformer = transformer;

        this.__inputLastValue = null;

        this._data = null;
        this._currentData = null;

        this._filterCallback = function(item) {
            return item.name;
        };
    };

    tuna.extend(FiltrationList, tuna.events.EventDispatcher);

    FiltrationList.prototype.setFilterCallback = function(callback) {
        this._filterCallback = callback;
    };

    FiltrationList.prototype.init = function() {
        var self = this;

        var lastValue = null;
        tuna.dom.addEventListener(this._input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                self._handleKeyup(event);

                lastValue = this.value;
            }
        });
    };

    FiltrationList.prototype._handleKeyup = function(event) {
        this.filter(this._input.value);
    };

    FiltrationList.prototype.setData = function(data) {
        this._currentData = this._data = data;
        this.update();
    };

    FiltrationList.prototype.filter = function(term) {
        this._currentData = this._filterData(term);
        this.update();
    };

    FiltrationList.prototype.update = function() {
        this._transformer.applyTransform(this._currentData);
    };

    FiltrationList.prototype.clear = function() {
        this.filter(this._input.value = '');
    };

    FiltrationList.prototype._filterData = function(term) {
        var result = [];

        if (term.length === 0) {
            result = this._data;
        } else {
            var needle = term.toUpperCase();

            var i = 0,
                l = this._data.length;

            var item = null;
            while (i < l) {
                item = this._data[i];

                if (this._filterCallback(item).toUpperCase()
                                              .indexOf(needle) !== -1) {
                    result.push(item);
                }

                i++;
            }
        }

        return result;
    };

    ui.FiltrationList = FiltrationList;
})();