/**
 * @namespace
 */
var model = {};

/**
 * @namespace
 */
model.records = {};

/**
 * @namespace
 */
var rest = {};

/**
 * @namespace
 */
var ui = {};

/**
 * @namespace
 */
ui.forms = {};

/**
 * Точка входа в приложение
 *
 * @param {!Object} args
 */
function main(args) {
    tuna.utils.сonfig.init(args);

    tuna.dom.setSelectorEngine(jQuery.find);

    ui.Popup.registerAlertElement(tuna.dom.selectOne('#alert_popup'));
    ui.Popup.registerConfirmElement(tuna.dom.selectOne('#confirm_popup'));

    var container = new tuna.ui.container.TransformContainer(document.body);
    container.init();
}