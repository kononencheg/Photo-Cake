/**
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 * @constructor
 */
ui.InnerHtml = function(target) {
    tuna.ui.ModuleInstance.call(this, target);
};

tuna.utils.extend(ui.InnerHtml, tuna.ui.ModuleInstance);

/**
 *
 */
ui.InnerHtml.prototype.load = function() {
    var url = this.getStringOption('html-url');

    if (url !== null) {
        var self = this;
        var request = new tuna.net.Request(url);
        request.addEventListener('complete', function(event, html) {
            self._target.innerHTML = html;
        });

        request.send();
    }
};