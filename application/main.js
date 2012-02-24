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
 */
function main() {
    tuna.utils.config.init(tuna.utils.decodeSearch(location.search));

    tuna.dom.setSelectorEngine(jQuery.find);

    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));

    tuna.view.init();
}