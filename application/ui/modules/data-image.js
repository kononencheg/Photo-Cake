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
    return ui.createDataImage(target);
};

tuna.ui.registerModule('data-image', new DataImageModule());
