(function() {

    var SWF = function() {
        tuna.ui.modules.Module.call(this, 'swf', '.j-swf');
    };

    tuna.extend(SWF, tuna.ui.modules.Module);

    SWF.prototype._initInstance = function(target) {
        target.id = target.id || Math.random();

        swfobject.embedSWF(
            target.getAttribute('data-movie-url'),
            target.id, '100%', '100%', '10.0.0', null, null, {
                wmode: 'opaque'
            }
        );

        return target.id;
    };

    tuna.ui.modules.register(new SWF());
})();
