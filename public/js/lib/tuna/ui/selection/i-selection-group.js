(function() {
    tuna.namespace('tuna.ui.selection');

    /**
     * @interface
     */
    tuna.ui.selection.ISelectionGroup = function() {};


    /**
     *
     * @return {Array.<number>}
     */
    tuna.ui.selection.ISelectionGroup.prototype.getSelectedIndexes
        = function() {};

    /**
     *
     * @param {number} index
     */
    tuna.ui.selection.ISelectionGroup.prototype.selectIndex
        = function(index) {};

    /**
     *
     * @param {number} index
     * @return {boolean}
     */
    tuna.ui.selection.ISelectionGroup.prototype.isSelected = function(index) {};

    /**
     *
     */
    tuna.ui.selection.ISelectionGroup.prototype.clearSelection = function() {};

    /**
     *
     * @param index
     * @param isEnabled
     */
    tuna.ui.selection.ISelectionGroup.prototype.setIndexEnabled
        = function(index, isEnabled) {};

    /**
     *
     * @param {number} index
     * @return {boolean}
     */
    tuna.ui.selection.ISelectionGroup.prototype.isIndexEnabled = function(index) {};


    /**
     *
     * @param {Object} item
     * @return {number}
     */
    tuna.ui.selection.ISelectionGroup.prototype.getItemIndex = function(item) {};

    /**
     *
     * @param {number} index
     * @return {Object}
     */
    tuna.ui.selection.ISelectionGroup.prototype.getItemAt = function(index) {};

    /**
     *
     * @param {function(number, Object)} callback
     */
    tuna.ui.selection.ISelectionGroup.prototype.mapItems = function(callback) {};


    /**
     *
     */
    tuna.ui.selection.ISelectionGroup.prototype.updateView = function() {};

})();