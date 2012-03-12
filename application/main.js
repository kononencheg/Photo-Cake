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
window['main'] = function() {
    tuna.utils.config.init(tuna.utils.decodeSearch(location.search));

    tuna.dom.setSelectorEngine($.find);

    var confirmElement = tuna.dom.selectOne('#confirm_popup');
    if (confirmElement !== null) {
        tuna.ui.popups.registerConfirm(confirmElement);
    }

    var alertElement = tuna.dom.selectOne('#alert_popup');
    if (alertElement !== null) {
        tuna.ui.popups.registerAlert(alertElement);
    }

    tuna.view.init();

    var args = tuna.utils.config.get('custom_args');
    if (args !== null && args.indexOf('ok_cake_url=') !== -1) {
        var url = args.split('ok_cake_url=').pop().split('&').shift();
        tuna.ui.popups.alert(
            '<img src="http://files.fotonatorte.ru/ok-image/' +
                url + '" alt="Мой тортик!" />'
        )
    }
};