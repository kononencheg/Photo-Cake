/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var CakeBeforeAfterModule = function() {
    tuna.ui.Module.call(this, '.j-cake-before-after');
};

tuna.utils.extend(CakeBeforeAfterModule, tuna.ui.Module);

/**
 * @override
 */
CakeBeforeAfterModule.prototype.initInstance = function(target) {
    var popupTarget = tuna.dom.selectOne('#before_after_popup');
    if (popupTarget !== null) {

        var popup = tuna.ui.popups.create(popupTarget);
        var beforeImage = tuna.dom.selectOne('img.j-before', popup.getTarget());
        var afterImage = tuna.dom.selectOne('img.j-after', popup.getTarget());

        var controls = new tuna.ui.buttons.ButtonGroup(target);
        controls.setDefaultAction('show');
        controls.addEventListener('show', function(event, button) {
            beforeImage.src = button.getStringOption('before');
            afterImage.src = button.getStringOption('after');

            popup.open();
        });

        controls.init();
    }

    return null;
};

tuna.ui.registerModule('cake-before-after', new CakeBeforeAfterModule());
