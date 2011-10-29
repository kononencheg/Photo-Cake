(function() {

    tuna.namespace('tuna.ui');

    var TemplateContainer = function(target, parent) {
        tuna.ui.DataContainer.call(this, target, parent);

        this.__templateCompiler = null;

        this.__template = null;
        this.__transformer = null;

        this.__dbPath = null;

        this.__handleDataChange = tuna.bind(this.__handleDataChange, this);
    };

    tuna.extend(TemplateContainer, tuna.ui.DataContainer);

    TemplateContainer.prototype.setTemplateCompiler = function(compiler) {
        this.__templateCompiler = compiler;
    };

    TemplateContainer.prototype.setTemplate = function(template) {
        this.__template = template;
    };

    TemplateContainer.prototype.render = function(element) {
        tuna.ui.Container.prototype.render.call(this, element);

        this.__transformer = this.__templateCompiler.makeTransformer
                                (this.__template, this._target);
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

    TemplateContainer.prototype.setChildHandler = function(childHandler) {
        if (this.__transformer) {
            this.__transformer.setChildHandler(childHandler);
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