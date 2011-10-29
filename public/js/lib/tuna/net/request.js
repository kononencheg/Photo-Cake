(function() {
    tuna.namespace("tuna.net");

    var Request = function(url) {
        tuna.utils.Notifier.call(this);

        /**
         * Адрес запроса.
         *
         * @type String
         */
        this.url = url;

        /**
         * Флаг о синхронности запроса
         *
         * @type Boolean
         */
        this.isSync = false;

        /**
         * Метод запроса.
         *
         * По-умолчанию GET.
         *
         * @type Boolean
         */
        this.method = 'GET';

        /**
         * Заголовки запроса
         *
         * @type Array.<{ name: '', value: '' }>
         */
        this.headers = [];

        /**
         * Данные запроса
         *
         * @type Object
         */
        this.data = null;

        /**
         * Строка результата запроса
         *
         * @type String
         */
        this.__response = {};

        this.__request = null;
    };

    tuna.implement(Request, tuna.net.IRequest);
    
    tuna.extend(Request, tuna.utils.Notifier);

    /**
     * Обработка состояния запроса.
     *
     * @private
     */
    Request.prototype.__requestStateHandler = function(request) {
        if (request.readyState === 4) {
            this.__response = request.responseText;

            this.notify('complete', this.__response);

            request.abort();
        }
    };

    /**
     * Функци отправки запроса.
     *
     * @param {String} url URL адрес отправки.
     */
    Request.prototype.send = function(url) {
        try {

            if (url !== undefined) {
                this.url = url;
            }

            var requestURL = this.url;

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

            var dataString = Request.encode(this.data);

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
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                sendData = dataString;
            }

            request.send(sendData);

            if (this.isSync) {
                this.__response = request.responseText;

                this.notify('complete', this.__response);
            }

            this.__request = request;

        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Прерывание запроса.
     */
    Request.prototype.abort = function() {
        if (this.__request !== null) {
            this.__request.abort();
        }
    };

    /**
     * Возвращение результата в виде строки.
     *
     * @return {String} Строка результата.
     */
    Request.prototype.getResponse = function() {
        return this.__response;
    };

    /**
     * Кодирование объекта в x-www-form-urlencoded форму.
     *
     * @param {Object} object Объект кодирования.
     * @return {String} Перекодированный в строку объект.
     */
    Request.encode = function(object) {
        return Request.__splitData(object).join('&');
    };

    /**
     * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
     *
     * @param {Object} object Объект кодирования.
     * @param {Object} path Путь к элементарной единице данных.
     * @return {Array} Массив элементарных данных составляющих объект
     * @private
     */
    Request.__splitData = function(object, path) {
        var result = [];

        if (path === undefined) {
            path = [];
        }

        if (object !== undefined &&
            object !== null &&
            object.constructor !== Function) {

            if (object.constructor === Object) {
                for (var key in object) {
                    var newPath = path.length === 0 ? [key] : (path.join(',') + ',' + key).split(',');
                    result = result.concat(Request.__splitData(object[key], newPath));
                }
            } else {
                result = [path.shift() + (path.length > 0 ? '[' + path.join('][') + ']=' : '=') + object];
            }
        }

        return result;
    };

    tuna.net.Request = Request;

})();
