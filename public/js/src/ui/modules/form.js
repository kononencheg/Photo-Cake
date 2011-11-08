(function() {
    var Form = function() {
        tuna.ui.modules.Module.call(this, 'form', '.j-form');
    };

    tuna.extend(Form, tuna.ui.modules.Module);

    Form.prototype._initItem = function(target) {
        var form = null;
        
        return form;
    };

    tuna.ui.modules.register(new Form());

})();