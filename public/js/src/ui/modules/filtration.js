(function() {
    var Filtration = function() {
        tuna.ui.Module.call(this, '.j-filtration');

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler
            = new tuna.tmpl.compilers.TemplateCompiler(document);
    };

    tuna.utils.extend(Filtration, tuna.ui.Module);

    Filtration.prototype.initInstance = function(target) {
        var transformer = this._initTransformer(target);
        var input = tuna.dom.selectOne('.j-filtration-input', target);

        var filtration
            = new ui.Filtration(input, transformer);

        filtration.init();

        return filtration;
    };

    Filtration.prototype._initTransformer = function(target) {
        var templateId  = target.getAttribute('data-template-id');
        var settings = this.__templateBuilder.buildSettings(templateId);

        return this.__templateCompiler.makeTransformer(settings, target);
    };

    tuna.ui.modules.register('filtration', new Filtration());

})();