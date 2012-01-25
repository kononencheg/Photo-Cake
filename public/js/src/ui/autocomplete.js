(function() {
    tuna.namespace('ui');

    var Autocomplete = function(selectionGroup, transformer) {
        tuna.events.EventDispatcher.call(this);
        
        this.__selectionGroup = selectionGroup;
        this.__transformer = transformer;

        this.__data = null;
        this.__currentData = null;

        this.__selectedData = [];

        this.__filterCallback = function(item) {
            return item.name;
        };
    };

    tuna.extend(Autocomplete, tuna.events.EventDispatcher);

    Autocomplete.prototype.setFilterCallback = function(callback) {
        this.__filterCallback = callback;
    };

    Autocomplete.prototype.setData = function(data) {
        this.__currentData = this.__data = data;
        this.update();
    };

    Autocomplete.prototype.getValueAt = function(index) {
        if (this.__currentData[index] !== undefined) {
            return this.__filterCallback(this.__currentData[index]);
        }

        return null;
    };

    Autocomplete.prototype.complete = function(term) {
        this.__currentData = this.__filterData(term);
        this.update();
    };

    Autocomplete.prototype.update = function() {
        this.__transformer.applyTransform(this.__currentData);
        this.__selectionGroup.updateView();
    };

    Autocomplete.prototype.__filterData = function(term) {
        var result = [];

        if (term.length === 0) {
            result = this.__data;
        } else {
            var needle = term.toUpperCase();

            var i = 0,
                l = this.__data.length;

            var item = null;
            while (i < l) {
                item = this.__data[i];

                if (this.__filterCallback(item).toUpperCase()
                                               .indexOf(needle) !== -1) {
                    result.push(item);
                }

                i++;
            }
        }

        return result;
    };

    ui.Autocomplete = Autocomplete;
})();