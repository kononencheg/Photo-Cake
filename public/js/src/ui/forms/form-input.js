(function() {

    var FormInput = function(target) {
        this.__target = target;
        this.__message = null;
        this.__defaultMessage = '';

        this.__init();
    };

    FormInput.prototype.__init = function() {
        var messages = tuna.dom.select('.j-message', this.__target);
        if (messages.length > 0) {
            this.__message = messages[0];
            this.__defaultMessage = this.__message.innerHTML;
        }
    };

    FormInput.prototype.showErrorMessage = function(message) {
        tuna.dom.addClass(this.__target, 'error');
        if (this.__message !== null) {
            this.__message.innerHTML = message;
        }
    };

    FormInput.prototype.cleanup = function() {
        tuna.dom.removeClass(this.__target, 'error');
        if (this.__message !== null) {
            this.__message.innerHTML = this.__defaultMessage;
        }
    };

    ui.forms.FormInput = FormInput;
})();