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

        this._db.set('view.selection_popup.current.image_url', 'http://placehold.it/100x100');
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

})();