(function() {
    
    tuna.namespace('tuna.events');

    /**
     * Event dispatcher interface.
     *
     * @interface
     */
    tuna.events.IEventDispatcher = function() {};

    /**
     *
     * @param {!string|!tuna.events.Event} event
     * @param {*=} data
     * @return {boolean}
     */
    tuna.events.IEventDispatcher.prototype.dispatch = function(event, data) {};

    /**
     *
     * @param {!string} type
     * @param {!Function} listener
     */
    tuna.events.IEventDispatcher.prototype.addEventListener
        = function(type, listener) {};

    /**
     *
     * @param {!string} type
     * @param {!Function} listener
     */
    tuna.events.IEventDispatcher.prototype.removeEventListener
        = function(type, listener) {};

    /**
     *
     * @param {!string} type
     * @param {!Function} listener
     * @return {boolean}
     */
    tuna.events.IEventDispatcher.prototype.hasEventListener
        = function(type, listener) {};

})();