/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var YandexShareModule = function() {
    tuna.ui.Module.call(this, '.j-yandex-share');
};

tuna.utils.extend(YandexShareModule, tuna.ui.Module);

/**
 * @override
 */
YandexShareModule.prototype.initInstance = function(target) {
    target.innerHTML = '<div id="ya_share"></div>';

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://yandex.st/share/share.js';
    script.onload = function() {
        var shareInstance = new window['Ya']['share']({
            'element': 'ya_share',
            'elementStyle': {
                'type': 'none',
                'quickServices': ['facebook', 'lj', 'odnoklassniki', 'vkontakte', 'yaru']
            }
        });

        shareInstance['updateShareLink']('http://api.yandex.ru', 'API')
    };

    document.body.appendChild(script);

    return null;
};

tuna.ui.modules.register('yandex-share', new YandexShareModule());
