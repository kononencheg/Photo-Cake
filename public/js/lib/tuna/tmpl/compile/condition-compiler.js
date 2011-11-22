(function() {

    tuna.namespace('tuna.tmpl.compile');

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

        var action = this.__createAction
            (settings.getActionType(), settings.getActionData());

        item.setAction(action);

        var operator = this.__createOperator
            (settings.getOperatorType(), settings.getOperatorData());

        item.setOperator(operator);
    };

    ConditionCompiler.prototype.__createAction = function(type, data) {
        switch (type) {
            case 'class': return new ClassAction(data);
        }

        return null;
    };

    ConditionCompiler.prototype.__createOperator = function(type, data) {
        switch (type) {
            case 'isset': return new IsSetOperator();
            case 'eq': return new EqualsOperator(data);
            case 'ne': return new NotEqualsOperator(data);
        }

        return null;
    };

    tuna.tmpl.compile.ConditionCompiler = ConditionCompiler;

    ///////////////////////////////////////////////////////////////////////////
    //
    //  Operators
    //
    ///////////////////////////////////////////////////////////////////////////

    var ConditionOperator = function(data) {
        this._data = data;
    };

    ConditionOperator.prototype.test = function(value) {};


    var IsSetOperator = function() {
        ConditionOperator.call(this);
    };

    tuna.extend(IsSetOperator, ConditionOperator);

    IsSetOperator.prototype.test = function(value) {
        return value !== undefined;
    };


    var EqualsOperator = function(data) {
        ConditionOperator.call(this, data);
    };

    tuna.extend(EqualsOperator, ConditionOperator);

    EqualsOperator.prototype.test = function(value) {
        return value == this._data || String(value) == this._data;
    };


    var NotEqualsOperator = function(data) {
        ConditionOperator.call(this, data);
    };

    tuna.extend(NotEqualsOperator, ConditionOperator);

    NotEqualsOperator.prototype.test = function(value) {
        return !(value == this._data || String(value) == this._data);
    };

    ///////////////////////////////////////////////////////////////////////////
    //
    //  Actions
    //
    ///////////////////////////////////////////////////////////////////////////

    var ConditionAction = function(data) {
        this._data = data;
    };

    ConditionAction.prototype.apply = function(node, testResult, value) {};


    var ClassAction = function(data) {
        ConditionAction.call(this, data);

        this.__lastName = null;
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

        } else if (this.__lastName !== value && testResult) {
            if (this.__lastName !== null) {
                tuna.dom.removeClass(node, this.__lastName);
            }

            tuna.dom.addClass(node, value);

            this.__lastName = value;
        }

    };

})();