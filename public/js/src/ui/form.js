(function() {
    tuna.namespace('ui');

    var Form = function(target) {
        tuna.events.EventDispatcher.call(this);

        this.__target = target;
        this.__formMessage = null;

        this._inputTable = {};

        this.__callbackInput = null;
        this.__callbackName = null;

        this.__resultParser = null;

        this.__initFormMessage();
        this.__initCallbackInput();
        this.__initListeners();
    };

    Form.CALLBACK_PREFIX = 'form_callback';

    tuna.extend(Form, tuna.events.EventDispatcher);

    Form.prototype.setResultParser = function(parser) {
        this.__resultParser = parser;
    };

    Form.prototype.__initFormMessage = function() {
        var messages = tuna.dom.select('.j-form-message', this.__target);
        if (messages.length > 0) {
            this.__formMessage = messages[0];
        }
    };

    Form.prototype.__initCallbackInput = function() {
        this.__callbackName = Form.CALLBACK_PREFIX +
                                String(Math.random()).substr(2);

        this.__callbackInput = document.createElement('input');
        this.__callbackInput.type = 'hidden';
        this.__callbackInput.name = '__callback';
        this.__callbackInput.value = this.__callbackName;

        this.__target.appendChild(this.__callbackInput);
    };

    Form.prototype.__initListeners = function() {
        var self = this;
        tuna.dom.addEventListener(this.__target, 'submit', function(event) {
            self.__cleanup();
            self.__registerCallback();
        });
    };

    Form.prototype.__registerCallback = function() {
        var self = this;
        window[this.__callbackName] = function(response) {
            self.__handleResponse(response);
        };
    };

    Form.prototype.__handleResponse = function(response) {
        if (this.__resultParser !== null) {

            var result = this.__resultParser.parse(response);
            if (result === null) {
                var error = this.__resultParser.getLastError();
                this.__showErrors(error);

                this.notify('error', error);
            } else {
                this.notify('result', result);
            }

        } else {
            this.notify('result', response);
        }
    };

    Form.prototype.__cleanup = function() {
        this._clearMessage();
        this._clearInputs();
    };

    Form.prototype.__showErrors = function(errors) {
        if (typeof errors === 'string') {
            this._showErrorMessage(errors);
        } else {
            for (var name in errors) {
                this._showInputError(name, errors[name]);
            }
        }
    };

    Form.prototype._getFormInput = function(name) {
        var result = null;

        if (this._inputTable[name] === undefined) {
            var inputWrappers = tuna.dom.select('.j-' + name + '-input', this.__target);
            if (inputWrappers.length > 0) {
                this._inputTable[name] = new FormInput(inputWrappers[0]);
            }
        }

        if (this._inputTable[name] !== undefined) {
            result = this._inputTable[name];
        }

        return result;
    };

    Form.prototype._clearMessage = function(message) {
        if (this.__formMessage !== null) {
            tuna.dom.removeClass(this.__formMessage, 'error');
            tuna.dom.addClass(this.__formMessage, 'hidden');
        }
    };

    Form.prototype._showErrorMessage = function(message) {
        this.__formMessage.innerHTML = message;

        tuna.dom.addClass(this.__formMessage, 'error');
        tuna.dom.removeClass(this.__formMessage, 'hidden');
    };

    Form.prototype._showInputError = function(name, message) {
        var formInput = this._getFormInput(name);
        if (formInput !== null) {
            formInput.showErrorMessage(message);
        }
    };

    Form.prototype._clearInputs = function() {
        for (var name in this._inputTable) {
            this._inputTable[name].cleanup();
        }
    };

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

    ui.Form = Form;
})();