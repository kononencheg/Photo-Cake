(function() {

    var SWF = function() {
        tuna.ui.modules.Module.call(this, 'swf', '.j-swf');
    };

    tuna.extend(SWF, tuna.ui.modules.Module);

    SWF.ID_PREFIX = "movie_";

    SWF.prototype._initInstance = function(target, container, options) {
        var flashvars = null;
        var params = null;

        if (target.id === null) {
            target.id = SWF.ID_PREFIX + String(Math.random()).substr(2);
        }

        if (options !== undefined) {
            flashvars = options.flashvars || null;
            params = options.params || null;
        }


        swfobject.embedSWF(
            target.getAttribute('data-movie-url'),
            target.id, '100%', '100%', '10.0.0', null,
            flashvars, params
        );

        return target.id;
    };

    tuna.ui.modules.register(new SWF());
})();
