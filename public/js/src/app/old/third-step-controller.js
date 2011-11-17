(function() {

    var ThirdStepController = function(id) {
        tuna.view.ViewController.call(this, id);

        this.__itemSelectionPopup = null;
    };

    tuna.extend(ThirdStepController, tuna.view.ViewController);

    ThirdStepController.prototype._requireModules = function() {
        this._container.requireModule('template-container');
        this._container.requireModule('swf');
    };

    ThirdStepController.prototype._initListeners = function() {
        var self = this;

        this.__itemSelectionPopup = ui.Popup.create($('#item_selection_popup').get(0));
        this.__itemSelectionPopup.subscribe('popup-apply', function(type, data) {
            self.__handlePopupData(data);
            self.__clearPopupData();
        });
        this.__itemSelectionPopup.subscribe('popup-close', function() {
            self.__clearPopupData();
        });
    };

    ThirdStepController.prototype.__handlePopupData = function(data) {
        switch (data.popup_type) {
            case 'images': {
                var photo = this.__getPhotoWithID(data.selection_id);

                

                break;
            }

            case 'presets': {

                break;
            }
        }
    };

    ThirdStepController.prototype.__clearPopupData = function() {
        this._db.unset('view.selection_popup.items');
        this._db.unset('view.selection_popup.type');
        this._db.unset('view.selection_popup.current');

        this._db.notify('view.selection_popup');
    };

    ThirdStepController.prototype.__getPhotoWithID = function(id) {
        var photoGallery = this._db.get('photo_gallery');

        for (var i in photoGallery) {
            if (photoGallery[i]._id.$id === id) {
                return photoGallery[i];
            }
        }
    };

    ThirdStepController.prototype.onFlashReady = function() {
        var cakeDesigner = swfobject.getObjectById('cake_designer');
        setTimeout(function() {
            cakeDesigner.initialize('round', 0.9);
        }, 0);
    };

    ThirdStepController.prototype.__loadPhotoGallery = function() {
        var self = this;

        var request = new tuna.net.Request(PHOTO_GALLERY_URL);
        request.subscribe('complete', function(type, response) {
            var data = JSON.parse(response);

            self._db.set('photo_gallery', data);

            if (self.__itemSelectionPopup.isOpen() &&
                self._db.get('view.selection_popup.type') === 'images') {

                self._db.set('view.selection_popup.items', data);
                self._db.notify('view.selection_popup');
            }
        });

        request.send();
    };

    ThirdStepController.prototype.openImageGallery = function() {
        var photoGalley = this._db.get('photo_gallery');
        if (photoGalley === undefined) {
            this.__loadPhotoGallery();
        } else {
            this._db.set('view.selection_popup.items', photoGalley);
            this._db.notify('view.selection_popup');
        }

        this._db.set('view.selection_popup.type', 'images');
        
        this.__itemSelectionPopup.open();
    };

    ThirdStepController.prototype.openCakePresets = function() {
        this.__itemSelectionPopup.open();

    };

    var controller = new ThirdStepController('third_step');

    // Flash callbacks

    onFlashReady = tuna.bind(controller.onFlashReady, controller);
    openImageGallery = tuna.bind(controller.openImageGallery, controller);
    openCakePresets = tuna.bind(controller.openCakePresets, controller);

    tuna.view.ViewController.registerController(controller);
})();