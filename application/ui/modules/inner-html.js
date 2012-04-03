/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var InnerHtmlModule = function() {
    tuna.ui.Module.call(this, '.j-inner-html');
};

tuna.utils.extend(InnerHtmlModule, tuna.ui.Module);

/**
 * @override
 */
InnerHtmlModule.prototype.initInstance = function(target) {
    return new ui.InnerHtml(target);
};

tuna.ui.registerModule('inner-html', new InnerHtmlModule());
