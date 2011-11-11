(function() {
    tuna.namespace('ui');

    var Form = function(target) {
        tuna.utils.Notifier.call(this);

        this.__target = target;
        this.__callbackInput = null;
        this.__callbackName = null;

        this.__initCallbackInput();
        this.__initListeners();
    };

    Form.CALLBACK_PREFIX = 'form_callback';

    tuna.extend(Form, tuna.utils.Notifier);

    Form.prototype.__initCallbackInput = function() {
        this.__callbackName = Form.CALLBACK_PREFIX +
                                String(Math.random()).substr(2);

        this.__callbackInput = document.createElement('input');
        this.__callbackInput.type = 'hidden';
        this.__callbackInput.name = '__callback';
        this.__callbackInput.value = this.__callbackName;

        this.__target.appendChild(this.__callbackInput);
    };

    Form.prototype.__registerCallback = function() {
        var self = this;
        window[this.__callbackName] = function(response) {
            self.__handleResponse(response);
        };
    };

    Form.prototype.__initListeners = function() {
        var self = this;
        tuna.dom.addEventListener(this.__target, 'submit', function(event) {
            self.__registerCallback();
        });
    };

    Form.prototype.__handleResponse = function(response) {
        debugger;
    };

    ui.Form = Form;
})();