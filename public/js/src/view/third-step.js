(function() {

    var ThirdStepController = function(id) {
        tuna.control.ViewController.call(this, id);

        this.__itemSelectionPopup = null;
    };

    tuna.extend(ThirdStepController, tuna.control.ViewController);

    ThirdStepController.prototype._requireModules = function() {
        this._container.requireModule('template-container');
        this._container.requireModule('swf');
    };

    ThirdStepController.prototype._initListeners = function() {
        this.__itemSelectionPopup = ui.Popup.create($('#item_selection_popup').get(0));

    };

    ThirdStepController.prototype._initData = function() {

    };

    ThirdStepController.prototype.onFlashReady = function() {
        var cakeDesigner = swfobject.getObjectById('cake_designer');
        setTimeout(function() {
            cakeDesigner.initialize('round', 0.9);
        }, 1000);
    };

    ThirdStepController.prototype.openImageGallery = function() {
        this.__itemSelectionPopup.open();

        this._db.set('view.selection_popup.items', [
            {}, {}, {}, {}, {}, {}, {}, {}
        ]);

        this._db.notify('view.selection_popup');
    };

    ThirdStepController.prototype.openCakePresets = function() {
        this.__itemSelectionPopup.open();

    };

    var controller = new ThirdStepController('third_step');

    // Flash callbacks

    onFlashReady = tuna.bind(controller.onFlashReady, controller);
    openImageGallery = tuna.bind(controller.openImageGallery, controller);
    openCakePresets = tuna.bind(controller.openCakePresets, controller);


    tuna.control.ViewController.registerController(controller);

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

    SelectionListController.prototype.handleCreatedElements = function(elements) {
        debugger;
        this.__itemSelector.update();
    };

    SelectionListController.prototype.handleRemovedElement = function(element) {
        this.__itemSelector.update();
    };

    tuna.control.ViewController.registerController(new SelectionListController('item_selection_popup'));

})();