(function() {
    tuna.namespace('tuna.ui.selection.items');

    var IItemsCollection = function() {};


    IItemsCollection.prototype.addItem = function(item) {};

    IItemsCollection.prototype.getItemIndex = function(item) {};

    IItemsCollection.prototype.getItemAt = function(index) {};

    IItemsCollection.prototype.clear = function() {};


    tuna.ui.selection.items.IItemsCollection = IItemsCollection;
})();