(function() {
    var Form = function() {
        tuna.ui.modules.Module.call(this, 'form', 'form.j-form');
    };

    tuna.utils.extend(Form, tuna.ui.modules.Module);

    Form.prototype.initInstance = function(target) {
        return new ui.forms.Form(target);
    };

    tuna.ui.modules.register(new Form());

})();