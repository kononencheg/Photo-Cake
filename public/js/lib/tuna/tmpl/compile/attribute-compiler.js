(function() {

    tuna.namespace('tuna.tmpl.compile');

    var AttributeCompiler = function() {
        tuna.tmpl.compile.SpotCompiler.call(this);
    };

    tuna.extend(AttributeCompiler, tuna.tmpl.compile.SpotCompiler);


    AttributeCompiler.prototype._getItemsSettings = function(settings) {
        return settings.getAttributes();
    };

    AttributeCompiler.prototype._createItem = function(rootTemplate) {
        return new tuna.tmpl.unit.Attribute(rootTemplate);
    };

    AttributeCompiler.prototype._compileItem = function(element, settings, item) {
        tuna.tmpl.compile.SpotCompiler.prototype._compileItem.call
                                        (this, element, settings, item);

        item.setAttributeName(settings.getAttributeName());
        item.setEvent(settings.hasEvent());
    };
    
    tuna.tmpl.compile.AttributeCompiler = AttributeCompiler;
    
})();