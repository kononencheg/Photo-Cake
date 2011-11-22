(function() {

    tuna.namespace('tuna.tmpl.markup');

    var IMarkupExtractor = function() {};

    IMarkupExtractor.prototype.extract = function(element, template) {};

    tuna.tmpl.markup.IMarkupExtractor = IMarkupExtractor;
})();