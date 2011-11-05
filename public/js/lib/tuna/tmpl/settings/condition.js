/**
 * TUNA FRAMEWORK
 * 
 * @file attribute.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl.settings");

    var Condition = function() {
        tuna.tmpl.settings.Spot.call(this);

        this.__operator = null;
        this.__action = null
    };

    Condition.IS_SET = 'isset';
    Condition.EQUALS = 'eq';
    Condition.NOT_EQUALS = 'ne';

    Condition.CLASS = 'class';

    tuna.extend(Condition, tuna.tmpl.settings.Spot);

    Condition.prototype.setOperator = function(type, data) {
        this.__operator = this.__createOperator(type);
        this.__operator.setData(data);
    };

    Condition.prototype.__createOperator = function(type) {
        switch (type) {
            case Condition.IS_SET: return new IsSetOperator();
            case Condition.EQUALS: return new EqualsOperator();
            case Condition.NOT_EQUALS: return new NotEqualsOperator();
        }

        return null;
    };

    Condition.prototype.getOperator = function() {
        return this.__operator;
    };

    Condition.prototype.setAction = function(name, data) {
        this.__action = new ClassAction(data);
    };

    Condition.prototype.getAction = function() {
        return this.__action;
    };

    tuna.tmpl.settings.Condition = Condition;

    // Operators

    var ConditionOperator = function() { this._data = null; };
    ConditionOperator.prototype.setData = function(data) { this._data = data };
    ConditionOperator.prototype.test = function(value) {};

    var IsSetOperator = function() { ConditionOperator.call(this); };
    tuna.extend(IsSetOperator, ConditionOperator);
    IsSetOperator.prototype.test = function(value) { return value !== undefined; };

    var EqualsOperator = function() { ConditionOperator.call(this); };
    tuna.extend(EqualsOperator, ConditionOperator);
    EqualsOperator.prototype.test = function(value) { return value == this._data; };

    var NotEqualsOperator = function() { ConditionOperator.call(this); };
    tuna.extend(NotEqualsOperator, ConditionOperator);
    NotEqualsOperator.prototype.test = function(value) { return !(value == this._data || String(value) == this._data); };

    // Actions

    var ConditionAction = function(data) { this._data = data; };
    ConditionAction.prototype.apply = function(node, testResult, value) {};

    var ClassAction = function(data) {
        ConditionAction.call(this, data);

        this.__lastClassName = null;
    };

    tuna.extend(ClassAction, ConditionAction);

    ClassAction.prototype.apply = function(node, testResult, value) {
        var className = this._data;

        if (className !== '') {
            if (testResult) {
                tuna.dom.addClass(node, className);
            } else {
                tuna.dom.removeClass(node, className);
            }
            
        } else if (this.__lastClassName !== value && testResult) {
            if (this.__lastClassName !== null) {
                tuna.dom.removeClass(node, this.__lastClassName);
            }

            tuna.dom.addClass(node, value);

            this.__lastClassName = value;
        }

    };

})();