(function() {

    var Filtration = function(input, transformer) {
        tuna.events.EventDispatcher.call(this, null);
        
        this._input = input;
        this._transformer = transformer;

        this.__inputLastValue = null;

        this._data = null;
        this._currentData = null;

        this._filterCallback = function(item) {
            return item.name;
        };
    };

    tuna.utils.extend(Filtration, tuna.events.EventDispatcher);

    Filtration.prototype.setFilterCallback = function(callback) {
        this._filterCallback = callback;
    };

    Filtration.prototype.init = function() {
        var self = this;

        var lastValue = null;
        tuna.dom.addEventListener(this._input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                self._handleKeyup(event);

                lastValue = this.value;
            }
        });
    };

    Filtration.prototype._handleKeyup = function(event) {
        this.filter(this._input.value);
    };

    Filtration.prototype.setData = function(data) {
        this._currentData = this._data = data;
        this.update();
    };

    Filtration.prototype.filter = function(term) {
        this._currentData = this._filterData(term);
        this.update();
    };

    Filtration.prototype.update = function() {
        this._transformer.applyTransform(this._currentData);
    };

    Filtration.prototype.clear = function() {
        this.filter(this._input.value = '');
    };

    Filtration.prototype._filterData = function(term) {
        var result = [];

        if (!term || term.length === 0) {
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

    ui.Filtration = Filtration;
})();