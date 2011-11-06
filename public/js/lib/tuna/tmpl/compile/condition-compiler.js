(function() {

    tuna.namespace("tuna.tmpl.compile");

    var ConditionCompiler = function() {
        tuna.tmpl.compile.SpotCompiler.call(this);
    };

    tuna.extend(ConditionCompiler, tuna.tmpl.compile.SpotCompiler);

    ConditionCompiler.prototype._getItemsSettings = function(settings) {
        return settings.getConditions();
    };

    ConditionCompiler.prototype._createItem = function(rootTemplate) {
        return new tuna.tmpl.unit.Condition(rootTemplate);
    };

    ConditionCompiler.prototype._compileItem = function(element, settings, item) {
        tuna.tmpl.compile.SpotCompiler.prototype._compileItem.call
                                        (this, element, settings, item);

        item.setAction(settings.getAction());
        item.setOperator(settings.getOperator());
    };

    tuna.tmpl.compile.ConditionCompiler = ConditionCompiler;
})();