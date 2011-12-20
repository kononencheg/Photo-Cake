(function() {

    var DataImage = function() {
        tuna.ui.modules.Module.call(this, 'data-image', 'img.j-data-image');
    };

    tuna.extend(DataImage, tuna.ui.modules.Module);

    DataImage.prototype._initInstance = function(target, container, options) {
        return ui.DataImage.create(target);
    };

    tuna.ui.modules.register(new DataImage());
})();
