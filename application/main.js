/**
 * @define {number}
 */
var APP_NETWORK = 0;

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
 * @param {!Node} body
 */
window['main'] = function(body) {
    tuna.utils.config.init(tuna.utils.urlDecode(location.search.substr(1)));
    tuna.dom.setSelectorEngine($.find);

    tuna.ui.addIsolator('j-control-container');
    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));
    tuna.ui.popups.registerAlert(tuna.dom.selectOne('#alert_popup'));

    tuna.control.init(body);

    if (APP_NETWORK === 2) {
        FAPI.init(
            tuna.utils.config.get('api_server'),
            tuna.utils.config.get('apiconnection'),
            function() {
                FAPI.Client.initialize();
            }
        );

        var args = tuna.utils.config.get('custom_args');
        if (args !== null && args.indexOf('ok_cake_url=') !== -1) {
            var url = args.split('ok_cake_url=').pop().split('&').shift();
            tuna.ui.popups.alert(
                '<img src="http://files.fotonatorte.ru/ok-image/' +
                    url + '" alt="Мой тортик!" />'
            )
        }
    }

    if (APP_NETWORK === 1) {
        VK.init();
    }
};