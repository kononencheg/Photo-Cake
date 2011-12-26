(function() {

    tuna.namespace('tuna.ui.selection');

    var SelectionGroup = function(parent) {
        tuna.events.EventDispatcher.call(this, parent);

        this._itemsCollection = null;

        this._selectionView = null;
        this._selectionRule = null;

        this._disabledIndexes = [];
    };

    tuna.implement(SelectionGroup, tuna.ui.selection.ISelectionGroup);
    tuna.extend(SelectionGroup, tuna.events.EventDispatcher);

    SelectionGroup.prototype.init = function(rule) {
        this._selectionRule.setSelectionGroup(this);
        this._selectionRule.setEventDispatcher(this);
        this._selectionRule.setSelectionView(this._selectionView);

        this._selectionView.setSelectionGroup(this);
        this._selectionView.setItemsCollection(this._itemsCollection);

        this._selectionView.update();
    };

    SelectionGroup.prototype.setSelectionRule = function(rule) {
        this._selectionRule = rule;
    };

    SelectionGroup.prototype.setSelectionView = function(view) {
        this._selectionView = view;
    };

    SelectionGroup.prototype.setItemsCollection = function(collection) {
        this._itemsCollection = collection;
    };

    SelectionGroup.prototype.setIndexEnabled
        = function(index, isEnabled) {

        var indexPosition = tuna.indexOf(index, this._disabledIndexes);
        if (isEnabled) {
            if (indexPosition !== -1) {
                this._selectionView.enableItemAt(index);
                this._disabledIndexes.splice(indexPosition, 1);
            }
        } else if (indexPosition === -1) {
            this._selectionView.disableItemAt([index]);
            this._disabledIndexes.push(index);
        }
    };

    SelectionGroup.prototype.isIndexEnabled = function(index) {
        return tuna.indexOf(index, this._disabledIndexes) === -1;
    };

    SelectionGroup.prototype.updateView = function() {
        this._selectionView.update();
    };

    SelectionGroup.prototype.getItemIndex = function(item) {
        return this._itemsCollection.getItemIndex(item);
    };

    SelectionGroup.prototype.getItemAt = function(index) {
        return this._itemsCollection.getItemAt(index);
    };

    SelectionGroup.prototype.getSelectedIndexes = function() {
        return this._selectionRule.getSelectedIndexes();
    };

    SelectionGroup.prototype.getLastSelectedIndex = function() {
        return this._selectionRule.getSelectedIndexes().pop();
    };

    SelectionGroup.prototype.selectIndex = function(index) {
        this._selectionRule.selectIndex(index);
    };

    SelectionGroup.prototype.isSelected = function(index) {
        return this._selectionRule.isSelected(index);
    };

    SelectionGroup.prototype.clearSelection = function() {
        this._selectionRule.clearSelection();
    };


    tuna.ui.selection.SelectionGroup = SelectionGroup;
})();