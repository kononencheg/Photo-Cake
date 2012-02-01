(function() {
    tuna.namespace('tuna.net');

    /**
     * @constructor
     * @extends {tuna.events.EventDispatcher}
     * @implements {tuna.net.IRequest}
     * @param {string=} url
     */
    tuna.net.Request = function(url) {
        tuna.events.EventDispatcher.call(this);

        this.__url = url;

        this.isSync = false;

        this.method = 'GET';

        this.headers = [];

        this.__data = null;

        this.__response = {};

        this.__request = null;
    };

    tuna.implement(tuna.net.Request, tuna.net.IRequest);
    tuna.extend(tuna.net.Request, tuna.events.EventDispatcher);

    tuna.net.Request.prototype.setData = function(data) {
        this.__data = data;
    };

    tuna.net.Request.prototype.setURL = function(url) {
        this.__url = url;
    };

    tuna.net.Request.prototype.__requestStateHandler = function(request) {
        if (request.readyState === 4) {
            this.__response = request.responseText;

            this.dispatch('complete', this.__response);

            request.abort();
        }
    };

    tuna.net.Request.prototype.send = function() {
        var requestURL = this.__url;

        if (this.__request !== null) {
            this.__request.abort();
        }

        //Инициализируем запрос.
        var request = !tuna.IS_IE ?
                        new XMLHttpRequest() :
                        new ActiveXObject('Microsoft.XMLHTTP');

        if (!this.isSync) {
            var self = this;

            request.onreadystatechange = function() {
                self.__requestStateHandler(request);
            }
        }

        var dataString = tuna.net.Request.encode(this.__data);

        if (this.method === 'GET' && dataString !== '') {
            requestURL += (requestURL.indexOf('?') === -1 ? '?' : '&') + dataString;
        }

        request.open(this.method, encodeURI(requestURL), !this.isSync);

        var i = this.headers.length - 1;
        while (i >= 0) {
            request.setRequestHeader(this.headers[i].name, this.headers[i].value);

            i--;
        }

        var sendData = null;
        if (this.method === 'POST') {
            request.setRequestHeader
                ('Content-Type', 'application/x-www-form-urlencoded');

            sendData = dataString;
        }

        request.send(sendData);

        if (this.isSync) {
            this.__response = request.responseText;

            this.dispatch('complete', this.__response);
        }

        this.__request = request;
    };

    tuna.net.Request.prototype.abort = function() {
        if (this.__request !== null) {
            this.__request.abort();
        }
    };

    tuna.net.Request.prototype.getResponse = function() {
        return this.__response;
    };

    tuna.net.Request.encode = function(object) {
        return tuna.net.Request.__splitData(object).join('&');
    };

    /**
     *
     * @param {Object|string} object
     * @param {Array.<string>=} path
     */
    tuna.net.Request.__splitData = function(object, path) {
        var result = [];

        if (path === undefined) {
            path = [];
        }

        if (object !== undefined &&
            object !== null &&
            object.constructor !== Function) {

            if (object instanceof Object) {
                for (var key in object) {
                    var newPath = path.length === 0 ? [key] : (path.join(',') + ',' + key).split(',');
                    result = result.concat(tuna.net.Request.__splitData(object[key], newPath));
                }
            } else {
                result = [path.shift() + (path.length > 0 ? '[' + path.join('][') + ']=' : '=') + encodeURIComponent(object)];
            }
        }

        return result;
    };

})();
