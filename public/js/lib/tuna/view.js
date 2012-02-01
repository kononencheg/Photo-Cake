/**
 * TUNA FRAMEWORK
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace('tuna.view');

    var idTable = {};

    var mainController = null;

    tuna.view.setMainController = function(controller) {
        mainController = controller;
    };

    tuna.view.registerController = function(controller) {
        idTable[controller.getTargetID()] = controller;
    };

    /**
     *
     * @param {Element} target
     * @return {tuna.view.ViewController}
     */
    tuna.view.getController = function(target) {
        if (target === document.body) {
            return mainController;
        } else if (idTable[target.id] !== undefined) {
            return idTable[target.id];
        }

        return null;
    };

})();