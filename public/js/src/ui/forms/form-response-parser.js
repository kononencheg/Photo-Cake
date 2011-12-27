(function() {
    tuna.namespace('ui.forms');

    var FormResponseParser = function() {
        this.__errors = null;
    };

    tuna.implement(FormResponseParser, tuna.rest.IResponseParser)

    FormResponseParser.prototype.parse = function(data) {
        if (data.response !== undefined) {
            return data.response;
        } else if (data.errors !== undefined) {
            this.__errors = data.errors;
            return null;
        }

    };

    FormResponseParser.prototype.getErrors = function() {
        return this.__errors;
    };

    ui.forms.FormResponseParser = FormResponseParser;

})();