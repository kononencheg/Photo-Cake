(function() {

    tuna.namespace('tuna.ui.selection');

    /**
     * @constructor
     * @extends {tuna.events.EventDispatcher}
     * @implements {tuna.ui.selection.ISelectionGroup}
     */
    tuna.ui.selection.AbstractSelectionGroup = function() {
        tuna.events.EventDispatcher.call(this, null);

        this._itemsCollection = null;

        this._selectionView = null;
        this._selectionRule = null;

        this._disabledIndexes = [];
    };

    tuna.implement(tuna.ui.selection.AbstractSelectionGroup,
                   tuna.ui.selection.ISelectionGroup);

    tuna.extend(tuna.ui.selection.AbstractSelectionGroup,
                tuna.events.EventDispatcher);

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.setIndexEnabled
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

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.isIndexEnabled
        = function(index) {

        return tuna.indexOf(index, this._disabledIndexes) === -1;
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.updateView
        = function() {

        this._selectionView.update();
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.getItemIndex
        = function(item) {

        return this._itemsCollection.getItemIndex(item);
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.getItemAt
        = function(index) {

        return this._itemsCollection.getItemAt(index);
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.mapItems
        = function(callback) {

        this._itemsCollection.mapItems(callback);
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.getSelectedIndexes
        = function() {

        return this._selectionRule.getSelectedIndexes();
    };

    /**
     * @return {number}
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.getLastSelectedIndex
        = function() {

        var indexes = this._selectionRule.getSelectedIndexes();
        if (indexes.length > 0) {
            return indexes.pop();
        }

        return -1;
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.selectIndex
        = function(index) {

        this._selectionRule.selectIndex(index);
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.isSelected
        = function(index) {

        return this._selectionRule.isSelected(index);
    };

    /**
     * @inheritDoc
     */
    tuna.ui.selection.AbstractSelectionGroup.prototype.clearSelection
        = function() {

        this._selectionRule.clearSelection();
    };

})();