(function() {

    var Datepicker = function() {
        tuna.ui.modules.Module.call(this, 'datepicker', 'input.j-datepicker');
    };

    tuna.utils.extend(Datepicker, tuna.ui.modules.Module);

    Datepicker.prototype.initInstance = function(target) {
        var minTime = (new Date().getTime() + 3*24*60*60*1000);

        $(target).keydown(function(event){ event.preventDefault(); })
                 .datepicker({
                     'minDate': new Date(minTime)
                 });
    };

    tuna.ui.modules.register(new Datepicker());
    
})();