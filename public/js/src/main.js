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
rest.social = {};

/**
 * @namespace
 */
rest.social.vk = {};

/**
 * @namespace
 */
rest.social.vk.friends = {};

/**
 * @namespace
 */
rest.social.vk.users = {};

/**
 * @namespace
 */
rest.social.vk.wall = {};

/**
 * @namespace
 */
rest.social.ok = {};

/**
 * @namespace
 */
rest.social.ok.users = {};

/**
 * @namespace
 */
var ui = {};


/**
 * Точка входа в приложение
 *
 * @param {!Object} args
 */
function main(args) {
    tuna.utils.сonfig.init(args);

    tuna.dom.setSelectorEngine(jQuery.find);

    tuna.ui.popups.registerAlert(tuna.dom.selectOne('#alert_popup'));
    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));

    var container = new tuna.ui.containers.TransformContainer(document.body);
    container.init();
}