(function() {
    tuna.namespace('tuna.utils');

    var Notifier = function() {
        this._listeners = {};
    };

    tuna.implement(Notifier, tuna.utils.INotifier);

    Notifier.prototype.notify = function(type, notification) {
        var result = true;

        if (this._listeners[type]) {
            
            var i = this._listeners[type].length - 1;
            var listenData;
            var listenerResult;
            while (i >= 0) {
                listenData = this._listeners[type][i];
                listenerResult
                    = listenData[0].call(listenData[1], type, notification);

                if (listenerResult !== undefined) {
                    result = listenerResult;
                }

                i--;
            }
        }

        return result;
    };

    Notifier.prototype.subscribe = function(type, handler, scope) {
        var result = true;

        if (this._listeners[type] === undefined) {
            this._listeners[type] = [];
        }

        if (!this.hasSubscription(type, handler)) {
            this._listeners[type].push([handler, (scope !== undefined ? scope : window)]);
        } else {
            result = false;
        }

        return result;
    };

    Notifier.prototype.unsubscribe = function(type, handler) {
        var result = false;

        if (this._listeners[type] !== undefined) {
            var i = this._listeners[type].length - 1;

            while (i >= 0) {
                if (this._listeners[type][i][0] === handler) {
                    this._listeners[type].splice(i, 1);

                    result = true;
                    break;
                }

                i--;
            }
        }

        return result;
    };

    Notifier.prototype.hasSubscription = function(type, handler) {
        var result = false;

        if (this._listeners[type] !== undefined) {

            var i = this._listeners[type].length - 1;
            while (i >= 0) {
                if (this._listeners[type][i][0] === handler) {
                    result = true;

                    break;
                }

                i--;
            }
        }

        return result;
    };

    tuna.utils.Notifier = Notifier;
})();