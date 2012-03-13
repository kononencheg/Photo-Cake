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
 *
 * @param {!Node} body
 */
window['main'] = function(body) {
    tuna.utils.config.init(tuna.net.decode(location.search.substr(1)));
    tuna.dom.setSelectorEngine($.find);

    tuna.ui.modules.addIsolator('j-module-container');
    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));
    tuna.ui.popups.registerAlert(tuna.dom.selectOne('#alert_popup'));

    tuna.view.init(body);

    // Fucking ok!
    var args = tuna.utils.config.get('custom_args');
    if (args !== null && args.indexOf('ok_cake_url=') !== -1) {
        var url = args.split('ok_cake_url=').pop().split('&').shift();
        tuna.ui.popups.alert(
            '<img src="http://files.fotonatorte.ru/ok-image/' +
                url + '" alt="Мой тортик!" />'
        )
    }
};