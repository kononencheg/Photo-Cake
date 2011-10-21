(function() {

    var container = null;

    var controller = new tuna.control.ViewController('third_step');

    controller.subscribe('prepare', function(type, targetContainer) {
        container = targetContainer;
        container.addModule('swf');
    });

    controller.subscribe('init', function(type, element) {
        container.initModules();
    });

    controller.wait();
    
})();