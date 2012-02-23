(function() {

    var Datepicker = function() {
        tuna.ui.Module.call(this, 'input.j-datepicker');
    };

    tuna.utils.extend(Datepicker, tuna.ui.Module);

    Datepicker.prototype.initInstance = function(target) {
        var minTime = (new Date().getTime() + 3*24*60*60*1000);

        $(target).keydown(function(event){ event.preventDefault(); })
                 .datepicker({
                     'minDate': new Date(minTime)
                 });

        return target;
    };

    tuna.ui.modules.register('datepicker', new Datepicker());
    
})();