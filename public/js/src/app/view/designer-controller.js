(function() {

    var DesignerController = function(id) {
        tuna.view.ViewController.call(this, id);

        this.__movieID = null;
    };

    tuna.extend(DesignerController, tuna.view.ViewController);

    DesignerController.prototype._bootstrap = function() {
        this.init();
    };

    DesignerController.prototype._requireModules = function() {
        this._container.requireModule('swf');
    };

    DesignerController.prototype._initActions = function() {
        this.__movieID = this._container.getOneModuleInstance('swf');

    };

    DesignerController.prototype.onFlashReady = function() {
        var cakeDesigner = swfobject.getObjectById(this.__movieID);
        setTimeout(function() {
            cakeDesigner.initialize('round', 0.9);
        }, 0);
    };

    var controller = new DesignerController('designer_step');

    onFlashReady = tuna.bind(controller.onFlashReady, controller);

    tuna.view.registerController(controller);
    /*
                <param name="menu" value="false" />
                <param name="wmode" value="direct" />
                <param name="flashvars" value="variable1=a&variable2=b" />
                <param name="allowfullscreen" value="false" />
                <param name="allowscriptaccess" value="sameDomain" />
     */
})();
