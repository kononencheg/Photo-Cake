(function() {

    tuna.namespace('tuna.tmpl.compile');

    var IItemCompiler = function() {};

    IItemCompiler.prototype.compile
        = function(element, templateSettings, template) {};

    tuna.tmpl.compile.IItemCompiler = IItemCompiler;
})();