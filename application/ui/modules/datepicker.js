/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var DatepickerModule = function() {
    tuna.ui.Module.call(this, 'input.j-datepicker');
};

tuna.utils.extend(DatepickerModule, tuna.ui.Module);

/**
 * @override
 */
DatepickerModule.prototype.initInstance = function(target) {
    $(target).keydown(function(event){ event.preventDefault(); })
             .datepicker({
                 'minDate': new Date((new Date().getTime() + 3*24*60*60*1000))
             });

    return null;
};

tuna.ui.modules.register('datepicker', new DatepickerModule());
