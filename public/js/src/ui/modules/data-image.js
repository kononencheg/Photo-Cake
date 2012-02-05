(function() {

    var DataImage = function() {
        tuna.ui.Module.call(this, 'img.j-data-image');
    };

    tuna.utils.extend(DataImage, tuna.ui.Module);

    DataImage.prototype.initInstance = function(target, container, options) {
        return ui.DataImage.create(target);
    };

    tuna.ui.modules.register('data-image', new DataImage());
})();
