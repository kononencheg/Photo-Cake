(function() {
    tuna.namespace('tuna.ui.selection.items');

    var ElementsCollection = function() {
        this.__items = [];
    };

    tuna.implement(ElementsCollection, tuna.ui.selection.items.IItemsCollection);

    ElementsCollection.prototype.addItem = function(item) {
        return this.__items.push(item) - 1;
    };

    ElementsCollection.prototype.getItemIndex = function(item) {
        return tuna.indexOf(item, this.__items);
    };

    ElementsCollection.prototype.getItemAt = function(index) {
        return this.__items[index];
    };

    ElementsCollection.prototype.clear = function() {
        this.__items.length = 0;
    };


    tuna.ui.selection.items.ElementsCollection = ElementsCollection;
})();