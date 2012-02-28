/**
 * @extends {tuna.ui.Module}
 * @constructor
 */
var DataImageModule = function() {
    tuna.ui.Module.call(this, 'img.j-data-image');
};

tuna.utils.extend(DataImageModule, tuna.ui.Module);

/**
 * @override
 */
DataImageModule.prototype.initInstance = function(target) {
    return ui.DataImage.create(target);
};

tuna.ui.modules.register('data-image', new DataImageModule());
