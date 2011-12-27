(function() {
    var Form = function() {
        tuna.ui.modules.Module.call(this, 'form', 'form.j-form');
    };

    tuna.extend(Form, tuna.ui.modules.Module);

    Form.prototype._initInstance = function(target) {
        return new ui.forms.Form(target);
    };

    tuna.ui.modules.register(new Form());

})();