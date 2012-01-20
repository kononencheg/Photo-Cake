(function() {

    var Datepicker = function() {
        tuna.ui.modules.Module.call(this, 'datepicker', 'input.j-datepicker');
    };

    tuna.extend(Datepicker, tuna.ui.modules.Module);

    Datepicker.prototype._initInstance = function(target) {
        $(target).datepicker();
    };

    tuna.ui.modules.register(new Datepicker());
    
})();