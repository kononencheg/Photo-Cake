(function() {
    var SelectionListController = function(id) {
        tuna.control.ViewController.call(this, id);

        this.__itemSelector = null;
    };

    tuna.extend(SelectionListController, tuna.control.ViewController);

    SelectionListController.prototype._requireModules = function() {
        this._container.requireModule('item-selector');
    };

    SelectionListController.prototype._initListeners = function() {
        var self = this;

        var $currentItem = $(this._target).find('.j-current-item');
        var $itemList = $(this._target).find('.j-item-selector');

        tuna.dom.addEventListener($itemList[0], 'ui-item-selector-init', function(event) {
            self.__itemSelector = event.data;
        });

        tuna.dom.addEventListener($itemList[0], 'ui-select', function(event) {
            var size = Math.round(100 * Math.random()) +  100;

            self._db.set('view.selection_popup.current.image_url', 'http://placehold.it/' + size + 'x' + size);
            self._db.notify('view.selection_popup');

            $currentItem.show()
        });
    };

    SelectionListController.prototype._initData = function() {

    };

    SelectionListController.prototype.handleTransformComplete = function(target, created, removed) {
        if (created.length > 0 || removed.length > 0) {
            this.__itemSelector.update();
        }
    };

    tuna.control.ViewController.registerController(new SelectionListController('item_selection_popup'));

})();