/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-attribute.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl.unit");

    var Condition = function(rootTemplate) {
        tuna.tmpl.unit.Spot.call(this, rootTemplate);

        this.__action = null;
        this.__operator = null;
    };

    tuna.extend(Condition, tuna.tmpl.unit.Spot);

    Condition.prototype.setAction = function(action) {
        this.__action = action;
    };

    Condition.prototype.setOperator = function(operator) {
        this.__operator = operator;
    };
    
    Condition.prototype._applyValue = function(value) {
        var testResult = this.__operator.test(value);

        var i = this._nodes.length - 1;
        while (i >= 0) {
            this.__action.apply(this._nodes[i], testResult, value);
            i--;
        }
    };


    tuna.tmpl.unit.Condition = Condition;
})();