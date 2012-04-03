/**
 * @extends tuna.control.PageViewController
 * @constructor
 */
var DesignerController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @type {function()}
     * @private
     */
    this.__handleBakeryUpdate = tuna.utils.bind(this.__handleBakeryUpdate, this);

    /**
     * @private
     * @type tuna.ui.ModuleInstance|tuna.ui.flash.SWF
     */
    this.__designerSWF = null;

    /**
     * @private
     * @type ?tuna.ui.ModuleInstance|ui.DataImage
     */
    this.__cakeImage = null;

    /**
     * @type HTMLObjectElement
     * @private
     */
    this.__movie = null;

    /**
     * @type ?string
     * @private
     */
    this.__cakePreset = null;

    /**
     * @override
     */
    this._modules = [ 'data-image', 'swf', 'popup-button', 'inner-html' ];
};

tuna.utils.extend(DesignerController, tuna.control.PageViewController);

/**
 * @override
 */
DesignerController.prototype._initActions = function() {
    var self = this;

    this.__designerSWF = this._container.getModuleInstanceByName
        ('swf', 'cake-designer');

    model.dimensions.addEventListener('update', function() {
        self.__designerSWF.reset();
    });

    var offerPopupButton = this._container.getModuleInstanceByName
        ('popup-button', 'offer');
    var offerPopup = offerPopupButton.getPopup();

    var offerHtml = this._container.getModuleInstanceByName
        ('inner-html', 'offer');

    var listener = function() {
        offerHtml.load();
        offerPopup.removeEventListener('open', listener);
    };

    offerPopup.addEventListener('open', listener);
};


/**
 * @override
 */
DesignerController.prototype.open = function(data) {
    model.currentBakery.addEventListener('update', this.__handleBakeryUpdate);
    this.__handleBakeryUpdate();

    var cake = model.cakes.getItemById(data['cake-id']);
    if (cake !== null) {
        this.__cakePreset = cake.markup;

        if (this.__movie !== null) {
            this.__movie['loadCakePreset'](cake.markup)
        }
    } else {
        this.__cakePreset = null;
    }
};

/**
 * @override
 */
DesignerController.prototype.close = function() {
    model.currentBakery.removeEventListener
        ('update', this.__handleBakeryUpdate);
};

/**
 * @private
 */
DesignerController.prototype.__handleBakeryUpdate = function() {
    var bakery = model.currentBakery.get();
    if (bakery !== null) {
        model.dimensions.load({ 'bakery_id': bakery.id });
    }
};

/**
 * @private
 */
DesignerController.prototype.__initDesigner = function() {
    var bakery = model.currentBakery.get();

    var weightsList = [];
    var ratiosList  = [];
    var personsList = [];

    model.dimensions.each(function(dimension) {
        if (tuna.utils.indexOf(dimension.weight, weightsList) === -1) {
            weightsList.push(dimension.weight);
            ratiosList.push(dimension.ratio);
            personsList.push(dimension.personsCount);
        }
    });

    var decoSelectors = [];
    model.decorations.each(function(decoration) {
        if (bakery.decorationPrices[decoration.id] !== undefined) {
            if (decoSelectors[decoration.group] === undefined) {
                decoSelectors[decoration.group] = [];
            }

            decoSelectors[decoration.group].push(decoration.serialize());
        }
    });

    if (APP_NETWORK !== 0) {
        decoSelectors.splice(1, 1);
    }

    if (weightsList.length > 0) {
        this.__movie['initialize'](JSON.stringify({
            'weightsList': weightsList,
            'ratiosList': ratiosList,
            'personsList': personsList,
            'decoSelectors': decoSelectors
        }), 'round', ratiosList[0]);
    }
};

/**
 *
 * @param {string} shape
 */
DesignerController.prototype.confirmShapeChange = function(shape) {
    var self = this;

    var weight = this.__movie['getCakeWeight']();
    var dimensions = model.dimensions.find(function(dimension) {
        return dimension.weight === weight &&
               dimension.shape === shape;
    });

    if (dimensions.length > 0) {
        tuna.ui.popups.confirm(
            'При изменении формы торта, все оформление будет утеряно!',
            function(result) {
                result && self.__movie['changeShape'](shape);
            }
        );
    } else {
        tuna.ui.popups.alert('Данная форма недоступна для выбранного веса!');
    }
};

/**
 *
 */
DesignerController.prototype.onDecoElementsLoaded = function() {
    if (this.__cakePreset !== null) {
        this.__movie['loadCakePreset'](this.__cakePreset);
    }
};

/**
 *
 */
DesignerController.prototype.onFlashReady = function() {
    this.__movie = this.__designerSWF.getMovie();
    this.__initDesigner();
};

/**
 * @override
 */
DesignerController.prototype.canClose = function(nextStep) {
    if (this.__movie !== null) {
        var data = this.__movie['getCakeData']();

        if (nextStep === 'order') {
            var dimension = model.dimensions.findOne(function(dimension) {
                return dimension.weight === data['weight'] &&
                       dimension.shape === data['shape'];
            });

            if (dimension !== null) {
                data['dimension_id'] = dimension.id;
                tuna.rest.call('cakes.add', data, function(cake) {
                    model.currentCake.set(cake);
                }, 'cake');
            }

        }

        if (this.__cakeImage === null) {
            this.__cakeImage = this._container.getModuleInstanceByName
                ('data-image', 'cake-image');
        }

        this.__cakeImage.setData(data['image']);

        return true;
    }

    return false;
};

/**
 * @type {DesignerController}
 */
var controller = new DesignerController();

window['onFlashReady'] = tuna.utils.bind(controller.onFlashReady, controller);
window['confirmShapeChange'] = tuna.utils.bind(controller.confirmShapeChange, controller);
window['openMessageBox'] = tuna.ui.popups.alert;
window['onDecoElementsLoaded'] = tuna.utils.bind(controller.onDecoElementsLoaded, controller);

tuna.control.registerController('designer_step', controller);