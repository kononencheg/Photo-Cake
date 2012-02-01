(function() {
    tuna.namespace('tuna.events');

    /**
     * Диспетчер событий
     *
     * @constructor
     * @implements {tuna.events.IEventDispatcher}
     * @param {tuna.events.EventDispatcher=} parent
     */
    tuna.events.EventDispatcher = function(parent) {
        /**
         * @type tuna.events.EventDispatcher
         * @protected
         */
        this._propagationParent = null;

        this._listeners = {};

        if (parent !== undefined) {
            this._propagationParent = parent;
        }
    };

    tuna.implement(tuna.events.EventDispatcher, tuna.events.IEventDispatcher);

    /**
     * @inheritDoc
     */
    tuna.events.EventDispatcher.prototype.dispatch = function(event, data) {
        if (!(event instanceof tuna.events.Event)) {
            event = new tuna.events.Event(event);
        }

        var type = event.getType();

        if (this._listeners[type] !== undefined) {
            if (event.target === null) {
                event.target = this;
            }

            var i = 0,
                l = this._listeners[type].length;

            while (i < l) {
                this._listeners[type][i].call(this, event, data);

                if (event.isImmediatePropagationStopped()) {
                    break;
                }

                i++;
            }

            if (this._propagationParent !== null &&
                event.isBubbling() && !event.isPropagationStopped()) {

                this._propagationParent.dispatch(event);
            }
        }

        return !event.isDefaultPrevented();
    };

    tuna.events.EventDispatcher.prototype.addEventListener
        = function(type, listener) {

        if (this._listeners[type] === undefined) {
            this._listeners[type] = [listener];
        } else if (!this.hasEventListener(type, listener)) {
            this._listeners[type].push(listener);
        }
    };

    tuna.events.EventDispatcher.prototype.removeEventListener
        = function(type, listener) {

        if (this._listeners[type] !== undefined) {
            var listenerIndex = tuna.indexOf(listener, this._listeners[type]);

            if (listenerIndex !== -1) {
                this._listeners[type].splice(listenerIndex, 1);
            }
        }
    };

    tuna.events.EventDispatcher.prototype.hasEventListener
        = function(type, listener) {

        if (this._listeners[type] !== undefined) {
            return tuna.indexOf(listener, this._listeners[type]) !== -1;
        }

        return false;
    };

})();