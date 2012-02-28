(function() {

    var DesignerController = function() {
        tuna.view.PageViewController.call(this);

        /**
         * @private
         * @type tuna.ui.flash.SWF
         */
        this.__designerSWF = null;

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__weightsList = [];

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__ratioList =[];

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__personsList = [];

        /**
         *
         * @type boolean
         * @private
         */
        this.__isDesignerReady = false;

        /**
         *
         * @type boolean
         * @private
         */
        this.__isDimensionsLoaded = false;

        /**
         *
         * @type HTMLObjectElement
         * @private
         */
        this.__movie = null;

        /**
         *
         * @type ?string
         * @private
         */
        this.__cakePreset = null;
    };

    tuna.utils.extend(DesignerController, tuna.view.PageViewController);

    var DECO_SELECTORS =
    [
        { "deco": [
            { "url" : "/img/deco/cherry.png", "autorotate":true, "name" : "cherry", "description" : "Вишня"},
            { "url" : "/img/deco/grape.png", "autorotate":true, "name" : "grape", "description" : "Виноград"},
            { "url" : "/img/deco/kiwi.png", "autorotate":true, "name" : "kiwi", "description" : "Киви"},
            { "url" : "/img/deco/raspberry.png", "autorotate":true, "name" : "raspberry", "description" : "Малина"},
            { "url" : "/img/deco/strawberry.png", "autorotate":true, "name" : "strawberry", "description" : "Клубника"},
            { "url" : "/img/deco/orange.png", "autorotate":true, "name" : "orange", "description" : "Апельсин"},
            { "url" : "/img/deco/blueberry.png", "autorotate":true, "name" : "blueberry", "description" : "Черника"},
            { "url" : "/img/deco/currant.png", "autorotate":true, "name" : "currant", "description" : "Смородина"},
            { "url" : "/img/deco/peach.png", "autorotate":true, "name" : "peach", "description" : "Персик"},
            { "url" : "/img/deco/lemon.png", "autorotate":true, "name" : "lemon", "description" : "Лимон"},
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
            { "url" : "/img/deco/flower1.png", "autorotate":false, "name" : "flower1", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower2.png", "autorotate":false, "name" : "flower2", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower3.png", "autorotate":false, "name" : "flower3", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower4.png", "autorotate":false, "name" : "flower4", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower5.png", "autorotate":false, "name" : "flower5", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower6.png", "autorotate":false, "name" : "flower6", "description" : "Сахарная фигурка" }
        ]}
    ];

    DesignerController.prototype._requireModules = function() {
       this._container.requireModule('data-image');
       this._container.requireModule('swf');
    };

    DesignerController.prototype._initActions = function() {
        this.__designerSWF = this._container.getOneModuleInstance('swf');

        var self = this;
        tuna.rest.call('dimensions.get', null, function(result) {
            var i = 0,
                l = result.length;

            var dimension = null;
            while (i < l) {
                dimension = result[i];
                if (dimension.shape === 'round') {
                    self.__weightsList.push(dimension.weight);
                    self.__ratioList.push(dimension.ratio);
                    self.__personsList.push(dimension.persons_count);
                }

                i++;
            }

            self .__isDimensionsLoaded = true;
            if (self.__isDesignerReady) {
                self.__initDesigner();
            }
        });
    };

    DesignerController.prototype.onFlashReady = function() {
        this.__isDesignerReady = true;
        if (this.__isDimensionsLoaded) {
            this.__initDesigner();
        }
    };

    DesignerController.prototype.__initDesigner = function() {
        this.__movie = this.__designerSWF.getMovie();

        this.__movie.initialize(JSON.stringify({
            'weightsList': this.__weightsList,
            'ratiosList': this.__ratioList,
            'personsList': this.__personsList,
            'decoSelectors': DECO_SELECTORS
        }), 'round', 0.6);

        if (this.__cakePreset !== null) {
            var self = this;
            setTimeout(function() {
                self.__movie.loadCakePreset(self.__cakePreset);
            }, 1000);
        }
    };

    DesignerController.prototype.confirmShapeChange = function(shape) {
        var self = this;

        tuna.ui.popups.confirm(
            'При изменении формы торта, все оформление будет утеряно!',
            function(result) {
                if (result) {
                    self.__movie.changeShape(shape);
                }
            }
        );
    };

    DesignerController.prototype.canClose = function() {
        return this.__movie !== null;
    };

    DesignerController.prototype.open = function(cake) {
        if (cake !== null && cake.markup !== undefined) {
            if (this.__movie === null) {
                this.__cakePreset = cake.markup;
            } else {
                this.__movie.loadCakePreset(cake.markup)
            }
        } else {
            this.__cakePreset = null;
        }
    };

    DesignerController.prototype.close = function() {
        var data = this.__movie.getCakeData();

        var cake = model.cakes.createCake
            (data.shift(), data.shift(), data.shift());

        var cakeDataImage = this._container.getOneModuleInstance('data-image');
        cakeDataImage.setData(cake.imageBase64);

        model.cakes.setCurrentCake(cake);
    };

    var controller = new DesignerController();

    window.onFlashReady = tuna.utils.bind(controller.onFlashReady, controller);
    window.confirmShapeChange = tuna.utils.bind(controller.confirmShapeChange, controller);
    window.openMessageBox = tuna.ui.popups.alert;

    tuna.view.registerController('designer_step', controller);
})();