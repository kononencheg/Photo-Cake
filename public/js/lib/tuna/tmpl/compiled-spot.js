/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-spot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

	tuna.namespace("tuna.tmpl");

    var CompiledSpot = function(rootTemplate) {
        tuna.tmpl.__CompiledUnit.call(this, rootTemplate);

        this.__pathEvaluator = new tuna.tmpl.PathEvaluator();
        this.__nodes = [];
    };

    tuna.extend(CompiledSpot, tuna.tmpl.__CompiledUnit);

    CompiledSpot.prototype.setPath = function(path) {
        this.__pathEvaluator.setPath(path);
    };

    CompiledSpot.prototype.applyData = function(dataNode) {
        var sampleNode = this.__pathEvaluator.evaluate(dataNode);
        if (sampleNode !== undefined) {
            var value = sampleNode.getValue();
            if (value !== null) {
                this._applyValue(value);
            }
        }
    };

    CompiledSpot.prototype.addTargets = function(elements) {
        this.__nodes = this.__nodes.concat(elements);
    };

    CompiledSpot.prototype._applyValue = function(value) {
        var html = value.toString();

        var i = this.__nodes.length - 1;
        while (i >= 0) {
            if (this.__nodes[i].innerHTML !== html) {
                this.__nodes[i].innerHTML = html;
            }

            i--;
        }
    };

    tuna.tmpl.__CompiledSpot = CompiledSpot;
})();