/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var VKShareModule = function() {
    tuna.ui.Module.call(this, '.j-vk-share');
};

tuna.utils.extend(VKShareModule, tuna.ui.Module);

/**
 * @override
 */
VKShareModule.prototype.initInstance = function(target) {
    target.id = 'vk_groups';

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://userapi.com/js/api/openapi.js';
    script.onload = function() {
        window['VK']['Widgets']['Group'](target.id, {
            'mode': 0, 'width': "200", 'height': "290"
        },32850256);
    };

    document.body.appendChild(script);

    return null;
};

tuna.ui.modules.register('vk-share', new VKShareModule());
