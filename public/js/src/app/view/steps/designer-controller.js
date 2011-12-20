(function() {

    var DesignerController = function(id) {
        tuna.view.StepViewController.call(this, id);

        this.__movieID = null;
        this.__movie = null;
    };

    tuna.extend(DesignerController, tuna.view.StepViewController);

    var DECO_DATA = '{"weightsList":[1,1.5,2,2.5,3,3.5,4,4.5,5],"ratiosList":[0.6,0.55,0.5,0.45,0.4,0.38,0.32,0.3,0.25],"personsList":[6,10,15,20,25,30,35,40,45],"decoSelectors":[{"deco":[{"url":"/img/app/deco/cherry.png","autorotate":true,"name":"cherry","description":"Вишня"},{"url":"/img/app/deco/grape.png","autorotate":true,"name":"grape","description":"Виноград"},{"url":"/img/app/deco/kiwi.png","autorotate":true,"name":"kiwi","description":"Киви"},{"url":"/img/app/deco/raspberry.png","autorotate":true,"name":"raspberry","description":"Малина"},{"url":"/img/app/deco/strawberry.png","autorotate":true,"name":"strawberry","description":"Клубника"},{"url":"/img/app/deco/orange.png","autorotate":true,"name":"orange","description":"Апельсин"},{"url":"/img/app/deco/peach.png","autorotate":true,"name":"peach","description":"Персик"},{"url":"/img/app/deco/lemon.png","autorotate":true,"name":"lemon","description":"Лимон"}]},{"deco":[{"url":"/img/app/deco/pig1.png","autorotate":false,"name":"pig1","description":"Сахарная фигурка"},{"url":"/img/app/deco/car1.png","autorotate":false,"name":"car1","description":"Сахарная фигурка"},{"url":"/img/app/deco/hare1.png","autorotate":false,"name":"hare1","description":"Сахарная фигурка"},{"url":"/img/app/deco/hedgehog1.png","autorotate":false,"name":"hedgehog1","description":"Сахарная фигурка"},{"url":"/img/app/deco/moose1.png","autorotate":false,"name":"moose1","description":"Сахарная фигурка"},{"url":"/img/app/deco/owl1.png","autorotate":false,"name":"owl1","description":"Сахарная фигурка"},{"url":"/img/app/deco/pin1.png","autorotate":false,"name":"pin1","description":"Сахарная фигурка"},{"url":"/img/app/deco/sheep1.png","autorotate":false,"name":"sheep1","description":"Сахарная фигурка"},{"url":"/img/app/deco/raven1.png","autorotate":false,"name":"raven1","description":"Сахарная фигурка"},{"url":"/img/app/deco/bear1.png","autorotate":false,"name":"bear1","description":"Сахарная фигурка"},{"url":"/img/app/deco/car2.png","autorotate":false,"name":"car2","description":"Сахарная фигурка"},{"url":"/img/app/deco/car3.png","autorotate":false,"name":"car3","description":"Сахарная фигурка"},{"url":"/img/app/deco/mat1.png","autorotate":false,"name":"mat1","description":"Сахарная фигурка"},{"url":"/img/app/deco/doll1.png","autorotate":false,"name":"doll1","description":"Сахарная фигурка"},{"url":"/img/app/deco/doll2.png","autorotate":false,"name":"doll2","description":"Сахарная фигурка"}]},{"deco":[{"url":"/img/app/deco/flower1.png","autorotate":false,"name":"flower1","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower2.png","autorotate":false,"name":"flower2","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower3.png","autorotate":false,"name":"flower3","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower4.png","autorotate":false,"name":"flower4","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower5.png","autorotate":false,"name":"flower5","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower6.png","autorotate":false,"name":"flower6","description":"Сахарная фигурка"}]}]}';

    DesignerController.prototype._bootstrap = function() {
        this.init();
    };

    DesignerController.prototype._requireModules = function() {
       this._container.requireModule('swf', {
            params: {
                'wmode': 'direct',
                'allowfullscreen': false,
                'allowscriptaccess': 'always',
                'menu': false
            }
        });
    };

    DesignerController.prototype._initActions = function() {
        this.__movieID = this._container.getOneModuleInstance('swf');
    };

    DesignerController.prototype.canGoPrev = function() {
        return false;
    };

    DesignerController.prototype.canClose = function() {
        return this.__movie !== null;
    };

    DesignerController.prototype.saveCakeData = function() {
        var cakeData = this.__movie.getCakeData();
        if (cakeData !== null) {
            this._db.set('cake_params', JSON.parse(cakeData.shift()));
            this._db.set('cake_image', cakeData.shift());
        }
    };

    DesignerController.prototype.onFlashReady = function() {
        this.__movie = swfobject.getObjectById(this.__movieID);
        this.__movie.initialize(DECO_DATA, 'round', 0.25);
    };



    var controller = new DesignerController('designer_step');

    onFlashReady = tuna.bind(controller.onFlashReady, controller);

    tuna.view.registerController(controller);
})();
