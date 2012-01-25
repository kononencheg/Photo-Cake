(function() {
    tuna.namespace('ui');

    var Autocomplete = function(input, transformer, selectionGroup) {
        ui.FiltrationList.call(this, input, transformer);
        
        this.__selectionGroup = selectionGroup;
        this.__selectedData = [];
    };

    tuna.extend(Autocomplete, ui.FiltrationList);

    Autocomplete.prototype.getSelectedData = function() {
        return this.__selectedData;
    };

    Autocomplete.prototype.selectIndex = function(index) {
        if (this._currentData.length > 0) {
            var selectedItem = this._currentData[index];
            this.__selectedData = [selectedItem];
            this._input.value = this._filterCallback(selectedItem);
        }
    };

    Autocomplete.prototype.clearSelection = function() {
        this.__selectedData.length = 0;
    };

    Autocomplete.prototype.update = function() {
        ui.FiltrationList.prototype.update.call(this);
        this.__selectionGroup.updateView();
    };

    Autocomplete.prototype._handleKeyup = function(event) {
        ui.FiltrationList.prototype._handleKeyup.call(this, event);
        this.clearSelection();
    };

    ui.Autocomplete = Autocomplete;
})();