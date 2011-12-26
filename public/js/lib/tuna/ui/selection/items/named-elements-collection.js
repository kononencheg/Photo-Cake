(function() {
    tuna.namespace('tuna.ui.selection.items');

    var NamedElementsCollection = function(indexAttribute) {
        this.__indexAttribute = 'id';
        this.__items = {};

        if (indexAttribute !== undefined) {
            this.__indexAttribute = indexAttribute;
        }
    };

    tuna.implement(NamedElementsCollection, tuna.ui.selection.items.IItemsCollection);

    NamedElementsCollection.prototype.addItem = function(item) {
        var index = item.getAttribute(this.__indexAttribute);
        if (index !== null) {
            this.__items[index] = item;
        }

        return index;
    };

    NamedElementsCollection.prototype.getItemIndex = function(item) {
        var index = item.getAttribute(this.__indexAttribute);
        if (index !== null && this.__items[index] !== undefined) {
            return index;
        }

        return null;
    };

    NamedElementsCollection.prototype.getItemAt = function(index) {
        return this.__items[index];
    };

    NamedElementsCollection.prototype.clear = function() {
        this.__items = {};
    };


    tuna.ui.selection.items.NamedElementsCollection = NamedElementsCollection;
})();