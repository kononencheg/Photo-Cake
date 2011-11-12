(function() {
    var SelectionListController = function(id) {
        tuna.control.ViewController.call(this, id);

        this.__itemSelector = null;

        this.__$currentItem = null;
        this.__$itemList = null;
    };

    tuna.extend(SelectionListController, tuna.control.ViewController);

    SelectionListController.prototype._requireModules = function() {
        this._container.requireModule('item-selector');
    };

    SelectionListController.prototype._initListeners = function() {
        var self = this;

        this.__$currentItem = $(this._target).find('.j-current-item');
        this.__$itemList = $(this._target).find('.j-item-selector');

        tuna.dom.addOneEventListener(
            this.__$itemList.get(0), 'ui-item-selector-init',
            function(event) {
                self.__itemSelector = event.data;
            }
        );

        tuna.dom.addEventListener(
            this.__$itemList.get(0), 'ui-select',
            function(event) {
                var index = self.__itemSelector.getCurrentIndex();

                var item = self._db.get('view.selection_popup.items.' + index);

                self._db.set('view.selection_popup.current', item);
                self._db.notify('view.selection_popup');

                self.__$currentItem.show()
            }
        );
    };

    SelectionListController.prototype.handleTransformComplete = function(target, created, removed) {
        if (created.length > 0 || removed.length > 0) {
            this.__itemSelector.update();

            if (this.__itemSelector.getCurrentIndex() === -1) {
                this.__$currentItem.hide();
            }
        }
    };

    tuna.control.ViewController.registerController(new SelectionListController('item_selection_popup'));

})();