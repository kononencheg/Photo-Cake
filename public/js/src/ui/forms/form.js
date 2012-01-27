(function() {
    tuna.namespace('ui.forms');

    var Form = function(target) {
        tuna.events.EventDispatcher.call(this);

        this.__target = target;
        this.__formMessage = null;

        this._inputTable = {};

        this.__callbackInput = null;
        this.__callbackName = null;

        this.__resultParser = new ui.forms.FormResponseParser();

        this.__initFormMessage();
        this.__initCallbackInput();
        this.__initListeners();
    };

    Form.CALLBACK_PREFIX = 'form_callback';

    tuna.extend(Form, tuna.events.EventDispatcher);

    Form.prototype.setResultParser = function(parser) {
        this.__resultParser = parser;
    };

    Form.prototype.submit = function() {
        this.__prepareToSubmit();
        this.__target.submit();
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
        tuna.dom.addEventListener
            (this.__target, 'submit', tuna.bind(this.__prepareToSubmit, this));
    };

    Form.prototype.__prepareToSubmit = function(event) {
        if (this.dispatch('submit')) {
            this.__cleanup();
            this.__registerCallback();
        } else {
            tuna.dom.preventDefault(event);
        }
    };

    Form.prototype.__registerCallback = function() {
        var self = this;
        window[this.__callbackName] = function(response) {
            self.__handleResponse(response);
        };
    };

    Form.prototype.__handleResponse = function(response) {
        var result = this.__resultParser.parse(response);
        if (result === null) {
            var errors = this.__resultParser.getErrors();
            this.__showErrors(errors);

            this.dispatch('error', errors);
        } else {
            this.dispatch('result', result);
        }
    };

    Form.prototype.__cleanup = function() {
        this._clearMessage();
        this._clearInputs();
    };

    Form.prototype.__showErrors = function(errors) {
        var i = 0,
            l = errors.length;

        var error = null;
        while (i < l) {
            error = errors[i];
            if (error.param !== undefined) {
                this._showInputError(error.param, error.message);
            } else {
                this._showErrorMessage(error.message);
            }

            i++;
        }
    };

    Form.prototype._getFormInput = function(name) {
        var result = null;

        if (this._inputTable[name] === undefined) {
            var inputWrapper
                = tuna.dom.selectOne('.j-' + name + '-input', this.__target);

            if (inputWrapper !== null) {
                this._inputTable[name] = new ui.forms.FormInput(inputWrapper);
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
            this.__formMessage.innerHTML = '';
        }
    };

    Form.prototype._showErrorMessage = function(message) {
        this.__formMessage.innerHTML += message + '<br />';

        tuna.dom.addClass(this.__formMessage, 'error');
        tuna.dom.removeClass(this.__formMessage, 'hidden');
    };

    Form.prototype._showInputError = function(name, message) {
        var formInput = this._getFormInput(name);
        if (formInput !== null) {
            formInput.showErrorMessage(message);
        } else {
            this._showErrorMessage(message);
        }
    };

    Form.prototype._clearInputs = function() {
        for (var name in this._inputTable) {
            this._inputTable[name].cleanup();
        }
    };

    ui.forms.Form = Form;
})();