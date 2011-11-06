/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-spot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl.unit");

    var Spot = function(rootTemplate) {
        tuna.tmpl.unit.CompiledUnit.call(this, rootTemplate);

        this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();
        this._nodes = [];
    };

    tuna.extend(Spot, tuna.tmpl.unit.CompiledUnit);

    Spot.prototype.setPath = function(path) {
        this.__pathEvaluator.setPath(path);
    };

    Spot.prototype.addTargets = function(elements) {
        this._nodes = this._nodes.concat(elements);
    };

    Spot.prototype.applyData = function(dataNode) {
        this._applyValue(this.__pathEvaluator.apply(dataNode));
    };

    Spot.prototype._applyValue = function(value) {
        if (value === null) {
            value = '';
        }

        var html = value.toString();

        var i = this._nodes.length - 1;
        while (i >= 0) {
            if (this._nodes[i].innerHTML !== html) {
                this._nodes[i].innerHTML = html;
            }

            i--;
        }
    };

    tuna.tmpl.unit.Spot = Spot;
})();