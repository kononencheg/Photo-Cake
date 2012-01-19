(function() {
    tuna.namespace('ui');

    var Autocomplete = function(input) {
        tuna.events.EventDispatcher.call(this);
        
        this.__input = input;

        this.__selectionGroup = null;
        this.__transformer = null;

        this.__data = null;
        this.__filteredData = null;
    };

    tuna.extend(Autocomplete, tuna.events.EventDispatcher);

    Autocomplete.prototype.setTransformer = function(transformer) {
        return this.__transformer = transformer;
    };

    Autocomplete.prototype.setData = function(data) {
        this.__data = data;
        this.__applyFilter('');
    };

    Autocomplete.prototype.setSelectionGroup = function(group) {
        this.__selectionGroup = group;
    };

    Autocomplete.prototype.init = function() {
        var self = this;
        var lastValue = null;

        tuna.dom.addEventListener(this.__input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                lastValue = this.value;

                self.__applyFilter(lastValue);
            }
        });
    };

    Autocomplete.prototype.getCurrentItem = function() {
        var index = this.__selectionGroup.getLastSelectedIndex();
        if (index !== -1) {
            return this.__filteredData[index];
        } else {
            return null;
        }
    };

    Autocomplete.prototype.__applyFilter = function(term) {
        this.__filteredData = this.__filterData(term)
        this.__transformer.applyTransform(this.__filteredData);
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

            while (i < l) {
                // TODO: Change login (do not check name)
                if (this.__data[i].name.toUpperCase().indexOf(needle) !== -1) {
                    result.push(this.__data[i]);
                }

                i++;
            }
        }

        return result;
    };

    ui.Autocomplete = Autocomplete;
})();