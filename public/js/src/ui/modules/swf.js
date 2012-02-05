(function() {

    var SWF = function() {
        tuna.ui.Module.call(this, '.j-swf');
    };

    tuna.utils.extend(SWF, tuna.ui.Module);

    SWF.ID_PREFIX = "movie_";

    SWF.prototype.initInstance = function(target, container, options) {
        var flashvars = null;
        var params = null;
        var width = null;
        var height = null;

        if (target.id === null) {
            target.id = SWF.ID_PREFIX + String(Math.random()).substr(2);
        }

        if (options !== undefined) {
            flashvars = options.flashvars || null;
            params = options.params || null;

            width = options.width === undefined ? '100%' : options.width;
            height = options.height === undefined ? '100%' : options.height;
        }


        swfobject.embedSWF(
            target.getAttribute('data-movie-url'),
            target.id, width, height, '10.0.0', null,
            flashvars, params
        );

        return target.id;
    };

    tuna.ui.modules.register('swf', new SWF());
})();
