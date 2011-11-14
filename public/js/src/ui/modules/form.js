(function() {
    var Form = function() {
        tuna.ui.modules.Module.call(this, 'form', 'form.j-form');
    };

    tuna.extend(Form, tuna.ui.modules.Module);

    Form.prototype._initInstance = function(target) {
        var form = new ui.Form(target);
        
        return form;
    };

    tuna.ui.modules.register(new Form());

})();