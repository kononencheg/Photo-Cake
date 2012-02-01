(function() {

    tuna.namespace('tuna.events');

    /**
     * @constructor
     * @param {string} type
     * @param {boolean=} isBubbling
     */
    tuna.events.Event = function(type, isBubbling) {
        this._target = null;

        this._type = type;

        this._isBubbling = false;

        this._isCanceled = false;
        this._isStopped = false;
        this._isImmediateStopped = false;

        if (isBubbling !== undefined) {
            this._isBubbling = isBubbling;
        }
    };

    tuna.events.Event.prototype.setTarget = function(target) {
        this._target = target;
    };

    tuna.events.Event.prototype.getTarget = function() {
        return this._target;
    };

    tuna.events.Event.prototype.getType = function() {
        return this._type;
    };

    tuna.events.Event.prototype.isBubbling = function() {
        return this._isBubbling;
    };

    tuna.events.Event.prototype.preventDefault = function() {
        this._isCanceled = true;
    };

    tuna.events.Event.prototype.isDefaultPrevented = function() {
        return this._isCanceled;
    };

    tuna.events.Event.prototype.stopImmediatePropagation = function() {
        this._isImmediateStopped = true;
    };

    tuna.events.Event.prototype.isImmediatePropagationStopped = function() {
         return this._isImmediateStopped;
    };

    tuna.events.Event.prototype.stopPropagation = function() {
        this._isStopped = true;
    };

    tuna.events.Event.prototype.isPropagationStopped = function() {
        return this._isImmediateStopped || this._isStopped;
    };
    
})();