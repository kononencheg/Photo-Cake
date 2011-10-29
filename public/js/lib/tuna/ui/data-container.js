(function() {

    tuna.namespace('tuna.ui');

    var DataContainer = function(target, parent) {
        tuna.ui.Container.call(this, target, parent);

        this.__db = null;
    };

    tuna.extend(DataContainer, tuna.ui.Container);

    DataContainer.prototype.setDB = function(db) {
        this.__db = db;
    };

    DataContainer.prototype.getDB = function() {
        if (this.__db === null) {
            return this._parent.getDB();
        } else {
            return this.__db;
        }
    };

    tuna.ui.DataContainer = DataContainer;

})();