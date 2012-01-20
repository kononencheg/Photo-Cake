(function() {

    var DesignerController = function(id) {
        tuna.view.PageViewController.call(this, id);

        this.__movieID = null;
        this.__movie = null;
    };

    tuna.extend(DesignerController, tuna.view.StepViewController);

    var DECO_DATA = '{"weightsList":[1,1.5,2,2.5,3,3.5,4,4.5,5],"ratiosList":[0.6,0.55,0.5,0.45,0.4,0.38,0.32,0.3,0.25],"personsList":[6,10,15,20,25,30,35,40,45],"decoSelectors":[{"deco":[{"url":"/img/deco/cherry.png","autorotate":true,"name":"cherry","description":"Вишня"},{"url":"/img/deco/grape.png","autorotate":true,"name":"grape","description":"Виноград"},{"url":"/img/deco/kiwi.png","autorotate":true,"name":"kiwi","description":"Киви"},{"url":"/img/deco/raspberry.png","autorotate":true,"name":"raspberry","description":"Малина"},{"url":"/img/deco/strawberry.png","autorotate":true,"name":"strawberry","description":"Клубника"},{"url":"/img/deco/orange.png","autorotate":true,"name":"orange","description":"Апельсин"},{"url":"/img/deco/peach.png","autorotate":true,"name":"peach","description":"Персик"},{"url":"/img/deco/lemon.png","autorotate":true,"name":"lemon","description":"Лимон"}]},{"deco":[{"url":"/img/deco/pig1.png","autorotate":false,"name":"pig1","description":"Сахарная фигурка"},{"url":"/img/deco/car1.png","autorotate":false,"name":"car1","description":"Сахарная фигурка"},{"url":"/img/deco/hare1.png","autorotate":false,"name":"hare1","description":"Сахарная фигурка"},{"url":"/img/deco/hedgehog1.png","autorotate":false,"name":"hedgehog1","description":"Сахарная фигурка"},{"url":"/img/deco/moose1.png","autorotate":false,"name":"moose1","description":"Сахарная фигурка"},{"url":"/img/deco/owl1.png","autorotate":false,"name":"owl1","description":"Сахарная фигурка"},{"url":"/img/deco/pin1.png","autorotate":false,"name":"pin1","description":"Сахарная фигурка"},{"url":"/img/deco/sheep1.png","autorotate":false,"name":"sheep1","description":"Сахарная фигурка"},{"url":"/img/deco/raven1.png","autorotate":false,"name":"raven1","description":"Сахарная фигурка"},{"url":"/img/deco/bear1.png","autorotate":false,"name":"bear1","description":"Сахарная фигурка"},{"url":"/img/deco/car2.png","autorotate":false,"name":"car2","description":"Сахарная фигурка"},{"url":"/img/deco/car3.png","autorotate":false,"name":"car3","description":"Сахарная фигурка"},{"url":"/img/deco/mat1.png","autorotate":false,"name":"mat1","description":"Сахарная фигурка"},{"url":"/img/deco/doll1.png","autorotate":false,"name":"doll1","description":"Сахарная фигурка"},{"url":"/img/deco/doll2.png","autorotate":false,"name":"doll2","description":"Сахарная фигурка"}]},{"deco":[{"url":"/img/deco/flower1.png","autorotate":false,"name":"flower1","description":"Сахарная фигурка"},{"url":"/img/deco/flower2.png","autorotate":false,"name":"flower2","description":"Сахарная фигурка"},{"url":"/img/deco/flower3.png","autorotate":false,"name":"flower3","description":"Сахарная фигурка"},{"url":"/img/deco/flower4.png","autorotate":false,"name":"flower4","description":"Сахарная фигурка"},{"url":"/img/deco/flower5.png","autorotate":false,"name":"flower5","description":"Сахарная фигурка"},{"url":"/img/deco/flower6.png","autorotate":false,"name":"flower6","description":"Сахарная фигурка"}]}]}';

    DesignerController.prototype._requireModules = function() {
       this._container.requireModule('data-image');
       this._container.requireModule('swf', {
           'width': 650,
           'height': 630,
           'params': {
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

    DesignerController.prototype.onFlashReady = function() {
        this.__movie = swfobject.getObjectById(this.__movieID);
        this.__movie.initialize(DECO_DATA, 'round', 1);
    };

    DesignerController.prototype.confirmShapeChange = function(shape) {
        if (confirm('При изменении формы торта, все оформление будет утеряно!')) {
            this.__movie.changeShape(shape);
        }
    };

    DesignerController.prototype.canClose = function() {
        return this.__movie !== null;
    };

    DesignerController.prototype.close = function() {
        var data = this.__movie.getCakeData();
        var cake = model.cakes.saveCurrentCake
            (data.shift(), data.shift(), data.shift());

        var cakeDataImage = this._container.getOneModuleInstance('data-image');
        cakeDataImage.setData(cake.image_base64);
    };

    var controller = new DesignerController('designer_step');

    onFlashReady = tuna.bind(controller.onFlashReady, controller);
    confirmShapeChange = tuna.bind(controller.confirmShapeChange, controller);

    tuna.view.registerController(controller);
})();
