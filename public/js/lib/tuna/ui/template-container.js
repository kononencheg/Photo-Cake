(function() {

    tuna.namespace('tuna.ui');

    var TemplateContainer = function(target, parent) {
        tuna.ui.DataContainer.call(this, target, parent);

        this.__dbPath = null;
        this.__transformer = null;

        this.__handleDataChange = tuna.bind(this.__handleDataChange, this);
    };

    tuna.extend(TemplateContainer, tuna.ui.DataContainer);

    TemplateContainer.prototype.setTransformer = function(transformer) {
        this.__transformer = transformer;
    };

    TemplateContainer.prototype.setDBPath = function(dataPath) {
        var db = this.getDB();

        if (db !== null) {
            db.unsubscribe(this.__dbPath, this.__handleDataChange);
        }

        this.__dbPath = dataPath;

        if (db !== null) {
            db.subscribe(this.__dbPath, this.__handleDataChange);
        }
    };

    TemplateContainer.prototype.__handleDataChange = function() {
        this.__applyTransform();
    };

    TemplateContainer.prototype.__applyTransform = function() {
        var db = this.getDB();
        if (this.__transformer !== null &&
            this.__dbPath !== null &&
            db !== null) {
            
            this.__transformer.applyTransform(db.get(this.__dbPath));
        }
    };

    tuna.ui.TemplateContainer = TemplateContainer;

})();