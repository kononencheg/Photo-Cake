/**
 * @extends {tuna.view.PageViewController}
 * @constructor
 */
var DesignerController = function() {
    tuna.view.PageViewController.call(this);

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
    this._modules = [ 'data-image', 'swf' ];
};

tuna.utils.extend(DesignerController, tuna.view.PageViewController);

/**
 * @type {Array}
 */
var DECO_SELECTORS = [
    { "deco": [
        { "url" : "/img/deco/cherry.png", "autorotate":true, "name" : "cherry", "description" : "Вишня" },
        { "url" : "/img/deco/grape.png", "autorotate":true, "name" : "grape", "description" : "Виноград" },
        { "url" : "/img/deco/kiwi.png", "autorotate":true, "name" : "kiwi", "description" : "Киви" },
        { "url" : "/img/deco/raspberry.png", "autorotate":true, "name" : "raspberry", "description" : "Малина" },
        { "url" : "/img/deco/strawberry.png", "autorotate":true, "name" : "strawberry", "description" : "Клубника" },
        { "url" : "/img/deco/orange.png", "autorotate":true, "name" : "orange", "description" : "Апельсин" },
        { "url" : "/img/deco/blueberry.png", "autorotate":true, "name" : "blueberry", "description" : "Черника" },
        { "url" : "/img/deco/currant.png", "autorotate":true, "name" : "currant", "description" : "Смородина" },
        { "url" : "/img/deco/peach.png", "autorotate":true, "name" : "peach", "description" : "Персик" },
        { "url" : "/img/deco/lemon.png", "autorotate":true, "name" : "lemon", "description" : "Лимон" },
        { "url" : "/img/deco/physalis.png", "autorotate":false, "name" : "physalis", "description" : "Физалис" }
    ]},
    { "deco": [
        { "url" : "/img/deco/pig1.png", "autorotate":false, "name" : "pig1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/car1.png", "autorotate":false, "name" : "car1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/hare1.png", "autorotate":false, "name" : "hare1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/hedgehog1.png", "autorotate":false, "name" : "hedgehog1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/moose1.png", "autorotate":false, "name" : "moose1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/owl1.png", "autorotate":false, "name" : "owl1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/pin1.png", "autorotate":false, "name" : "pin1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/sheep1.png", "autorotate":false, "name" : "sheep1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/raven1.png", "autorotate":false, "name" : "raven1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/bear1.png", "autorotate":false, "name" : "bear1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/car2.png", "autorotate":false, "name" : "car2", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/car3.png", "autorotate":false, "name" : "car3", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/mat1.png", "autorotate":false, "name" : "mat1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/ladybug.png", "autorotate":false, "name" : "ladybug", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/tiger.png", "autorotate":false, "name" : "tiger", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/winnie.png", "autorotate":false, "name" : "winnie", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/winnie1.png", "autorotate":false, "name" : "winnie1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/rabbit.png", "autorotate":false, "name" : "rabbit", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/ia.png", "autorotate":false, "name" : "ia", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/doll1.png", "autorotate":false, "name" : "doll1", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/doll2.png", "autorotate":false, "name" : "doll2", "description" : "Сахарная фигурка"},
        { "url" : "/img/deco/bootes.png", "autorotate":false, "name" : "bootes", "description" : "Сахарная фигурка"}
    ]},
    { "deco": [
        { "url" : "/img/deco/flower1.png", "autorotate": false, "name" : "flower1", "description" : "Сахарная фигурка" },
        { "url" : "/img/deco/flower2.png", "autorotate": false, "name" : "flower2", "description" : "Сахарная фигурка" },
        { "url" : "/img/deco/flower3.png", "autorotate": false, "name" : "flower3", "description" : "Сахарная фигурка" },
        { "url" : "/img/deco/flower4.png", "autorotate": false, "name" : "flower4", "description" : "Сахарная фигурка" },
        { "url" : "/img/deco/flower5.png", "autorotate": false, "name" : "flower5", "description" : "Сахарная фигурка" },
        { "url" : "/img/deco/flower6.png", "autorotate": false, "name" : "flower6", "description" : "Сахарная фигурка" }
    ]}
];

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
};


/**
 * @override
 */
DesignerController.prototype.open = function(data) {
    model.currentBakery.addEventListener('update', this.__handleBakeryUpdate);
    this.__handleBakeryUpdate();

    var cake = model.cakes.getItemById(data['cake-id']);
    if (cake !== null) {
        if (this.__movie === null) {
            this.__cakePreset = cake.markup;
        } else {
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
    var weightsList = [];
    var ratiosList  = [];
    var personsList = [];

    model.dimensions.each(function(dimension) {
        tuna.utils.indexOf(dimension.weight, weightsList) === -1 &&
            weightsList.push(dimension.weight);

        tuna.utils.indexOf(dimension.ratio, ratiosList) === -1 &&
            ratiosList.push(dimension.ratio);

        tuna.utils.indexOf(dimension.personsCount, personsList) === -1 &&
            personsList.push(dimension.personsCount);
    });

    if (ratiosList.length > 0) {
        this.__movie['initialize'](JSON.stringify({
            'weightsList': weightsList,
            'ratiosList': ratiosList,
            'personsList': personsList,
            'decoSelectors': DECO_SELECTORS
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
            tuna.rest.call('cakes.add', data, function(cake) {
                model.currentCake.set(cake);
            }, 'cake');
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

tuna.view.registerController('designer_step', controller);