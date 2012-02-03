(function() {

    var Autocomplete = function(input, transformer, selectionGroup) {
        ui.Filtration.call(this, input, transformer);
        
        this.__selectionGroup = selectionGroup;
        this.__selectedData = null;
    };

    tuna.utils.extend(Autocomplete, ui.Filtration);

    Autocomplete.prototype.getSelectedData = function() {
        return this.__selectedData;
    };

    Autocomplete.prototype.selectValue = function(value) {
        var filteredData = this._filterData(value);
        if (filteredData.length === 1) {
            this.__selectedData = filteredData[0];
            this._input.value = value;

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.selectIndex = function(index) {
        if (this._currentData.length > 0) {
            this.__selectedData = this._currentData[index];
            this._input.value = this._filterCallback(this.__selectedData);

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.clearSelection = function() {
        if (this.__selectedData !== null) {
            this.__selectedData = null;

            this.dispatch('change');
        }
    };

    Autocomplete.prototype.update = function() {
        ui.Filtration.prototype.update.call(this);
        this.__selectionGroup.updateView();
    };

    Autocomplete.prototype._handleKeyup = function(event) {
        ui.Filtration.prototype._handleKeyup.call(this, event);
        this.clearSelection();
    };

    ui.Autocomplete = Autocomplete;
})();