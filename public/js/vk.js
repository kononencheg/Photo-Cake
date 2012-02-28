/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */


/**
 * @namespace Глобальная область имен.
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @const
 * @type string
 */
tuna.VERSION = '3.2.70';

/**
 * Является ли текущий браузер IE.
 *
 * @const
 * @type boolean
 */
tuna.IS_IE = !!eval("'\v' == 'v'");

/**
 * @define {boolean}
 */
tuna.IS_COMPILED = false;

/**
 * @namespace
 */
tuna.dom = {};

/**
 * @namespace
 */
tuna.events = {};

/**
 * @namespace
 */
tuna.model = {};

/**
 * @namespace
 */
tuna.net = {};

/**
 * @namespace
 */
tuna.rest = {};

/**
 * @namespace
 */
tuna.tmpl = {};

/**
 * @namespace
 */
tuna.tmpl.compilers = {};

/**
 * @namespace
 */
tuna.tmpl.data = {};

/**
 * @namespace
 */
tuna.tmpl.markup = {};

/**
 * @namespace
 */
tuna.tmpl.settings = {};

/**
 * @namespace
 */
tuna.tmpl.units = {};

/**
 * @namespace
 */
tuna.ui = {};

/**
 * @namespace
 */
tuna.ui.buttons = {};

/**
 * @namespace
 */
tuna.ui.containers = {};

/**
 * @namespace
 */
tuna.ui.flash = {};

/**
 * @namespace
 */
tuna.ui.forms = {};

/**
 * @namespace
 */
tuna.ui.popups = {};

/**
 * @namespace
 */
tuna.ui.modules = {};

/**
 * @namespace
 */
tuna.ui.selection = {};

/**
 * @namespace
 */
tuna.ui.transformers = {};

/**
 * @namespace
 */
tuna.ui.selection.items = {};

/**
 * @namespace
 */
tuna.ui.selection.rule = {};

/**
 * @namespace
 */
tuna.ui.selection.view = {};

/**
 * @namespace
 */
tuna.utils = {};

/**
 * @namespace
 */
tuna.view = {};
/**
 * Convert array-like object to array.
 *
 * @param {Object} list Array-like object.
 * @return {Array} Converted array.
 */
tuna.utils.toArray = function(list) {
    return Array.prototype.slice.call(list);
};

/**
 * Объявление реализации интерфейса.
 *
 * Добавление либо замена (уже существующих) методов прототипа класса
 * 'интерфейса', неоходимое для оповещения о не реализованных методах.
 *
 * При объявлении интерфейса в каждом объявленном методе следует
 * генерировать ошибку типа <code>InterfaceMethodError</code>.
 *
 * Данную функцию следует вызывать перез вызовом функции
 * <code>tuna.utils.extend</code>.
 *
 * @param {!Object} Class Класс который должен реализовать интерфейс.
 * @param {!Object} Interface Класс "интерфейс" для реализации.
 */
tuna.utils.implement = function(Class, Interface) {
    if (!tuna.IS_COMPILED) {
        for (var method in Interface.prototype) {
            if (typeof Interface.prototype[method] === 'function') {
                Class.prototype[method] = Interface.prototype[method];
            }
        }
    }
};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на
 * него, сохраняя конструктор.
 *
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
tuna.utils.extend = function(Class, Parent) {
    /**
     * @constructor
     */
    var Link = function() {};
    Link.prototype = Parent.prototype;

    Class.prototype = new Link();
    Class.prototype.constructor = Class;
};

/**
 * Функция выполнения строки JavaScript кода в глобальной области имен.
 *
 * Не следует использовать нигде в логике приложенния.
 *
 * @param {!string} code Строка кода.
 * @return {*} Результат выполнения.
 * @deprecated
 */
tuna.utils.eval = function(code) {
    return (window.execScript !== undefined) ?
            window.execScript(code) : window.eval(code);
};

/**
 * Привязывание определенного контекста к функции или методу.
 *
 * @param {!Function} func
 * @param {Object} context
 */
tuna.utils.bind = function(func, context) {
    if (func.bind !== undefined) {
        return func.bind(context);
    } else {
        var args = Array.prototype.slice.call(arguments, 2);

        return function() {
            return func.apply
                (context, args.concat(tuna.utils.toArray(arguments)));
        };
    }
};

/**
 * Отложенное выполнение метода. Д
 *
 * @param {!Function} callback
 */
tuna.utils.nextTick = function(callback) {
    setTimeout(callback, 0);
};

/**
 * Клонирование объекта.
 *
 * @param {*} object
 * @param {Array=} clones
 */
tuna.utils.clone = function(object, clones) {
    if (object instanceof Array) {
        return tuna.utils.cloneArray(object);
    } else if (object instanceof Date) {
        return tuna.utils.cloneDate(object);
    } else if (object instanceof Object) {
        if (clones === undefined) {
            clones = [object];
        } else {
            clones.push(object);
        }

        var result = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (tuna.utils.indexOf(object[key], clones) === -1) {
                    result[key] = tuna.utils.clone(object[key]);
                } else {
                    throw new TypeError('Cloning circular structure');
                }
            }
        }

        return result;
    }

    return object;
};

/**
 * Клонирование даты.
 *
 * @param {Date} date
 */
tuna.utils.cloneDate = function(date) {
    return new Date(date.getTime());
};

/**
 * Клонирование массива.
 *
 * @param {Array} array
 */
tuna.utils.cloneArray = function(array) {
    return array.slice(0);
};

/**
 * Поиск индекса объекта в массиве.
 *
 * @param {*} element
 * @param {Array} array
 */
tuna.utils.indexOf = function(element, array) {
    if (array.indexOf !== undefined) {
        return array.indexOf(element);
    } else {
        var i = 0,
            l = array.length;

        while (i < l) {
            if (array[i] === element) {
                return i;
            }

            i++;
        }
    }

    return -1;
};

/**
 * @const
 * @type {string}s
 */
tuna.utils.__DECODE_PATH_SEP = '|';

/**
 * @param {string} search
 * @return {Object}
 */
tuna.utils.decodeSearch = function(search) {
    var result = {};

    var parsedSearch = search.subString(1);
    parsedSearch = parsedSearch.split('][').join(tuna.utils.__DECODE_PATH_SEP);
    parsedSearch = parsedSearch.split('[').join(tuna.utils.__DECODE_PATH_SEP);
    parsedSearch = parsedSearch.split(']').join('');

    var vars = parsedSearch.split('&');
    var i = 0,
        l = vars.length;

    var pair = null;
    var path = null;
    var pathToken = null;

    var context = null;
    while (i < l) {
        pair = vars[i].split('=');
        path = pair.shift().split(tuna.utils.__DECODE_PATH_SEP);

        context = result;

        while (path.length > 0) {
            pathToken = path.shift();

            if (path.length === 0) {
                context[pathToken] = decodeURIComponent(pair.shift());
            } else if (context[pathToken] === undefined) {
                context[pathToken] = {};
            }

            context = context[pathToken];
        }

        i++;
    }

    return result;
};

/**
 * @constructor
 */
var Config = function() {

    /**
     * @private
     * @type {Object.<string, string>}
     */
    this.__data = null;
};

/**
 * @param {Object} data
 */
Config.prototype.init = function(data) {
    this.__data = data;
};

/**
 * @param {!string} key
 * @return {?string}
 */
Config.prototype.get = function(key) {
    if (this.__data[key] !== undefined) {
        return this.__data[key];
    }

    return null;
};

/**
 * @type Config
 */
tuna.utils.config = new Config();


/**
 * TUNA FRAMEWORK
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

tuna.dom.__addCustomIEListener = function(element, type, handler) {
    if (element.__customListener == undefined) {
        element.__customListener = function(event) {
            if (event.__type !== undefined) {
                var type = event.__type;
                delete event.__type;

                var handlers = element['__' + type];
                for (var i in handlers) {
                    handlers[i].call(element, event);
                }
            }
        };

        element.attachEvent('onhelp', element.__customListener);
    }

    if (element['__' + type] === undefined) {
        element['__' + type] = [];
    }

    element['__' + type].push(handler);
};

tuna.dom.__removeCustomIEListener = function(element, type, handler) {
    var handlers = element['__' + type];
    if (handlers !== undefined) {
        var i = handlers.length - 1;
        while (i >= 0) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }

            i--;
        }
    }
};

tuna.dom.__dispatchCustomIEEvent = function(element, event, type) {
    event.__type = type;
    return element.fireEvent('onhelp', event);
};

tuna.dom.__selectorEngine = null;

/**
 * @param {*} engine
 */
tuna.dom.setSelectorEngine = function(engine) {
    tuna.dom.__selectorEngine = engine;
};

/**
 * @param {string} selector
 * @param {Node} context
 * @return {Array.<!Node>}
 */
tuna.dom.select = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine(selector, context);
    }

    return null;
};

/**
 * @param {string} selector
 * @param {Array.<Node>} elements
 * @return {Array.<Node>}
 */
tuna.dom.filter = function(selector, elements) {
    if (tuna.dom.__selectorEngine !== null &&
        tuna.dom.__selectorEngine.filter !== undefined) {
        return tuna.dom.__selectorEngine.filter(selector, elements);
    }

    return null;
};

/**
 *
 * @param {string} selector
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.selectOne = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        var result = tuna.dom.__selectorEngine(selector, context);
        if (result.length > 0) {
            return result[0];
        }
    }

    return null;
};

/**
 *
 * @param {string} html
 * @param {HTMLDocument} doc
 * @return {DocumentFragment}
 */
tuna.dom.createFragment = function(html, doc) {
    var fragment = doc.createDocumentFragment();

    var tempContainer = doc.createElement('div');
    tempContainer.innerHTML = html;

    var children = tempContainer.childNodes;
    var i = 0,
        l = children.length;

    while (i < l) {
        fragment.appendChild(children.item(0));

        i++;
    }

    return fragment;
};

/**
 * TODO: Make remove child listener
 * @param {Node} element
 * @param {string} childSelector
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addChildEventListener = function(element, childSelector, type, handler) {
    tuna.dom.addEventListener(element, type, function(event) {
        var eventTarget = event.target || event.srcElement;

        var target = tuna.dom.__selectorEngine.matches(childSelector, [eventTarget])[0];

        if (target === undefined) {
            target = tuna.dom.getParentMatches(eventTarget, childSelector, element);
        }

        if (target !== null) {
            handler.call(target, event);
        }
    });
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addEventListener = function(element, type, handler) {
    if (element.addEventListener !== undefined) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__addCustomIEListener(element, type, handler);
        } else {
            element.attachEvent(eventName, handler);
        }
    }
};

/**
 * TODO: Make remove listener
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addOneEventListener = function(element, type, handler) {
    var listener = function(event) {
        handler.call(element, event);
        tuna.dom.removeEventListener(element, type, listener);
    };

    tuna.dom.addEventListener(element, type, listener);
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.removeEventListener = function(element, type, handler) {
    if (element.removeEventListener !== undefined) {
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__removeCustomIEListener(element, type, handler);
        } else {
            element.detachEvent("on" + type, handler);
        }

    }
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {string=} data
 */
tuna.dom.dispatchEvent = function(element, type, data) {
    var result = false;
    var doc = element.ownerDocument;

    var event = null;
    if (doc.createEventObject !== undefined){
        event = doc.createEventObject();
        data && (event.data = data);

        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__dispatchCustomIEEvent(element, event, type);
        } else {
            result = element.fireEvent(eventName, event);
        }
    } else {
        event = document.createEvent('UIEvents');
        event.initUIEvent(type, true, true, window, 1);
        data && (event.data = data);

        result = !element.dispatchEvent(event);
    }

    return result;
};

/**
 * @param {Event} event
 */
tuna.dom.preventDefault = function(event) {
    if (event.preventDefault !== undefined) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};

/**
 * @param {Event} event
 */
tuna.dom.stopPropagation = function(event) {
    if (event.stopPropagation !== undefined) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};

/**
 * @param {Node} element
 * @param {Node} parent
 * @return {number}
 */
tuna.dom.getChildIndex = function(element, parent) {
    var result = -1;

    var child;
    if (element.parentNode === parent) {
        result = 0;
        child = parent.firstChild;

        while (child !== undefined && child !== element) {
            result++;

            child = child.nextSibling;
        }
    }

    return result;
};

/**
 * @param {Node} parent
 * @param {number} index
 * @return {Node}
 */
tuna.dom.getChildAt = function(parent, index) {
    return parent.childNodes[index] || null;
};

/**
 * @param {Node} element
 * @param {string} selector
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentMatches = function(element, selector, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           tuna.dom.__selectorEngine.matches(selector, [parent]).length === 0) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentWithClass = function(element, className, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           !tuna.dom.hasClass(parent, className)) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @return {boolean}
 */
tuna.dom.hasClass = function(element, className) {
    if (element.classList !== undefined) {
        return element.classList.contains(className);
    } else if (element.className !== undefined) {
        return element.className.match
            (new RegExp('(\\s|^)' + className + '(\\s|$)')) !== null;
    }

    return false;
};

/**
 * @param {Node} element
 * @param {string} className
 */
tuna.dom.addClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.add(className);
    } else if (!tuna.dom.hasClass(element, className)) {
        element.className += " " + className;
    }

};

/**
 * @param {Node} element
 * @param {string} className
 */
tuna.dom.removeClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.remove(className);
    } else if (tuna.dom.hasClass(element, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
};

/**
 * @param {Node} element
 * @param {string} className
 * @param {boolean} isExist
 */
tuna.dom.setClassExist = function(element, className, isExist) {
    if (!isExist && tuna.dom.hasClass(element, className)) {
        tuna.dom.removeClass(element, className);
    } else if (isExist && !tuna.dom.hasClass(element, className)) {
        tuna.dom.addClass(element, className);
    }
};

/**
 * @param {Node} element
 * @param {string=} prefix
 * @return {Object.<string, string>}
 */
tuna.dom.getAttributesData = function(element, prefix) {
    if (prefix === undefined) {
        prefix = 'data-';
    }

    var result = {};

    var attrs = element.attributes;
    var i = 0,
        l = attrs.length;

    while (i < l) {
        if (attrs[i].name.indexOf(prefix) === 0) {
            result[attrs[i].name.substr(prefix.length)] = attrs[i].value;
        }

        i++;
    }

    return result;
};
/**
 * @constructor
 * @param {!string} type
 * @param {boolean=} isBubbling
 */
var BasicEvent = function(type, isBubbling) {

    /**
     * @protected
     * @type tuna.events.IEventDispatcher
     */
    this._target = null;

    /**
     * @protected
     * @type string
     */
    this._type = type;

    /**
     * @protected
     * @type boolean
     */
    this._isBubbling = !!isBubbling;

    /**
     * @protected
     * @type boolean
     */
    this._isCanceled = false;

    /**
     * @protected
     * @type boolean
     */
    this._isStopped = false;

    /**
     * @protected
     * @type boolean
     */
    this._isImmediateStopped = false;
};

/**
 * @param {tuna.events.IEventDispatcher} target
 */
BasicEvent.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * @return tuna.events.IEventDispatcher
 */
BasicEvent.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return string
 */
BasicEvent.prototype.getType = function() {
    return this._type;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isBubbling = function() {
    return this._isBubbling;
};

/**
 *
 */
BasicEvent.prototype.preventDefault = function() {
    this._isCanceled = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isDefaultPrevented = function() {
    return this._isCanceled;
};

/**
 *
 */
BasicEvent.prototype.stopImmediatePropagation = function() {
    this._isImmediateStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isImmediatePropagationStopped = function() {
     return this._isImmediateStopped;
};

/**
 *
 */
BasicEvent.prototype.stopPropagation = function() {
    this._isStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isPropagationStopped = function() {
    return this._isImmediateStopped || this._isStopped;
};

/**
 * @constructor
 * @extends {BasicEvent}
 */
tuna.events.BasicEvent = BasicEvent;

/**
 * @interface
 */
var IEventDispatcher = function() {};

/**
 * @param {!tuna.events.BasicEvent|!string} event
 * @param {*=} data
 * @return {boolean}
 */
IEventDispatcher.prototype.dispatch = function(event, data) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.addEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.removeEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 * @return {boolean}
 */
IEventDispatcher.prototype.hasEventListener = function(type, listener) {};

/**
 * @interface
 * @extends {IEventDispatcher}
 */
tuna.events.IEventDispatcher = IEventDispatcher;

/**
 * @constructor
 * @implements tuna.events.IEventDispatcher
 * @param {tuna.events.IEventDispatcher=} parent
 */
var EventDispatcher = function(parent) {

    /**
     * @protected
     * @type {tuna.events.IEventDispatcher}
     */
    this._propagationParent = parent || null;

    /**
     * @protected
     * @type {Object.<string, Array.<function(tuna.events.BasicEvent, *)>>}
     */
    this._listeners = {};
};

tuna.utils.implement(EventDispatcher, tuna.events.IEventDispatcher);

/**
 * @override
 */
EventDispatcher.prototype.dispatch = function(event, data) {
    if (!(event instanceof tuna.events.BasicEvent)) {
        event = new tuna.events.BasicEvent(event);
    }

    var type = event.getType();

    if (this._listeners[type] !== undefined) {
        if (event.getTarget() === null) {
            event.setTarget(this);
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

/**
 * @override
 */
EventDispatcher.prototype.addEventListener = function(type, listener) {
    if (this._listeners[type] === undefined) {
        this._listeners[type] = [listener];
    } else if (!this.hasEventListener(type, listener)) {
        this._listeners[type].push(listener);
    }
};

/**
 * @override
 */
EventDispatcher.prototype.removeEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        var listenerIndex
            = tuna.utils.indexOf(listener, this._listeners[type]);

        if (listenerIndex !== -1) {
            this._listeners[type].splice(listenerIndex, 1);
        }
    }
};

/**
 * @override
 */
EventDispatcher.prototype.hasEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        return tuna.utils.indexOf(listener, this._listeners[type]) !== -1;
    }

    return false;
};

/**
 * @constructor
 * @extends {EventDispatcher}
 */
tuna.events.EventDispatcher = EventDispatcher;

/**
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
var IRequest = function() {};

tuna.utils.extend(IRequest, tuna.events.IEventDispatcher);

/**
 * @param {string} url
 */
IRequest.prototype.send = function(url) {};

/**
 *
 */
IRequest.prototype.abort = function() {};

/**
 * @interface
 * @extends {IRequest}
 */
tuna.net.IRequest = IRequest;


/**
 * @constructor
 * @implements {tuna.net.IRequest}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} url
 */
var Request = function(url) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @private
     * @type string
     */
    this.__url = url || '/';
    
    /**
     * @private
     * @type boolean
     */
    this.isSync = false;

    /**
     * @private
     * @type string
     */
    this.method = 'GET';

    /**
     * @private
     * @type Array.<{ name: string, value: string }>
     */
    this.headers = [];

    /**
     * @private
     * @type Object
     */
    this.__data = null;

    /**
     * @private
     * @type ?string
     */
    this.__response = null;

    /**
     * @private
     * @type XMLHttpRequest
     */
    this.__request = null;
};

tuna.utils.implement(Request, tuna.net.IRequest);
tuna.utils.extend(Request, tuna.events.EventDispatcher);

/**
 * @param {Object} data
 */
Request.prototype.setData = function(data) {
    this.__data = data;
};

/**
 * @param {string} url
 */
Request.prototype.setURL = function(url) {
    this.__url = url;
};

/**
 * @private
 * @param {XMLHttpRequest} request
 */
Request.prototype.__requestStateHandler = function(request) {
    if (request.readyState === 4) {
        this.__response = request.responseText;

        this.dispatch('complete', this.__response);

        request.abort();
    }
};

/**
 *
 */
Request.prototype.send = function() {
    var requestURL = this.__url;

    if (this.__request !== null) {
        this.__request.abort();
    }

    var request = !tuna.IS_IE ?
                    new XMLHttpRequest() :
                    new ActiveXObject('Microsoft.XMLHTTP');

    if (!this.isSync) {
        var self = this;

        request.onreadystatechange = function() {
            self.__requestStateHandler(request);
        }
    }

    var dataString = Request.encode(this.__data);

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
 * @return {?string} Строка результата.
 */
Request.prototype.getResponse = function() {
    return this.__response;
};

/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 *
 * @param {Object} object Объект кодирования.
 * @return {string} Перекодированный в строку объект.
 */
Request.encode = function(object) {
    return Request.__splitData(object).join('&');
};

/**
 * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
 *
 * @private
 * @param {Object} object Объект кодирования.
 * @param {Object=} path Путь к элементарной единице данных.
 * @return {Array} Массив элементарных данных составляющих объект
 */
Request.__splitData = function(object, path) {
    var result = [];

    if (path === undefined) {
        path = [];
    }

    if (object !== null && !(object instanceof Function)) {
        if (object instanceof Object) {
            for (var key in object) {
                var newPath = path.length === 0 ? [key] : (path.join(',') + ',' + key).split(',');
                result = result.concat(Request.__splitData(object[key], newPath));
            }
        } else {
            result = [
                path.shift() +
                    (path.length > 0 ? '[' + path.join('][') + ']=' : '=') +
                        encodeURIComponent('' + object)
            ];
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {Request}
 */
tuna.net.Request = Request;


/**
 * @constructor
 */
var Record = function() {};

/**
 * @return {tuna.model.Record}
 */
Record.prototype.clone = function() {
    var clone = new this.constructor();
    for (var param in this) {
        if (this.hasOwnProperty(param)) {
            clone[param] = this[param];
        }
    }

    return clone;
};

/**
 * @param {Object} data
 */
Record.prototype.populate = function(data) {};

/**
 * @return {Object}
 */
Record.prototype.serialize = function() {};

/**
 * @constructor
 * @extends {Record}
 */
tuna.model.Record = Record;


/**
 * @constructor
 */
var RecordFactory = function () {
    /**
     * @private
     * @type Object.<string, tuna.model.Record>
     */
    this.__records = {};
};

/**
 *
 * @param {string} name
 * @param {tuna.model.Record} record
 */
RecordFactory.prototype.registerRecord = function(name, record) {
    this.__records[name] = record;
};

/**
 *
 * @param {string} name
 * @return {tuna.model.Record}
 */
RecordFactory.prototype.createRecord = function(name) {
    return this.__records[name].clone();
};

/**
 * @type RecordFactory
 */
tuna.model.recordFactory = new RecordFactory();
/**
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
var IMethod = function() {};

/**
 * @param {Object} args
 */
IMethod.prototype.call = function(args) {};

/**
 * @return {tuna.rest.IMethod}
 */
IMethod.prototype.clone = function() {};

/**
 * @interface
 * @extends {IMethod}
 */
tuna.rest.IMethod = IMethod;


/**
 * @constructor
 * @implements {tuna.rest.IMethod}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} name
 */
var Method = function(name) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type ?string
     */
    this._name = name || null;
};

tuna.utils.implement(Method, tuna.rest.IMethod);
tuna.utils.extend(Method, tuna.events.EventDispatcher);

/**
 * @override
 */
Method.prototype.call = function(args) {};

/**
 * @override
 */
Method.prototype.clone = function() {
    return new this.constructor(this._name);
};

/**
 * @constructor
 * @extends {Method}
 */
tuna.rest.Method = Method;

/**
 * @interface
 */
var IMethodFactory = function() {};

/**
 * @param {string} name
 * @return {tuna.rest.IMethod}
 */
IMethodFactory.prototype.createMethod = function(name) {};

/**
 * @interface
 * @extends {IMethodFactory}
 */
tuna.rest.IMethodFactory = IMethodFactory;
/**
 * @constructor
 * @implements {tuna.rest.IMethodFactory}
 */
var MethodFactory = function() {
    /**
     * @private
     * @type Object.<string, tuna.rest.IMethod>
     */
    this.__methods = {};

    /**
     * @private
     * @type tuna.rest.IMethodFactory
     */
    this.__commonFactory = null;
};

tuna.utils.implement(MethodFactory, tuna.rest.IMethodFactory);

/**
 * @param {tuna.rest.IMethodFactory} factory
 */
MethodFactory.prototype.setDefaultFactory = function(factory) {
    this.__commonFactory = factory;
};

/**
 * @override
 */
MethodFactory.prototype.createMethod = function(name) {
    if (this.__methods[name] !== undefined) {
        return this.__methods[name].clone();
    } else if (this.__commonFactory !== null) {
        return this.__commonFactory.createMethod(name);
    }

    return null;
};

/**
 * @param {string} name
 * @param {tuna.rest.IMethod} method
 */
MethodFactory.prototype.registerMethod = function(name, method) {
    this.__methods[name] = method;
};

/**
 * @type MethodFactory
 */
tuna.rest.methodFactory = new MethodFactory();

/**
 * @param {string} name
 * @param {Object} args
 * @param {function(Object)} callback
 * @param {string=} recordName
 */
tuna.rest.call = function(name, args, callback, recordName) {

    var method = tuna.rest.methodFactory.createMethod(name);

    if (callback !== undefined) {
        var listener = function(event, data) {
            var result = data;

            if (recordName !== undefined) {
                result = tuna.rest.populateRecords(data, recordName);
            }

            callback(result);

            method.removeEventListener('result', listener);
        };

        method.addEventListener('result', listener);
    }

    method.call(args);
};

/**
 * @param {Object|Array.<Object>} data
 * @param {string} name
 * @return {tuna.model.Record|Array.<tuna.model.Record>}
 */
tuna.rest.populateRecords = function(data, name) {
    if (data !== null) {
        if (data.splice !== undefined) {
            var result = [];

            var i = 0,
                l = data.length;

            while (i < l) {
                result.push(tuna.rest.__populateRecord(data[i], name));
                i++;
            }

            return result;
        } else {
            return tuna.rest.__populateRecord(data, name);
        }
    }

    return null;
};

/**
 * @param {Object} data
 * @param {string} name
 * @return {tuna.model.Record}
 */
tuna.rest.__populateRecord = function(data, name) {
    var record = tuna.model.recordFactory.createRecord(name);
    record.populate(data);
    return record;
};

/**
 * @constructor
 * @param {*} value
 * @param {tuna.tmpl.data.DataNode=} parent
 * @param {string=} key
 */
var DataNode = function(value, parent, key) {
    /**
     * @private
     * @type *
     */
    this.__value = value;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__parent = parent || null;

    /**
     * @private
     * @type ?string
     */
    this.__key = key || null;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__keyNode = null;

    /**
     * @private
     * @type Object.<string, tuna.tmpl.data.DataNode>
     */
    this.__children = {};
};

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getParent = function() {
    return this.__parent;
};

/**
 * @return  {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getKey = function() {
    if (this.__keyNode === null) {
        this.__keyNode = new tuna.tmpl.data.DataNode(this.__key);
    }

    return this.__keyNode;
};

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getRoot = function() {
    return this.__parent !== null ? this.__parent.getRoot() : this;
};

/**
 * @return  {*}
 */
DataNode.prototype.getValue = function() {
    return this.__value;
};

/**
 * @param {string} key
 */
DataNode.prototype.growChild = function(key) {
    var result = null;

    if (this.__children[key] !== undefined) {
        result = this.__children[key];
    } else if (this.__value !== null) {
        var keyValue = this.__value[key];

        if (keyValue !== undefined) {
            this.__children[key]
                = new tuna.tmpl.data.DataNode(keyValue, this, key);

            result = this.__children[key];
        } else {
            this.__children[key] = new tuna.tmpl.data.DataNode(null);
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {DataNode}
 */
tuna.tmpl.data.DataNode = DataNode;
/**
 * @constructor
 */
var PathEvaluator = function() {

    /**
     * @private
     * @type Array.<string>
     */
    this.__parsedPath = null;
};

/**
 */
PathEvaluator.prototype.setPath = function(path) {
    this.__parsedPath = path.split('/');
};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.evaluate = function(dataNode) {
    var node = this.__applyNextToken(this.__parsedPath, dataNode, 0);
    if (node !== null) {
        return node;
    }

    return new tuna.tmpl.data.DataNode(null);
};

/**
 *
 * @param {Array.<string>} path
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @param {number} index
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyNextToken = function(path, dataNode, index) {
    var token = path[index];
    if (dataNode !== null && token !== undefined) {
        return this.__applyNextToken
            (path, this.__applyToken(token, dataNode), ++index);
    }

    return dataNode;
};

/**
 *
 * @param {string} token
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyToken = function(token, dataNode) {

    switch (token) {
        case '': return dataNode.getRoot();
        case '.': return dataNode;
        case '..': return dataNode.getParent();

        case '$key': return dataNode.getKey();
    }

    return dataNode.growChild(token);
};

/**
 * @constructor
 * @extends {PathEvaluator}
 */
tuna.tmpl.data.PathEvaluator = PathEvaluator;

/**
 * @interface
 */
tuna.tmpl.settings.IItemSettings = function() {};
/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var SpotSettings = function() {
    
    /**
     * @private
     * @type {string}
     */
    this.__class = '';

    /**
     * @private
     * @type {string}
     */
    this.__path = '';
};

/**
 * @param {string} className
 */
SpotSettings.prototype.setTargetClass = function(className) {
    this.__class = className;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getTargetClass = function() {
    return this.__class;
};

/**
 * @param {string} path
 */
SpotSettings.prototype.setDataPath = function(path) {
    this.__path = path;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getDataPath = function() {
    return this.__path;
};

/**
 * @constructor
 * @extends {SpotSettings}
 */
tuna.tmpl.settings.SpotSettings = SpotSettings;
/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var AttributeSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__attributeName = '';

    /**
     * @private
     * @type boolean
     */
    this.__hasEvent = false;
};

tuna.utils.extend(AttributeSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {boolean} hasEvent
 */
AttributeSettings.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @return {boolean}
 */
AttributeSettings.prototype.hasEvent = function() {
    return this.__hasEvent;
};

/**
 * @param {string} attributeName
 */
AttributeSettings.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
};

/**
 * @return {string}
 */
AttributeSettings.prototype.getAttributeName = function() {
    return this.__attributeName;
};

/**
 * @constructor
 * @extends {AttributeSettings}
 */
tuna.tmpl.settings.AttributeSettings = AttributeSettings;
/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ConditionSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__actionType = '';

    /**
     * @private
     * @type string
     */
    this.__actionData = '';

    /**
     * @private
     * @type string
     */
    this.__operatorType = '';

    /**
     * @private
     * @type string
     */
    this.__operatorData = '';
};

tuna.utils.extend(ConditionSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setOperator = function(type, data) {
    this.__operatorType = type;
    this.__operatorData = data;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getOperatorType = function() {
    return this.__operatorType;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getOperatorData = function() {
    return this.__operatorData;
};

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setAction = function(type, data) {
    this.__actionType = type;
    this.__actionData = data;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getActionType = function() {
    return this.__actionType;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getActionData = function() {
    return this.__actionData;
};

/**
 * @constructor
 * @extends {ConditionSettings}
 */
tuna.tmpl.settings.ConditionSettings = ConditionSettings;

/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ListSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__keyPath = '';

    /**
     * @private
     * @type string
     */
    this.__itemRendererID = '';

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;
};

tuna.utils.extend(ListSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} path
 */
ListSettings.prototype.setItemKeyDataPath = function(path) {
    this.__keyPath = path;
};

/**
 * @return {string}
 */
ListSettings.prototype.getItemKeyDataPath = function() {
    return this.__keyPath;
};

/**
 * @param {string} id
 */
ListSettings.prototype.setItemRendererID = function(id) {
    this.__itemRendererID = id;
};


/**
 * @return {string}
 */
ListSettings.prototype.getItemRendererID = function() {
    return this.__itemRendererID;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListSettings.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
ListSettings.prototype.getItemSettings = function() {
    return this.__itemSettings;
};

/**
 * @constructor
 * @extends {ListSettings}
 */
tuna.tmpl.settings.ListSettings = ListSettings;




/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var TemplateSettings = function() {

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.SpotSettings>
     */
    this.__spots = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ListSettings>
     */
    this.__lists = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.AttributeSettings>
     */
    this.__attributes = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ConditionSettings>
     */
    this.__conditions = [];
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} condition
 */
TemplateSettings.prototype.addCondition = function(condition) {
    this.__conditions.push(condition);
};

/**
 * @return {Array.<tuna.tmpl.settings.ConditionSettings>}
 */
TemplateSettings.prototype.getConditions = function() {
    return this.__conditions;
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} attr
 */
TemplateSettings.prototype.addAttribute = function(attr) {
    this.__attributes.push(attr);
};

/**
 * @return {Array.<tuna.tmpl.settings.AttributeSettings>}
 */
TemplateSettings.prototype.getAttributes = function() {
    return this.__attributes;
};

/**
 * @param {tuna.tmpl.settings.ListSettings} list
 */
TemplateSettings.prototype.addList = function(list) {
    this.__lists.push(list);
};

/**
 * @return {Array.<tuna.tmpl.settings.ListSettings>}
 */
TemplateSettings.prototype.getLists = function() {
    return this.__lists;
};

/**
 * @param {tuna.tmpl.settings.SpotSettings} spot
 */
TemplateSettings.prototype.addSpot = function(spot) {
    this.__spots.push(spot);
};

/**
 * @return {Array.<tuna.tmpl.settings.SpotSettings>}
 */
TemplateSettings.prototype.getSpots = function() {
    return this.__spots;
};

/**
 * @constructor
 * @extends {TemplateSettings}
 */
tuna.tmpl.settings.TemplateSettings = TemplateSettings;

/**
 * @interface
 */
var IMarkupExtractor = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
IMarkupExtractor.prototype.extract = function(element, settings) {};

/**
 * @interface
 * @extends {IMarkupExtractor}
 */
tuna.tmpl.markup.IMarkupExtractor = IMarkupExtractor;
/**
 * @constructor
 * @implements {tuna.tmpl.markup.IMarkupExtractor}
 */
var SpotExtractor = function() {

    /**
     * @protected
     * @type {string}
     */
    this._tagName = 'spot';

    /**
     * @protected
     * @type {string}
     */
    this._ns = 'tuna:';
};

tuna.utils.implement(SpotExtractor, tuna.tmpl.markup.IMarkupExtractor);

/**
 * @override
 */
SpotExtractor.prototype.extract = function(element, settings) {
    var tagName = tuna.IS_IE ? this._tagName : (this._ns + this._tagName);
    var elements = element.getElementsByTagName(tagName);

    var i = 0,
        l = elements.length;

    var item = null;
    while (i < l) {
        item = this._createItem();

        this._parseElement(elements.item(i), item);
        this._saveItem(item, settings);

        i++;
    }
};

/**
 * @protected
 * @return tuna.tmpl.settings.IItemSettings
 */
SpotExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.SpotSettings();
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
SpotExtractor.prototype._parseElement = function(element, item) {
    item.setTargetClass(element.getAttribute(this._ns + 'target'));
    item.setDataPath(element.getAttribute(this._ns + 'path'));
};

/**
 * @protected
 * @param {tuna.tmpl.settings.SpotSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotExtractor.prototype._saveItem = function(item, settings) {
    settings.addSpot(item);
};

/**
 * @constructor
 * @extends {SpotExtractor}
 */
tuna.tmpl.markup.SpotExtractor = SpotExtractor;
/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 * @param {tuna.tmpl.markup.MarkupTemplateBuilder} templateBuilder
 */
var ListExtractor = function(templateBuilder) {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'list';

    /**
     * @private
     * @type tuna.tmpl.markup.MarkupTemplateBuilder
     */
    this.__templateBuilder = templateBuilder
};

tuna.utils.extend(ListExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ListExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ListSettings();
};

/**
 * @override
 */
ListExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    item.setItemRendererID(element.getAttribute(this._ns + 'item-renderer-id'));
    item.setItemKeyDataPath(element.getAttribute(this._ns + 'key-path'));

    var templateID = element.getAttribute(this._ns + 'item-template-id');
    item.setItemSettings(this.__templateBuilder.buildSettings(templateID));
};

/**
 * @param {tuna.tmpl.settings.ListSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListExtractor.prototype._saveItem = function(item, settings) {
    settings.addList(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.ListExtractor = ListExtractor;
/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var AttributeExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    this._tagName = 'attr';
};

tuna.utils.extend(AttributeExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
AttributeExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.AttributeSettings();
};

/**
 * @override
 */
AttributeExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype.
        _parseElement.call(this, element, item);

    item.setAttributeName(element.getAttribute(this._ns + 'name'));
    item.setEvent(element.getAttribute(this._ns + 'event') !== null);
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
AttributeExtractor.prototype._saveItem = function(item, settings) {
    settings.addAttribute(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.AttributeExtractor = AttributeExtractor;
/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var ConditionExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'if';

    /**
     * @private
     * @type Array.<string>
     */
    this.__operatorAttrs = ['isset', 'eq', 'ne'];

    /**
     * @private
     * @type Array.<string>
     */
    this.__actionAttrs = ['class'];
};

tuna.utils.extend(ConditionExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ConditionExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ConditionSettings();
};

/**
 * @override
 */
ConditionExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    this.__extractOperator(element, item);
    this.__extractAction(element, item);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractAction = function(element, item) {
    var i = 0,
        l = this.__actionAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__actionAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.setAction(attr, value);
            break;
        }

        i++;
    }
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractOperator = function(element, item) {
    var i = 0,
        l = this.__operatorAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__operatorAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.setOperator(attr, value);
            break;
        }

        i++;
    }
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ConditionExtractor.prototype._saveItem = function(item, settings) {
    settings.addCondition(item);
};

/**
 * @constructor
 * @extends {ConditionExtractor}
 */
tuna.tmpl.markup.ConditionExtractor = ConditionExtractor;
/**
 * TODO: Template origin in iframe (set current and origin document).
 * @constructor
 * @param {HTMLDocument} doc
 */
var MarkupTemplateBuilder = function(doc) {
    this.__doc = doc;

    this.__templatesTable = {};

    this.__extractors = [];

    this.__registerExtractors();
};

/**
 * @private
 */
MarkupTemplateBuilder.prototype.__registerExtractors = function() {
    this.__extractors.push(new tuna.tmpl.markup.SpotExtractor());
    this.__extractors.push(new tuna.tmpl.markup.AttributeExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ConditionExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ListExtractor(this));
};

/**
 * @param {string} templateID
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
MarkupTemplateBuilder.prototype.buildSettings = function(templateID) {
    var template = null;

    if (this.__templatesTable[templateID] !== undefined) {
        template = this.__templatesTable[templateID];
    } else {
        var templateElement = this.__doc.getElementById(templateID);
        if (templateElement !== null) {
            this.__templatesTable[templateID] =
                template = new tuna.tmpl.settings.TemplateSettings();

            var i = 0,
                l = this.__extractors.length;

            while (i < l) {
                this.__extractors[i].extract(templateElement, template);
                i++;
            }
        }
    }

    return template;
};

/**
 * @constructor
 * @extends {MarkupTemplateBuilder}
 */
tuna.tmpl.markup.MarkupTemplateBuilder = MarkupTemplateBuilder;


/**
 * @interface
 */
var IListItemRouter = function() {};

/**
 * @param {Node} element
 */
IListItemRouter.prototype.append = function(element) {};

/**
 * @interface
 * @extends {IListItemRouter}
 */
tuna.tmpl.units.IListItemRouter = IListItemRouter;
/**
 * @constructor
 * @implements {tuna.tmpl.units.IListItemRouter}
 * @param {Node} container
 */
var ListContainerRouter = function(container) {

    /**
     * @protected
     * @type Node
     */
    this._container = container;
};

tuna.utils.implement(ListContainerRouter, tuna.tmpl.units.IListItemRouter);

/**
 * @override
 */
ListContainerRouter.prototype.append = function(node) {
    this._container.appendChild(node);
};

/**
 * @constructor
 * @extends {ListContainerRouter}
 */
tuna.tmpl.units.ListContainerRouter = ListContainerRouter;
/**
 * @constructor
 * @param {tuna.tmpl.units.Template} root
 */
var CompiledUnit = function(root) {
    this.__rootTemplate = root;
};

/**
 * @return {tuna.tmpl.units.Template}
 */
CompiledUnit.prototype.getRootTemplate = function() {
    return this.__rootTemplate;
};

/**
 *
 */
CompiledUnit.prototype.destroy = function() {};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 */
CompiledUnit.prototype.applyData = function(dataNode) {}

/**
 * @constructor
 * @extends {CompiledUnit}
 */
tuna.tmpl.units.CompiledUnit = CompiledUnit;

/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var Spot = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @protected
     * @type Array.<Node>
     */
    this._nodes = [];
};

tuna.utils.extend(Spot, tuna.tmpl.units.CompiledUnit);

/**
 * @param {string} path
 */
Spot.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {Array.<Node>} elements
 */
Spot.prototype.addTargets = function(elements) {
    this._nodes = this._nodes.concat(elements);
};

/**
 * @override
 */
Spot.prototype.applyData = function(dataNode) {
    var valueNode = this.__pathEvaluator.evaluate(dataNode);
    if (valueNode !== null) {
        this._applyValue(valueNode.getValue());
    }
};

/**
 * @protected
 * @param {*} value
 */
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

/**
 * @constructor
 * @extends {Spot}
 */
tuna.tmpl.units.Spot = Spot;

/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
var Attribute = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {string}
     */
    this.__attributeName = '';

    /**
     * @private
     * @type {string}
     */
    this.__eventName = '';

    /**
     * @private
     * @type {boolean}
     */
    this.__hasEvent = false;
};

tuna.utils.extend(Attribute, tuna.tmpl.units.Spot);

/**
 * @param {string} attributeName
 */
Attribute.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
    this.__eventName = attributeName + '-change';
};

/**
 * @param {boolean} hasEvent
 */
Attribute.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @override
 */
Attribute.prototype._applyValue = function(value) {
    if (value !== null) {
        this.__setAttribute(value);
    } else {
        this.__removeAttribute();
    }

    if (this.__hasEvent) {
        var self = this;
        setTimeout(function() {
            self.__dispatchAttribute(value);
        }, 0);
    }
};

/**
 * @private
 * @param {*} value
 */
Attribute.prototype.__setAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].setAttribute(this.__attributeName, value + '');
        i--;
    }
};

/**
 * @private
 */
Attribute.prototype.__removeAttribute = function() {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].removeAttribute(this.__attributeName);
        i--;
    }
};

/**
 * @private
 * @param {*} value
 */
Attribute.prototype.__dispatchAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        tuna.dom.dispatchEvent(this._nodes[i], this.__eventName, '' + value);

        i--;
    }
};

/**
 * @constructor
 * @extends {Attribute}
 */
tuna.tmpl.units.Attribute = Attribute;
/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
var Condition = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type __ConditionAction
     */
    this.__action = null;

    /**
     * @private
     * @type __ConditionOperator
     */
    this.__operator = null;
};

tuna.utils.extend(Condition, tuna.tmpl.units.Spot);

/**
 * @param {__ConditionAction} action
 */
Condition.prototype.setAction = function(action) {
    this.__action = action;
};

/**
 * @param {__ConditionOperator} operator
 */
Condition.prototype.setOperator = function(operator) {
    this.__operator = operator;
};

/**
 * @override
 */
Condition.prototype._applyValue = function(value) {
    var testResult = this.__operator.test(value);

    var i = this._nodes.length - 1;
    while (i >= 0) {
        this.__action.apply(this._nodes[i], testResult, value);
        i--;
    }
};

/**
 * @constructor
 * @extends {Condition}
 */
tuna.tmpl.units.Condition = Condition;
/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var List = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.compilers.TemplateCompiler
     */
    this.__templateCompiler = null;

    /**
     * @private
     * @type Node
     */
    this.__itemRenderer = null;

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;

    /**
     * @private
     * @type Object.<*, tuna.tmpl.units.Template>
     */
    this.__itemsTable = {};

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.units.IListItemRouter
     */
    this.__listNodeRouter = null;
};

tuna.utils.extend(List, tuna.tmpl.units.CompiledUnit);

/**
 * @param {tuna.tmpl.units.IListItemRouter} router
 */
List.prototype.setListNodeRouter = function(router) {
    this.__listNodeRouter = router;
};

/**
 * @param {string} path
 */
List.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {string} path
 */
List.prototype.setKeyPath = function(path) {
    this.__keyPathEvaluator.setPath(path);
};

/**
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
List.prototype.setCompiler = function(compiler) {
    this.__templateCompiler = compiler;
};

/**
 * @param {Node} element
 */
List.prototype.setItemRenderer = function(element) {
    this.__itemRenderer = element;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
List.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @param {tuna.tmpl.units.Template} compiledItem
 * @param {*} key
 */
List.prototype.addItem = function(compiledItem, key) {
    this.__itemsTable[key] = compiledItem;
};

/**
 * @override
 */
List.prototype.applyData = function(dataNode) {
    var sampleNode = this.__pathEvaluator.evaluate(dataNode);
    if (sampleNode !== null) {
        var sample = sampleNode.getValue();
        var oldItemsTable = this.__itemsTable;

        this.__itemsTable = {};
        for (var index in sample) {
            this.__updateItem(sampleNode.growChild(index), oldItemsTable);
        }

        this.__destroyItems(oldItemsTable);
    } else {
        this.__destroyItems(this.__itemsTable);
    }
};

/**
 * @override
 */
List.prototype.destroy = function() {
    this.__destroyItems(this.__itemsTable);
};

/**
 * @private
 * @param {tuna.tmpl.data.DataNode} itemNode
 * @param {Object.<*, tuna.tmpl.units.Template>} oldItemsTable
 */
List.prototype.__updateItem = function(itemNode, oldItemsTable) {
    var keyNode = this.__keyPathEvaluator.evaluate(itemNode);
    if (keyNode !== null) {
        var key = keyNode.getValue();

        if (oldItemsTable[key] === undefined) {
            this.addItem(this.__makeNewItem(), key);
        } else {
            this.__itemsTable[key] = oldItemsTable[key];
            delete oldItemsTable[key];
        }

        this.__itemsTable[key].applyData(itemNode);
    }
};

/**
 * @private
 * @param {Object.<*, tuna.tmpl.units.Template>} itemsTable
 */
List.prototype.__destroyItems = function(itemsTable) {
    for (var key in itemsTable) {
        itemsTable[key].destroy();
        delete itemsTable[key];
    }
};

/**
 * @return {tuna.tmpl.units.Template}
 */
List.prototype.__makeNewItem = function() {
    var itemElement = this.__itemRenderer.cloneNode(true);

    var rootTemplate = this.getRootTemplate();
    var template = this.__templateCompiler.compileTemplate
        (this.__itemSettings, itemElement, rootTemplate);

    this.__listNodeRouter.append(itemElement);

    rootTemplate.registerChildCreation(itemElement);

    return template;
};

/**
 * @constructor
 * @extends {List}
 */
tuna.tmpl.units.List = List;

/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var Template = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root || this);

    /**
     * @private
     * @type Array.<tuna.tmpl.units.CompiledUnit>
     */
    this.__items = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__createdChildren = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__removedChildren = [];

    /**
     * @private
     * @type Node
     */
    this.__target = null;
};

tuna.utils.extend(Template, tuna.tmpl.units.CompiledUnit);

/**
 * @param {Node} element
 */
Template.prototype.setTarget = function(element) {
    this.__target = element;
};

/**
 * @param {Array.<tuna.tmpl.units.CompiledUnit>|tuna.tmpl.units.CompiledUnit} items
 */
Template.prototype.addItems = function(items) {
    this.__items = this.__items.concat(items);
};

/**
 * @param {Node} child
 */
Template.prototype.registerChildCreation = function(child) {
    this.__createdChildren.push(child);
};

/**
 * @return {Array.<Node>}
 */
Template.prototype.fetchCreatedChildren = function() {
    return this.__createdChildren.splice(0, this.__createdChildren.length);
};

/**
 * @param {Node} child
 */
Template.prototype.registerChildRemoval = function(child) {
    this.__removedChildren.push(child);
};

/**
 * @return {Array.<Node>}
 */
Template.prototype.fetchRemovedChildren = function() {
    return this.__removedChildren.splice(0, this.__removedChildren.length);
};

/**
 * @override
 */
Template.prototype.applyData = function(dataNode) {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].applyData(dataNode);

        i--;
    }
};

/**
 * @override
 */
Template.prototype.destroy = function() {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].destroy();

        i--;
    }

    this.__target.parentNode.removeChild(this.__target);

    this.getRootTemplate().registerChildRemoval(this.__target);
};

/**
 * @constructor
 * @extends {Template}
 */
tuna.tmpl.units.Template = Template;

/**
 * @interface
 */
var IItemCompiler = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
IItemCompiler.prototype.compile = function(element, settings, template) {};

/**
 * @interface
 * @extends {IItemCompiler}
 */
tuna.tmpl.compilers.IItemCompiler = IItemCompiler;

/**
 * @constructor
 * @param {HTMLDocument} doc
 */
var TemplateCompiler = function(doc) {

    /**
     * @private
     * @type HTMLDocument
     */
    this.__doc = doc;

    /**
     * @private
     * @type Array.<tuna.tmpl.compilers.IItemCompiler>
     */
    this.__itemCompilers = [];

    this.__registerItemCompilers();
};

/**
 * @private
 */
TemplateCompiler.prototype.__registerItemCompilers = function() {
    this.__itemCompilers.push(new tuna.tmpl.compilers.SpotCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.AttributeCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.ConditionCompiler());
    this.__itemCompilers.push
        (new tuna.tmpl.compilers.ListCompiler(this.__doc, this));
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {Node} element
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.Template}
 */
TemplateCompiler.prototype.compileTemplate = function(settings, element, root) {
    var template = new tuna.tmpl.units.Template(root);
    template.setTarget(element);

    var i = 0,
        l = this.__itemCompilers.length;

    while (i < l) {
        this.__itemCompilers[i].compile(element, settings, template);
        i++;
    }

    return template;
};

/**
 * @constructor
 * @extends {TemplateCompiler}
 */
tuna.tmpl.compilers.TemplateCompiler = TemplateCompiler;

/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 */
var SpotCompiler = function() {};

tuna.utils.implement(SpotCompiler, tuna.tmpl.compilers.IItemCompiler);

/**
 * @override
 */
SpotCompiler.prototype.compile = function(element, settings, template) {
    var root = template.getRootTemplate();
    var item = null;

    var itemsSettings = this._getItemsSettings(settings);
    var i = itemsSettings.length - 1;
    while (i >= 0) {
        item = this._createItem(root);

        this._compileItem(element, itemsSettings[i], item);

        template.addItems(item);

        i--;
    }

};

/**
 * @protected
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getSpots();
};

/**
 * @protected
 * @param {tuna.tmpl.units.Template} rootTemplate
 * @return {tuna.tmpl.units.CompiledUnit}
 */
SpotCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Spot(rootTemplate);
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.CompiledUnit} item
 */
SpotCompiler.prototype._compileItem = function(element, settings, item) {
    item.setPath(settings.getDataPath());

    var className = settings.getTargetClass();
    if (tuna.dom.hasClass(element, className)) { // Например если шаблоном является элемент списка
        item.addTargets(element);
    } else {
        item.addTargets(tuna.dom.select('.' + className, element));
    }
};

/**
 * @constructor
 * @extends {SpotCompiler}
 */
tuna.tmpl.compilers.SpotCompiler = SpotCompiler;
/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var AttributeCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
AttributeCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getAttributes();
};

/**
 * @override
 */
AttributeCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Attribute(rootTemplate);
};

/**
 * @override
 */
AttributeCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    item.setAttributeName(settings.getAttributeName());
    item.setEvent(settings.hasEvent());
};

/**
 * @constructor
 * @extends {AttributeCompiler}
 */
tuna.tmpl.compilers.AttributeCompiler = AttributeCompiler;

/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var ConditionCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
ConditionCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getConditions();
};

/**
 * @override
 */
ConditionCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Condition(rootTemplate);
};

/**
 * @override
 */
ConditionCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    var action = this.__createAction
        (settings.getActionType(), settings.getActionData());

    item.setAction(action);

    var operator = this.__createOperator
        (settings.getOperatorType(), settings.getOperatorData());

    item.setOperator(operator);
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionAction}
 */
ConditionCompiler.prototype.__createAction = function(type, data) {
    switch (type) {
        case 'class': return new __ClassAction(data);
    }

    return null;
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionOperator}
 */
ConditionCompiler.prototype.__createOperator = function(type, data) {
    switch (type) {
        case 'isset': return new __IsSetOperator();
        case 'eq': return new __EqualsOperator(data);
        case 'ne': return new __NotEqualsOperator(data);
    }

    return null;
};

tuna.tmpl.compilers.ConditionCompiler = ConditionCompiler;

///////////////////////////////////////////////////////////////////////////
//
//  Operators
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionOperator = function(data) {
    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 * @param {*} value
 * @return {boolean}
 */
__ConditionOperator.prototype.test = function(value) {};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 */
var __IsSetOperator = function() {
    __ConditionOperator.call(this);
};

tuna.utils.extend(__IsSetOperator, __ConditionOperator);

/**
 * @override
 */
__IsSetOperator.prototype.test = function(value) {
    return value !== undefined;
};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __EqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__EqualsOperator, __ConditionOperator);

/**
 * @override
 */
__EqualsOperator.prototype.test = function(value) {
    return value === this._data || (value + '') === this._data;
};


/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __NotEqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__NotEqualsOperator, __ConditionOperator);

/**
 * @override
 */
__NotEqualsOperator.prototype.test = function(value) {
    return !(value == this._data || (value+'') == this._data);
};

///////////////////////////////////////////////////////////////////////////
//
//  Actions
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionAction = function(data) {

    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 *
 * @param {Node} element
 * @param {boolean} testResult
 * @param {*} value
 */
__ConditionAction.prototype.apply = function(element, testResult, value) {};


/**
 * @private
 * @constructor
 * @extends {__ConditionAction}
 * @param {string=} data
 */
var __ClassAction = function(data) {
    __ConditionAction.call(this, data);

    /**
     * @private
     * @type *
     */
    this.__lastName = null;
};

tuna.utils.extend(__ClassAction, __ConditionAction);

/**
 * @override
 */
__ClassAction.prototype.apply = function(element, testResult, value) {
    var className = this._data;

    if (className !== '') {
        if (testResult) {
            tuna.dom.addClass(element, className);
        } else {
            tuna.dom.removeClass(element, className);
        }

    } else if (this.__lastName !== value && testResult) {
        if (this.__lastName !== null) {
            tuna.dom.removeClass(element, this.__lastName + '');
        }

        tuna.dom.addClass(element, value + '');

        this.__lastName = value;
    }

};

/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 * @param {HTMLDocument} doc
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
var ListCompiler = function(doc, compiler) {
    this.__doc = doc;
    this.__templateCompiler = compiler;
};

tuna.utils.implement(ListCompiler, tuna.tmpl.compilers.IItemCompiler);

/**
 * @override
 */
ListCompiler.prototype.compile = function(element, settings, template) {
    var itemsSettings = settings.getLists();
    var i = itemsSettings.length - 1;
    while (i >= 0) {

        this.__compileLists(element, itemsSettings[i], template);

        i--;
    }
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
ListCompiler.prototype.__compileLists = function(element, settings, template) {
    var root = template.getRootTemplate();
    var lists = [];

    var className = settings.getTargetClass();
    if (tuna.dom.hasClass(element, className)) {
        lists.push(this.__createList(element, settings, root));
    } else {
        var elements = tuna.dom.select('.' + className, element);

        var i = elements.length - 1;
        while (i >= 0) {

            if (tuna.dom.getParentWithClass(elements[i], className, element) === null) {
                lists.push(this.__createList(elements[i], settings, root));
            }

            i--;
        }
    }

    template.addItems(lists);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.List}
 */
ListCompiler.prototype.__createList = function(element, settings, root) {
    var list = new tuna.tmpl.units.List(root);

    list.setCompiler(this.__templateCompiler);

    var renderer = this.__doc.getElementById(settings.getItemRendererID());
    renderer = renderer.cloneNode(true);
    renderer.removeAttribute('id');

    list.setItemRenderer(renderer);
    list.setItemSettings(settings.getItemSettings());
    list.setKeyPath(settings.getItemKeyDataPath());
    list.setPath(settings.getDataPath());

    list.setListNodeRouter(new tuna.tmpl.units.ListContainerRouter(element));

    return list;
};

/**
 * @constructor
 * @extends {ListCompiler}
 */
tuna.tmpl.compilers.ListCompiler = ListCompiler;

/**
 * @private
 * @type {tuna.tmpl.markup.MarkupTemplateBuilder}
 */
tuna.tmpl.__markupBuilder = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

/**
 * @type Object.<string, tuna.tmpl.settings.TemplateSettings>
 */
tuna.tmpl.__settingsTable = {};

/**
 * @param {?string} id
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
tuna.tmpl.getTemplateSettingsById = function(id) {
    if (id !== null) {
        if (tuna.tmpl.__settingsTable[id] === undefined) {
            tuna.tmpl.__settingsTable[id]
                = tuna.tmpl.__markupBuilder.buildSettings(id);
        }

        return tuna.tmpl.__settingsTable[id];
    }

    return null;
};

/**
 * @private
 * @type tuna.tmpl.compilers.TemplateCompiler
 */
tuna.tmpl.__compiler = new tuna.tmpl.compilers.TemplateCompiler(document);

/**
 *
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @return {tuna.tmpl.units.Template}
 */
tuna.tmpl.compile = function(element, settings) {
    return tuna.tmpl.__compiler.compileTemplate(settings, element, null);
};

/**
 * @constructor
 * @param {string} selector
 */
var Module = function(selector) {
    /**
     * @protected
     * @type {string}
     */
    this._selector = selector;
};

/**
 * @return {string}
 */
Module.prototype.getSelector = function() {
    return this._selector;
};

/**
 * @param {Node} context
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Module.prototype.init = function(context, container, options) {
    var instances = [];

    var targets = this._findTargets(context);

    var i = 0,
        l = targets.length;

    var instance = null;
    while (i < l) {
        if (this.__isInContext(targets[i], context)) {
            instance = this.initInstance(targets[i], container, options);
            instance.init && instance.init();

            instances.push(instance);
        }

        i++;
    }

    return instances;
};

/**
 * @protected
 * @param {Node} context
 */
Module.prototype._findTargets = function(context) {
    var targets = tuna.dom.select(this._selector, context);
    targets = targets.concat(tuna.dom.filter(this._selector, [context]));

    return targets;
};

/**
 * @private
 * @param {Node} target
 * @param {Node} context
 */
Module.prototype.__isInContext = function(target, context) {
    var result = true;

    var isolators = tuna.ui.modules.getIsolators();

    var i = 0,
        l = isolators.length;
    while (i < l) {
        result = result && tuna.dom.getParentMatches
                            (target, isolators[i], context) === null;

        if (!result) {
            break;
        }

        i++;
    }


    return result;
};

/**
 * @param {Array.<tuna.ui.ModuleInstance>} instances
 */
Module.prototype.destroy = function(instances) {
    var i = 0,
        l = instances.length;

    while (i < l) {
        this.destroyInstance(instances[i]);

        i++;
    }

};

/**
 * @param {!Node} target
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {tuna.ui.ModuleInstance}
 */
Module.prototype.initInstance = function(target, container, options) {};

/**
 * @param {tuna.ui.ModuleInstance} instance
 */
Module.prototype.destroyInstance = function(instance) {};

/**
 * @constructor
 * @extends {Module}
 */
tuna.ui.Module = Module;


/**
 * @constructor
 * @extends {tuna.events.EventDispatcher}
 * @param {!Node} target
 */
var ModuleInstance = function(target) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type !Node
     */
    this._target = target;

    /**
     * @type boolean
     * @protected
     */
    this._isEnabled = true;

    /**
     * @private
     * @type Object.<string, ?string>
     */
    this.__defaultOptions = {};
};

tuna.utils.extend(ModuleInstance, tuna.events.EventDispatcher);

/**
 * @return {Node}
 */
ModuleInstance.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return {string}
 */
ModuleInstance.prototype.getName = function() {
    return this._target.getAttribute('data-name');
};


/**
 * @param {boolean} isEnabled
 */
ModuleInstance.prototype.setEnabled = function(isEnabled) {
    this._isEnabled = isEnabled;
};

/**
 * @return {boolean}
 */
ModuleInstance.prototype.isEnabled = function() {
    return this._isEnabled;
};

/**
 * @protected
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype._setDefaultOption = function(name, option) {
    this.__defaultOptions[name] = option;
};

/**
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype.setOption = function(name, option) {
    if (option) {
        this._target.setAttribute('data-' + name, option);
    } else {
        this._target.removeAttribute('data-' + name);
    }
};

/**
 * @param {string} name
 * @return {?string}
 */
ModuleInstance.prototype.getOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};

/**
 * @return {Object}
 */
ModuleInstance.prototype.getOptions = function() {
    return tuna.dom.getAttributesData(this._target);
};

/**
 *
 */
ModuleInstance.prototype.init = function() {};

/**
 *
 */
ModuleInstance.prototype.destroy = function() {};

/**
 * @constructor
 * @extends {ModuleInstance}
 */
tuna.ui.ModuleInstance = ModuleInstance;
/**
 * @private
 * @type Object.<string, tuna.ui.Module>
 */
tuna.ui.modules.__typeTable = {};

/**
 * @private
 * @type Array.<string>
 */
tuna.ui.modules.__isolators = [];

/**
 * @param {string} type
 * @param {tuna.ui.Module} module
 * @param {boolean=} isIsolator
 */
tuna.ui.modules.register = function(type, module, isIsolator) {
    tuna.ui.modules.__typeTable[type] = module;

    if (isIsolator) {
        tuna.ui.modules.__isolators.push(module.getSelector());
    }
};

/**
 * @param {string} type
 * @return {tuna.ui.Module}
 */
tuna.ui.modules.getModule = function(type) {
    if (tuna.ui.modules.__typeTable[type] !== undefined) {
        return tuna.ui.modules.__typeTable[type];
    }

    return null;
};

/**
 * @return Array.<string>
 */
tuna.ui.modules.getIsolators = function() {
    return tuna.ui.modules.__isolators;
};

/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Container = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type Object.<string, Array>
     */
    this.__moduleArgs = {};

    /**
     * @type Object.<string, Array.<tuna.ui.ModuleInstance>>
     */
    this.__moduleInstances = {};
};

tuna.utils.extend(Container, tuna.ui.ModuleInstance);

/**
 * @override
 */
Container.prototype.getName = function() {
    return this._target.id;
};

/**
 * @param {Node} element
 */
Container.prototype.render = function(element) {
    if (element !== undefined) {
        this.clear();
        this._target.appendChild(element);
    }
};

/**
 *
 */
Container.prototype.clear = function() {
    this._target.innerHTML = '';
};

/**
 * @param {string} type
 * @param {...} var_args
 */
Container.prototype.requireModule = function(type, var_args) {
    var args = tuna.utils.toArray(arguments);
    args.shift();

    if (this.__moduleArgs[type] === undefined) {
        this.__moduleArgs[type] = [null];
    }

    if (args.length > 0) {
        this.__moduleArgs[type].push(args);
    } else {
        this.__moduleArgs[type][0] = [];
    }
};

/**
 *
 * @param {Node=} target
 */
Container.prototype.initModules = function(target) {
    target = target || this._target;

    var module = null;
    var instances = null;
    for (var type in this.__moduleArgs) {
        module = tuna.ui.modules.getModule(type);

        if (module !== null) {
            if (this.__moduleInstances[type] === undefined) {
                this.__moduleInstances[type] = [];
            }

            instances
                = this.__initModule(module, target, this.__moduleArgs[type]);

            this.__moduleInstances[type]
                = this.__moduleInstances[type].concat(instances);

        } else {
            alert('Unknown module "' + type + '"');
        }
    }
};

/**
 * @param {string} type
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.getModuleInstances = function(type) {
    if (this.__moduleInstances[type] !== undefined) {
        return this.__moduleInstances[type];
    }

    return null;
};

/**
 * @param {string} type
 * @return {tuna.ui.ModuleInstance}
 */
Container.prototype.getOneModuleInstance = function(type) {
    if (this.__moduleInstances[type] !== undefined &&
        this.__moduleInstances[type][0] !== undefined) {
        return this.__moduleInstances[type][0];
    }

    return null;
};

Container.prototype.getModuleInstanceByName = function(type, name) {
    if (this.__moduleInstances[type] !== undefined) {
        var instances = this.__moduleInstances[type];

        var i = 0,
            l = instances.length;

        while (i < l) {
            if (instances[i].getName() === name) {
                return instances[i];
            }

            i++;
        }
    }

    return null;
};

/**
 *
 */
Container.prototype.destroyModules = function() {
    for (var name in this.__moduleInstances) {
        tuna.ui.modules.getModule(name)
                       .destroy(this.__moduleInstances[name]);

        this.__moduleInstances[name].length = 0;
    }
};

/**
 * @param {tuna.ui.Module} module
 * @param {Node} target
 * @param {Array} moduleArgs
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.__initModule = function(module, target, moduleArgs) {
    var result = [];

    var commonArgs = [target, this];

    var i = moduleArgs.length - 1;
    while (i >= 0) {
        if (moduleArgs[i] !== null) {
            result = result.concat(
                module.init.apply(module, commonArgs.concat(moduleArgs[i]))
            );
        }

        i--;
    }

    return result;
};

/**
 * @constructor
 * @extends {Container}
 */
tuna.ui.containers.Container = Container;

/**
 * @constructor
 * @extends {tuna.ui.containers.Container}
 * @param {!Node} target
 */
var ControlContainer = function(target) {
    tuna.ui.containers.Container.call(this, target);

    /**
     * @private
     * @type tuna.view.ViewController
     */
    this.__controller = null;

    this._setDefaultOption('init-event', null);
};

tuna.utils.extend(ControlContainer, tuna.ui.containers.Container);

/**
 * @override
 */
ControlContainer.prototype.render = function(element) {
    tuna.ui.containers.Container.prototype.render.call(this, element);

    if (this.__controller !== null) {
        this.__controller.init();
    }
};

/**
 * @override
 */
ControlContainer.prototype.clear = function() {
    tuna.ui.containers.Container.prototype.clear.call(this);

    if (this.__controller !== null) {
        this.__controller.destroy();
    }
};

/**
 * @override
 */
ControlContainer.prototype.init = function() {
    if (this.getOption('is-auto-init')) {
        this.initController();
    }
};

/**
 * @public
 */
ControlContainer.prototype.initController = function() {
    this.__controller = tuna.view.getController(this._target);

    if (this.__controller !== null) {
        this.__controller.setContainer(this);
        this.__controller.bootstrap();
    } else {
        alert('Can\'t find controller for ' + this._target.tagName +
                                        '#' + this._target.id);
    }
};

/**
 * @public
 * @return tuna.view.ViewController
 */
ControlContainer.prototype.getController = function() {
    return this.__controller;
};

tuna.ui.containers.ControlContainer = ControlContainer;

/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Popup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type boolean
     */
    this.__isInit = false;
};

tuna.utils.extend(Popup, tuna.ui.ModuleInstance);

/**
 * @override
 */
Popup.prototype.init = function() {
    if (!this.__isInit) {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-close', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.close();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-apply', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.apply();
            }
        );
    }
};

/**
 * @return {boolean}
 */
Popup.prototype.isOpen = function() {
    return tuna.dom.hasClass(this._target, 'show');
};

/**
 *
 */
Popup.prototype.open = function() {
    if (this.dispatch('popup-open')) {
        this.__show();
    }
};

/**
 *
 */
Popup.prototype.close = function() {
    if (this.dispatch('popup-close')) {
        this.__hide();
    }
};

/**
 *
 */
Popup.prototype.apply = function() {
    if (this.dispatch('popup-apply', this.__collectData())) {
        this.__hide();
    }
};

/**
 * @private
 */
Popup.prototype.__hide = function() {
    tuna.dom.removeClass(this._target, 'show');
};

/**
 * @private
 */
Popup.prototype.__show = function() {
    tuna.dom.addClass(this._target, 'show');
};

/**
 * @private
 * @return {Object.<string, string>}
 */
Popup.prototype.__collectData = function() {
    var form = tuna.dom.selectOne('form.j-popup-form', this._target);

    if (form !== null) {
        return tuna.ui.forms.Form.serialize(form);
    }

    return null;
};

/**
 * @constructor
 * @extends {Popup}
 */
tuna.ui.popups.Popup = Popup;
/**
 * @private
 * @type {Object.<string, tuna.ui.popups.Popup>}
 */
tuna.ui.popups.__idTable = {};

/**
 * @private
 * @type number
 */
tuna.ui.popups.__lastId = 0;

/**
 * @param {!Node} target
 * @return {tuna.ui.popups.Popup}
 */
tuna.ui.popups.create = function(target) {
    if (target.id === '') {
        target.id = 'popup_' + tuna.ui.popups.__lastId++;
    }

    if (tuna.ui.popups.__idTable[target.id] === undefined) {
        var popup = new tuna.ui.popups.Popup(target);
        popup.init();

        tuna.ui.popups.__idTable[target.id] = popup;
    }

    return tuna.ui.popups.__idTable[target.id];
};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__alert = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__alertMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerAlert = function(target) {
    tuna.ui.popups.__alert = tuna.ui.popups.create(target);
    tuna.ui.popups.__alert.init();
    tuna.ui.popups.__alertMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 */
tuna.ui.popups.alert = function(message) {
    tuna.ui.popups.__alertMessage.innerHTML = message;
    tuna.ui.popups.__alert.open();
};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__confirm = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__confirmMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerConfirm = function(target) {
    tuna.ui.popups.__confirm  = tuna.ui.popups.create(target);
    tuna.ui.popups.__confirm.init();
    tuna.ui.popups.__confirmMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 * @param {function(boolean)} callback
 */
tuna.ui.popups.confirm = function(message, callback) {
    tuna.ui.popups.__confirmMessage.innerHTML = message;

    var okHandler = function(event) {
        callback && callback(true);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    var cancelHandler = function(event) {
        callback && callback(false);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    tuna.ui.popups.__confirm.addEventListener('popup-apply', okHandler);
    tuna.ui.popups.__confirm.addEventListener('popup-close', cancelHandler);

    tuna.ui.popups.__confirm.open();
};



/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Button = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type boolean
     */
    this.__isInit = false;
};

tuna.utils.extend(Button, tuna.ui.ModuleInstance);

/**
 * @override
 */
Button.prototype.init = function() {
    if (!this.__isInit) {
        this.__isInit = true;
    }
};

/**
 * @param {boolean} isEnabled
 */
Button.prototype.setEnabled = function(isEnabled) {
    this._isEnabled = isEnabled;
    tuna.dom.setClassExist(this._target, 'disabled', !isEnabled);
};

/**
 * @param {boolean} isActive
 */
Button.prototype.setActive = function(isActive) {
    tuna.dom.setClassExist(this._target, 'active', isActive);
};

/**
 * @constructor
 * @extends {Button}
 */
tuna.ui.buttons.Button = Button;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var ButtonGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {?string}
     */
    this.__defaultAction = null;

    this._setDefaultOption('button-selector', '.j-button');
};

tuna.utils.extend(ButtonGroup, tuna.ui.ModuleInstance);

/**
 * @param {string} action
 */
ButtonGroup.prototype.setDefaultAction = function(action) {
    this.__defaultAction = action;
};

/**
 * @override
 */
ButtonGroup.prototype.init = function() {
    var self = this;

    var buttonSelector = this.getOption('button-selector');
    if (buttonSelector !== null) {
        tuna.dom.addChildEventListener(
            this._target, buttonSelector, 'click', function(event) {
                tuna.dom.preventDefault(event);

                var button = tuna.ui.buttons.create(this);
                var action = button.getOption('action');
                if (action === null) {
                    action = self.__defaultAction;
                }

                if (action !== null) {
                    if (!self.dispatch(action, button)) {
                        tuna.dom.stopPropagation(event);
                    }
                }
            }
        );
    }
};


/**
 * @constructor
 * @extends {ButtonGroup}
 */
tuna.ui.buttons.ButtonGroup = ButtonGroup;
/**
 * @private
 * @type {Object.<string, tuna.ui.buttons.Button>}
 */
tuna.ui.buttons.__idTable = {};

/**
 * @private
 * @type number
 */
tuna.ui.buttons.__lastId = 0;

/**
 * @param {!Node} target
 * @return {tuna.ui.buttons.Button}
 */
tuna.ui.buttons.create = function(target) {
    if (target.id === '') {
        target.id = 'button_' + tuna.ui.buttons.__lastId++;
    }

    if (tuna.ui.buttons.__idTable[target.id] === undefined) {
        var button = new tuna.ui.buttons.Button(target);
        button.init();

        tuna.ui.buttons.__idTable[target.id] = button;
    }

    return tuna.ui.buttons.__idTable[target.id];


};
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var SWF = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {string}
     */
    this.__movieId = '';

    /**
     * @private
     * @type HTMLObjectElement
     */
    this.__movie = null;

    this._setDefaultOption('wmode', 'direct');
    this._setDefaultOption('menu', false);
    this._setDefaultOption('allow-fullscreen', false);
    this._setDefaultOption('allow-script-access', 'always');
};

tuna.utils.extend(SWF, tuna.ui.ModuleInstance);

/**
 * @override
 */
SWF.prototype.init = function() {
    if (this._target.id === '') {
        this._target.id = 'swf_' + tuna.ui.flash.__lastId++;
    }

    this.__movieId = this._target.id;

    swfobject.embedSWF(
        this.getOption('src'), this._target.id,
        this.getOption('width'), this.getOption('height'),
        '10.0.0', null, this.getOption('flashvars'), {
            'wmode': this.getOption('wmode'),
            'allowfullscreen': this.getOption('allow-fullscreen'),
            'allowscriptaccess': this.getOption('allow-script-access'),
            'menu': this.getOption('menu')
        }
    );
};

/**
 * @return {HTMLObjectElement}
 */
SWF.prototype.getMovie = function() {
    if (this.__movie === null) {
        this.__movie = swfobject.getObjectById(this.__movieId);
    }

    return this.__movie;
};


/**
 * @constructor
 * @extends {SWF}
 */
tuna.ui.flash.SWF = SWF;
/**
 * @private
 * @type number
 */
tuna.ui.flash.__lastId = 0;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Form = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type Node
     */
    this.__formMessage = null;

    /**
     * @private
     * @type Object.<string, tuna.ui.forms.FormInput>
     */
    this.__inputTable = {};

    /**
     * @private
     * @type string
     */
    this.__callbackName = Form.CALLBACK_PREFIX + (Math.random() + '').substr(2);

    /**
     * @private
     * @type ?string
     */
    this.__recordName = null;
};

tuna.utils.extend(Form, tuna.ui.ModuleInstance);

/**
 * @const
 * @type string
 */
Form.CALLBACK_PREFIX = 'form_callback';

/**
 * @override
 */
Form.prototype.init = function() {
    this.__recordName = this.getOption('record-type');
    this.__formMessage = tuna.dom.selectOne('.j-form-message', this._target);


    var callbackInput = document.createElement('input');
    callbackInput.setAttribute('type', 'hidden');
    callbackInput.setAttribute('name', '__callback');

    this._target.appendChild(callbackInput);

    var self = this;
    var prepareListener = function(event) {
        if (self._isEnabled) {
            callbackInput.setAttribute('value', self.__callbackName);
            self.__prepareTo(event.type, event);
        } else {
            tuna.dom.preventDefault(event);
        }
    };

    tuna.dom.addEventListener(this._target, 'submit', prepareListener);
    tuna.dom.addEventListener(this._target, 'reset', prepareListener);

    window[this.__callbackName] = function(response) {
        self.__handleResponse(response);
    };
};

/**
 * @param {string} name
 * @return {string|number|Object}
 */
Form.prototype.getValue = function(name) {
    var data = Form.serialize(this._target);

    if (data[name] !== undefined) {
        return data[name];
    }

    return null;
};

/**
 * 
 */
Form.prototype.submit = function() {
    this.__prepareTo('submit');
    this._target.submit();
};

/**
 *
 */
Form.prototype.reset = function() {
    this.__prepareTo('reset');
    this._target.reset();
};

/**
 * @param {string} type
 * @param {Event=} event
 */
Form.prototype.__prepareTo = function(type, event) {
    if (this.dispatch(type)) {
        this.__clearMessage();
        this.__clearInputs();
    } else if (event !== undefined) {
        tuna.dom.preventDefault(event);
    }
};

/**
 * @private
 * @param {Object} data
 */
Form.prototype.__handleResponse = function(data) {
    var response = data['response'];
    var errors = data['errors'];

    if (response !== undefined) {
        if (this.__recordName !== null) {
            response = tuna.rest.populateRecords(response, this.__recordName);
        }

        this.dispatch('result', response);
    } else if (errors !== undefined) {
        this.__showErrors(errors);
        this.dispatch('error', errors);
    }
};

/**
 * @private
 * @param {Array.<Object>} errors
 */
Form.prototype.__showErrors = function(errors) {
    var i = 0,
        l = errors.length;

    var error = null;
    while (i < l) {
        error = errors[i];
        if (error['param'] !== undefined) {
            this.__showInputError(error['param'], error['message']);
        } else {
            this.__showErrorMessage(error['message']);
        }

        i++;
    }
};

/**
 * @private
 * @param {string} name
 * @return {tuna.ui.forms.FormInput}
 */
Form.prototype.__getFormInput = function(name) {
    var result = null;

    if (this.__inputTable[name] === undefined) {
        var inputWrapper
            = tuna.dom.selectOne('.j-' + name + '-input', this._target);

        if (inputWrapper !== null) {
            var input = new tuna.ui.forms.FormInput(inputWrapper);
            input.init();

            this.__inputTable[name] = input;
        }
    }

    if (this.__inputTable[name] !== undefined) {
        result = this.__inputTable[name];
    }

    return result;
};

/**
 * @private
 */
Form.prototype.__clearMessage = function() {
    if (this.__formMessage !== null) {
        this.__formMessage.innerHTML = '';
        tuna.dom.addClass(this.__formMessage, 'hide');
    }
};

/**
 * @private
 * @param {string} message
 */
Form.prototype.__showErrorMessage = function(message) {
    if (this.__formMessage !== null) {
        this.__formMessage.innerHTML += message + '<br />';
        tuna.dom.removeClass(this.__formMessage, 'hide');
    }
};

/**
 * @private
 * @param {string} name
 * @param {string} message
 */
Form.prototype.__showInputError = function(name, message) {
    var formInput = this.__getFormInput(name);
    if (formInput !== null) {
        formInput.showErrorMessage(message);
    } else {
        this.__showErrorMessage(message);
    }
};

/**
 * @private
 */
Form.prototype.__clearInputs = function() {
    for (var name in this.__inputTable) {
        this.__inputTable[name].cleanup();
    }
};

/**
 * @param {Node} formElement
 * @return {Object}
 */
Form.serialize = function(formElement) {
    var result = {};

    var elements = formElement.elements;
    var i = 0,
        l = elements.length;

    var name = null;
    while (i < l) {
        name = elements[i].name;

        if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
                result[name] = [result[name]];
            }
            result[name].push(elements[i].value);
        } else {
            result[name] = elements[i].value;
        }

        i++
    }

    return result;
};

/**
 * @constructor
 * @extends {Form}
 */
tuna.ui.forms.Form = Form;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var FormInput = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {Node}
     */
    this.__message = null;

    /**
     * @private
     * @type {string}
     */
    this.__defaultMessage = '';
};

tuna.utils.extend(FormInput, tuna.ui.ModuleInstance);

/**
 * @override
 */
FormInput.prototype.init = function() {
    this.__message = tuna.dom.selectOne('.j-message', this._target);

    if (this.__message !== null) {
        this.__defaultMessage = this.__message.innerHTML;
    }
};

/**
 * @param {string} message
 */
FormInput.prototype.showErrorMessage = function(message) {
    tuna.dom.addClass(this._target, 'error');

    if (this.__message !== null) {
        this.__message.innerHTML = message;
    }
};

/**
 *
 */
FormInput.prototype.cleanup = function() {
    tuna.dom.removeClass(this._target, 'error');
    if (this.__message !== null) {
        this.__message.innerHTML = this.__defaultMessage;
    }
};

/**
 * @constructor
 * @extends {FormInput}
 */
tuna.ui.forms.FormInput = FormInput;
/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var InputFilter = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {Array.<Object>}
     */
    this._data = null;

    /**
     * @private
     * @type {Array.<Object>}
     */
    this._currentData = null;

    /**
     * @protected
     * @type HTMLInputElement
     */
    this._input = null;

    /**
     * @protected
     * @type function(Object):string
     */
    this._itemSerializeCallback = function(item) {
        return item.name !== undefined ? ('' + item.name) : '';
    };

    /**
     * @protected
     * @type tuna.ui.transformers.ITransformer
     */
    this._transformer = new tuna.ui.transformers.TemplateTransformer(target);
};

tuna.utils.extend(InputFilter, tuna.ui.ModuleInstance);

/**
 * @override
 */
InputFilter.prototype.init = function() {
    this._input = tuna.dom.selectOne('input.j-filtration', this._target);
    if (this._input !== null) {
        var self = this;

        var lastValue = null;
        tuna.dom.addEventListener(this._input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                self.filter(this.value);
                lastValue = this.value;
            }
        });
    }

    this._transformer.init();
};

/**
 * @param {function(Object):string} callback
 */
InputFilter.prototype.setItemSerializeCallback = function(callback) {
    this._itemSerializeCallback = callback;
};

/**
 * @param {Array.<Object>} data
 */
InputFilter.prototype.setData = function(data) {
    this._currentData = this._data = data;
    this.update();
};

/**
 * @param {string} term
 */
InputFilter.prototype.filter = function(term) {
    this._currentData = this._filterData(term);
    this.update();
};

/**
 *
 */
InputFilter.prototype.update = function() {
    this._transformer.applyTransform(this._currentData);
};

/**
 *
 */
InputFilter.prototype.clear = function() {
    this._input.value = '';
    this.filter('');
};

/**
 * @protected
 * @param {string} term
 */
InputFilter.prototype._filterData = function(term) {
    var result = [];

    if (!term || term.length === 0) {
        result = this._data;
    } else {
        var needle = term.toUpperCase();

        var i = 0,
            l = this._data.length;

        var core = null;
        while (i < l) {
            core = this._itemSerializeCallback(this._data[i]);

            if (core.toUpperCase().indexOf(needle) !== -1) {
                result.push(this._data[i]);
            }

            i++;
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {InputFilter}
 */
tuna.ui.forms.InputFilter = InputFilter;
/**
 * @constructor
 * @extends {tuna.ui.forms.InputFilter}
 * @param {!Node} target
 */
var Autocomplete = function(target) {
    tuna.ui.forms.InputFilter.call(this, target);

    /**
     * @private
     * @type Array.<string>
     */
    this.__selectedData = null;

    /**
     * @private
     * @type tuna.ui.selection.SelectionGroup
     */
    this.__selectionGroup = new tuna.ui.selection.SelectionGroup(target);

};

tuna.utils.extend(Autocomplete, tuna.ui.forms.InputFilter);

/**
 * @override
 */
Autocomplete.prototype.init = function() {
    tuna.ui.forms.InputFilter.prototype.init.call(this);
    var body = tuna.dom.selectOne('.j-autocomplete-body', this._target);

    var self = this;

    var isOpen = false;
    tuna.dom.addEventListener(this._input, 'focus', function(event) {
        if (!isOpen) {
            tuna.dom.addOneEventListener(
                document.body, 'click', function() {
                    var data = self.getSelectedData();
                    if (data === null) {
                        self.clear();
                    }

                    tuna.dom.addClass(body, 'hide');
                    isOpen = false;
                }
            );

            tuna.dom.removeClass(body, 'hide');

            isOpen = true;
        }
    });

    tuna.dom.addChildEventListener(
        this._target, '.j-autocomplete-item', 'click', function(event) {
            var index = self.__selectionGroup.getItemIndex(this);
            if (index !== null) {
                self.selectIndex(index);
            } else {
                tuna.dom.stopPropagation(event);
            }
        }
    );

    tuna.dom.addEventListener(this._input, 'click', function(event) {
        tuna.dom.stopPropagation(event);
    });

    this.__selectionGroup.setOption('item-selector', '.j-autocomplete-item');
    this.__selectionGroup.init();
};

/**
 * @return {Array.<Object>}
 */
Autocomplete.prototype.getSelectedData = function() {
    return this.__selectedData;
};

/**
 * @param {string} value
 */
Autocomplete.prototype.selectValue = function(value) {
    var filteredData = this._filterData(value);
    if (filteredData.length === 1) {
        this.__selectedData = filteredData[0];
        this._input.value = value;

        this.dispatch('change');
    }
};

/**
 * @param {string|number} index
 */
Autocomplete.prototype.selectIndex = function(index) {
    if (this._currentData.length > 0) {
        this.__selectedData = this._currentData[index];
        this._input.value = this._itemSerializeCallback(this.__selectedData);

        this.dispatch('change');
    }
};

/**
 *
 */
Autocomplete.prototype.clearSelection = function() {
    if (this.__selectedData !== null) {
        this.__selectedData = null;

        this.dispatch('change');
    }
};

/**
 * @override
 */
Autocomplete.prototype.update = function() {
    tuna.ui.forms.InputFilter.prototype.update.call(this);
    this.__selectionGroup.updateView();
    this.clearSelection();
};

/**
 * @constructor
 * @extends {Autocomplete}
 */
tuna.ui.forms.Autocomplete = Autocomplete;
/**
 * @interface
 */
var ITransformHandler = function() {};

/**
 * @param {Node} target
 */
ITransformHandler.prototype.handleTransformStart = function(target) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} createdElements
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleDestroy
    = function(target, removedElements) {};

/**
 * @interface
 * @extends {ITransformHandler}
 */
tuna.ui.transformers.ITransformHandler = ITransformHandler;

/**
 * @interface
 */
var ITransformer = function() {};

/**
 * @param {Object} data
 */
ITransformer.prototype.applyTransform = function(data) {};

/**
 * @param {tuna.ui.transformers.ITransformHandler} handler
 */
ITransformer.prototype.setTransformHandler = function(handler) {};

/**
 * @interface
 * @extends {ITransformer}
 */
tuna.ui.transformers.ITransformer = ITransformer;

/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @implements {tuna.ui.transformers.ITransformer}
 * @param {!Node} target
 */
var TemplateTransformer = function (target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {tuna.tmpl.units.Template}
     */
    this.__template = null;


    /**
     * @private
     * @type {tuna.ui.transformers.ITransformHandler}
     */
    this.__transformHandler = null;
};

tuna.utils.extend(TemplateTransformer, tuna.ui.ModuleInstance);
tuna.utils.implement(TemplateTransformer, tuna.ui.transformers.ITransformer);

/**
 * @override
 */
TemplateTransformer.prototype.init = function() {
    var templateId = this.getOption('template-id');

    var settings = tuna.tmpl.getTemplateSettingsById(templateId);
    if (settings !== null) {
        this.__template = tuna.tmpl.compile(this._target, settings);
    } else {
        alert("Unknown template " + templateId);
    }
};

/**
 * @override
 */
TemplateTransformer.prototype.setTransformHandler = function(handler) {
    this.__transformHandler = handler;
};

/**
 * @override
 */
TemplateTransformer.prototype.applyTransform = function(data) {
    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformStart(this._target);
    }

    this.__template.applyData(new tuna.tmpl.data.DataNode(data));

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformComplete(
            this._target,
            this.__template.fetchCreatedChildren(),
            this.__template.fetchRemovedChildren()
        );
    }
};

/**
 * @override
 */
TemplateTransformer.prototype.destroy = function() {
    this.__template.destroy();

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleDestroy
            (this._target, this.__template.fetchRemovedChildren());
    }

    this.__template = null;
    this.__transformHandler = null;
};

/**
 * @constructor
 * @extends {TemplateTransformer}
 */
tuna.ui.transformers.TemplateTransformer = TemplateTransformer;
/**
 * @interface
 */
var ISelectionGroup = function() {};

/**
 * @return {Array.<string|number>}
 */
ISelectionGroup.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 * @return {boolean}
 */
ISelectionGroup.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionGroup.prototype.clearSelection = function() {};

/**
 *
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
ISelectionGroup.prototype.setIndexEnabled = function(index, isEnabled) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isIndexEnabled = function(index) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
ISelectionGroup.prototype.getItemIndex = function(item) {};

/**
 * @param {string|number} index
 * @return {Node}
 */
ISelectionGroup.prototype.getItemAt = function(index) {};

/**
 * @param {function((string|number), Node)} callback
 */
ISelectionGroup.prototype.mapItems = function(callback) {};

/**
 *
 */
ISelectionGroup.prototype.updateView = function() {};

/**
 * @interface
 * @extends {ISelectionGroup}
 */
tuna.ui.selection.ISelectionGroup = ISelectionGroup;

/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @implements {tuna.ui.selection.ISelectionGroup}
 * @param {!Node} target
 */
var AbstractSelectionGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    this._itemsCollection = null;

    this._selectionView = null;
    this._selectionRule = null;

    this._disabledIndexes = [];
};

tuna.utils.implement(AbstractSelectionGroup, tuna.ui.selection.ISelectionGroup);
tuna.utils.extend(AbstractSelectionGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
AbstractSelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {

    var indexPosition = tuna.utils.indexOf(index, this._disabledIndexes);
    if (isEnabled) {
        if (indexPosition !== -1) {
            this._selectionView.enableItemAt(index);
            this._disabledIndexes.splice(indexPosition, 1);
        }
    } else if (indexPosition === -1) {
        this._selectionView.disableItemAt([index]);
        this._disabledIndexes.push(index);
    }
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isIndexEnabled = function(index) {
    return this._itemsCollection.getItemAt(index) !== null &&
            tuna.utils.indexOf(index, this._disabledIndexes) === -1;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.updateView = function() {
    this._selectionView.update();
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemIndex = function(item) {
    return this._itemsCollection.getItemIndex(item);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemAt = function(index) {
    return this._itemsCollection.getItemAt(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.mapItems = function(callback) {
    this._itemsCollection.mapItems(callback);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getSelectedIndexes = function() {
    return this._selectionRule.getSelectedIndexes();
};

/**
 * @return {?(string|number)}
 */
AbstractSelectionGroup.prototype.getLastSelectedIndex = function() {
    var indexes = this._selectionRule.getSelectedIndexes();
    if (indexes.length > 0) {
        return indexes.pop();
    }

    return null;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.selectIndex = function(index) {
    return this._selectionRule.selectIndex(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isSelected = function(index) {
    return this._selectionRule.isSelected(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.clearSelection = function() {
    this._selectionRule.clearSelection();
};

/**
 * @constructor
 * @extends {AbstractSelectionGroup}
 */
tuna.ui.selection.AbstractSelectionGroup = AbstractSelectionGroup;
/**
 * @constructor
 * @extends {tuna.ui.selection.AbstractSelectionGroup}
 * @param {!Node} target
 * @param {?string} indexAttribute
 */
var SelectionGroup = function(target, indexAttribute) {
    tuna.ui.selection.AbstractSelectionGroup.call(this, target);

    this._setDefaultOption('item-selector', '.j-selection-item');
    this._setDefaultOption('index-attribute', indexAttribute);
    this._setDefaultOption('is-multiple', null);
    this._setDefaultOption('selection-class', 'active');
    this._setDefaultOption('selection-event', 'click');
};

tuna.utils.extend(SelectionGroup, tuna.ui.selection.AbstractSelectionGroup);

/**
 * @override
 */
SelectionGroup.prototype.init = function() {
    var indexAttribute = this.getOption('index-attribute');

    this._itemsCollection = indexAttribute === null ?
            new tuna.ui.selection.items.ElementsCollection():
            new tuna.ui.selection.items.NamedElementsCollection(indexAttribute);

    this._selectionView
        = new tuna.ui.selection.view.ClassSelectionView(this._target);

    this._selectionRule = this.getOption('is-multiple') ?
            new tuna.ui.selection.rule.MultipleSelectionRule() :
            new tuna.ui.selection.rule.SingleSelectionRule();

    this._selectionView.setSelectionClass(this.getOption('selection-class'));
    this._selectionView.setItemSelector(this.getOption('item-selector'));
    this._selectionView.setSelectionGroup(this);
    this._selectionView.setItemsCollection(this._itemsCollection);

    this._selectionRule.setSelectionGroup(this);
    this._selectionRule.setEventDispatcher(this);
    this._selectionRule.setSelectionView(this._selectionView);

    this._selectionView.update();
};

/**
 * @constructor
 * @extends {SelectionGroup}
 */
tuna.ui.selection.SelectionGroup = SelectionGroup;
/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Navigation = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, 'id');

    /**
     * @private
     * @type Object.<string, string>
     */
    this.__openData = null;

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__history = [];

    /**
     * @private
     * @type {tuna.ui.buttons.ButtonGroup}
     */
    this.__controls = null;

    /**
     * @private
     * @type {Object.<string|number, Array.<tuna.ui.buttons.Button>>}
     */
    this.__menuLinks = {};

    this.setOption('is-multiple', null);
    this._setDefaultOption('item-selector', '.j-navigation-page');
    this._setDefaultOption('menu-selector', '.j-navigation-menu');
};

tuna.utils.extend(Navigation, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Navigation.prototype.init = function() {
    tuna.ui.selection.SelectionGroup.prototype.init.call(this);

    var self = this;

    this.addEventListener('deselected', function(event, index) {
        self.__updateMenu(index, false);
        self.dispatch('close');
    });

    this.addEventListener('selected', function(event, index) {
        self.__updateMenu(index, true);
        self.dispatch('open', self.__openData);
    });

    this.__controls = new tuna.ui.buttons.ButtonGroup(this._target);
    this.__controls.setOption('button-selector', '.j-navigation-link');
    this.__controls.setDefaultAction('navigate');

    this.__controls.addEventListener('navigate', function(event, button) {
        var index = button.getOption('href');
        if (index !== null) {
            if (self.navigate(index, button.getOptions())) {
                event.preventDefault();
            }
        }
    });

    this.__controls.addEventListener('back', function(event, button) {
        self.back();
    });

    this.__controls.init();

    this.__initMenu();
};

/**
 * @private
 */
Navigation.prototype.__initMenu = function() {
    var menuSelector = this.getOption('menu-selector');
    var buttonSelector = this.getOption('button-selector');

    if (menuSelector !== null && buttonSelector !== null) {
        var menu = tuna.dom.selectOne(menuSelector, this._target);
        var buttons = tuna.dom.select(buttonSelector, menu);

        var i = 0,
            l = buttons.length;

        var href = null;
        var button = null;
        while (i < l) {
            button = tuna.ui.buttons.create(buttons[i]);
            href = button.getOption('href');
            if (href !== null) {
                if (this.__menuLinks[href] === undefined) {
                    this.__menuLinks[href] = [];
                }

                this.__menuLinks[href].push(button);
            }

            i++;
        }

    }

    var index = this.getLastSelectedIndex();
    if (index !== null) {
        this.__updateMenu(index, true);
    }
};

/**
 *
 * @param {number|string} index
 * @param {boolean} isSelected
 */
Navigation.prototype.__updateMenu = function(index, isSelected) {
    var buttons = this.__menuLinks[index];
    if (buttons !== undefined) {
        var i = 0,
            l = buttons.length;

        while (i < l) {
            buttons[i].setActive(isSelected);

            i++;
        }
    }
};

/**
 * @param {string|number} index
 * @param {Object.<string, string>=} data
 */
Navigation.prototype.navigate = function(index, data) {
    var currentIndex = this.getLastSelectedIndex();
    if (currentIndex !== null) {
        this.__history.push(currentIndex);
    }

    this.__openData = data || null;
    var result = this.selectIndex(index);
    this.__openData = null;

    return result;
};

/**
 *
 */
Navigation.prototype.back = function() {
    this.selectIndex(this.__history.pop());
};

/**
 * @constructor
 * @extends {Navigation}
 */
tuna.ui.selection.Navigation = Navigation;
/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Carousel = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, null);

    /**
     * @private
     * @type number
     */
    this.__shiftIndex = -1;

    this._setDefaultOption('item-selector', '.j-carousel-item');
    this._setDefaultOption('next-button-selector', '.j-carousel-next');
    this._setDefaultOption('back-button-selector', '.j-carousel-back');
};

tuna.utils.extend(Carousel, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Carousel.prototype.init = function() {
    tuna.ui.selection.SelectionGroup.prototype.init.call(this);

    var self = this;

    this.__shiftIndex = this.getLastSelectedIndex();

    tuna.dom.addChildEventListener(
        this._target, this.getOption('next-button-selector'), 'click',
        function(event) {
            tuna.dom.preventDefault(event);
            self.next();
        }
    );

    tuna.dom.addChildEventListener(
        this._target, this.getOption('back-button-selector'), 'click',
        function(event) {
            tuna.dom.preventDefault(event);
            self.back();
        }
    );
};


/**
 *
 */
Carousel.prototype.next = function() {
    this.__shiftIndex++;
    if (this.getItemAt(this.__shiftIndex) === null) {
        this.__shiftIndex = 0;
    }

    this.selectIndex(this.__shiftIndex);
};

/**
 *
 */
Carousel.prototype.back = function() {
    this.__shiftIndex--;
    if (this.getItemAt(this.__shiftIndex) === null) {
        this.__shiftIndex = this._itemsCollection.getItemsCount() - 1;
    }

    this.selectIndex(this.__shiftIndex);
};

/**
 * @constructor
 * @extends {Carousel}
 */
tuna.ui.selection.Carousel = Carousel;
/**
 * @interface
 */
var IItemsCollection = function() {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.addItem = function(item) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.getItemIndex = function(item) {};

/**
* @param {string|number} index
* @return {?Node}
*/
IItemsCollection.prototype.getItemAt = function(index) {};

/**
* @param {function((string|number), Node)} callback
*/
IItemsCollection.prototype.mapItems = function(callback) {};

/**
 *
 */
IItemsCollection.prototype.clear = function() {};

/**
 * @return number
 */
IItemsCollection.prototype.getItemsCount = function() {};

/**
 * @interface
 * @extends {IItemsCollection}
 */
tuna.ui.selection.items.IItemsCollection = IItemsCollection;
/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 */
var ElementsCollection = function() {

    /**
     * @private
     * @type Array.<Node>
     */
    this.__items = [];
};

tuna.utils.implement
    (ElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
ElementsCollection.prototype.addItem = function(item) {
    return this.__items.push(item) - 1;
};

/**
 * @override
 */
ElementsCollection.prototype.getItemIndex = function(item) {
    return tuna.utils.indexOf(item, this.__items);
};

/**
 * @override
 */
ElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
ElementsCollection.prototype.clear = function() {
    this.__items.length = 0;
};

/**
 * @override
 */
ElementsCollection.prototype.mapItems = function(callback) {
    var i = 0,
        l = this.__items.length;

    while (i < l) {
        callback(i, this.__items[i]);

        i++;
    }
};


/**
 * @override
 */
ElementsCollection.prototype.getItemsCount = function() {
    return this.__items.length;
};


/**
 * @constructor
 * @extends {ElementsCollection}
 */
tuna.ui.selection.items.ElementsCollection = ElementsCollection;
/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 * @param {string} indexAttribute
 */
var NamedElementsCollection = function(indexAttribute) {
    /**
     * @private
     * @type string
     */
    this.__indexAttribute = indexAttribute;

    /**
     * @private
     * @type Object.<(string|number), Node>
     */
    this.__items = {};
};

tuna.utils.implement
    (NamedElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
NamedElementsCollection.prototype.addItem = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null) {
        this.__items[index] = item;
    }

    return index;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemIndex = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null && this.__items[index] !== undefined) {
        return index;
    }

    return null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.clear = function() {
    this.__items = {};
};

/**
 * @override
 */
NamedElementsCollection.prototype.mapItems = function(callback) {
    for (var index in this.__items) {
        callback(index, this.__items[index]);
    }
};


/**
 * @override
 */
NamedElementsCollection.prototype.getItemsCount = function() {
    var i = 0;
    for (var index in this.__items) {
        i++;
    }

    return i;
};


/**
 * @constructor
 * @extends {NamedElementsCollection}
 */
tuna.ui.selection.items.NamedElementsCollection = NamedElementsCollection;
/**
 * @interface
 */
var ISelectionRule = function() {};

/**
 * @return Array.<string|number>
 */
ISelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 * @return {boolean}
 */
ISelectionRule.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionRule.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionRule.prototype.clearSelection = function() {};

/**
 * @interface
 * @extends {ISelectionRule}
 */
tuna.ui.selection.rule.ISelectionRule = ISelectionRule;
/**
 * @constructor
 * @implements {tuna.ui.selection.rule.ISelectionRule}
 */
var AbstractSelectionRule = function() {
    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;

    /**
     * @protected
     * @type tuna.ui.selection.view.ISelectionView
     */
    this._selectionView = null;

    /**
     * @protected
     * @type tuna.events.EventDispatcher
     */
    this._eventDispatcher = null;
};

tuna.utils.implement(AbstractSelectionRule, tuna.ui.selection.rule.ISelectionRule);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionRule.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.view.ISelectionView} view
 */
AbstractSelectionRule.prototype.setSelectionView = function(view) {
    this._selectionView = view;
};

/**
 * @param {tuna.events.EventDispatcher} dispatcher
 */
AbstractSelectionRule.prototype.setEventDispatcher = function(dispatcher) {
    this._eventDispatcher = dispatcher;
};

/**
 * @override
 */
AbstractSelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @override
 */
AbstractSelectionRule.prototype.selectIndex = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.isSelected = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.clearSelection = function() {};


/**
 * @constructor
 * @extends {AbstractSelectionRule}
 */
tuna.ui.selection.rule.AbstractSelectionRule = AbstractSelectionRule;
/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var SingleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(number|string)
     */
    this.__currentIndex = null;
};

tuna.utils.extend(SingleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @override
 */
SingleSelectionRule.prototype.getSelectedIndexes = function() {
    if (this.__currentIndex !== null) {
        return [this.__currentIndex];
    }

    return [];
};

/**
 * @override
 */
SingleSelectionRule.prototype.selectIndex = function(index) {
    if (this._selectionGroup.isIndexEnabled(index) &&
        this.__currentIndex !== index &&
        this.__dispatchSelect(index)) {

        var oldIndex = this.__currentIndex;

        if (this.__currentIndex !== null) {
            this._selectionView.destroySelectionAt(this.__currentIndex);
        }

        this._selectionView.applySelectionAt(index);

        this.__currentIndex = index;

        if (oldIndex !== null) {
            this._eventDispatcher.dispatch('deselected', oldIndex)
        }

        this._eventDispatcher.dispatch('selected', index);

        return true;
    }

    return false;
};

/**
 * @private
 * @param {string|number} newIndex
 */
SingleSelectionRule.prototype.__dispatchSelect = function(newIndex) {
    var oldIndex = this.__currentIndex;

    return (oldIndex === null ||
            this._eventDispatcher.dispatch('deselect', oldIndex)) &&
            this._eventDispatcher.dispatch('select', newIndex)
};

/**
 * @override
 */
SingleSelectionRule.prototype.isSelected = function(index) {
    return index === this.__currentIndex;
};

/**
 * @override
 */
SingleSelectionRule.prototype.clearSelection = function() {
    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};

/**
 * @constructor
 * @extends {SingleSelectionRule}
 */
tuna.ui.selection.rule.SingleSelectionRule = SingleSelectionRule;
/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var MultipleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__selectedIndexes = [];
};

tuna.utils.extend
    (MultipleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @override
 */
MultipleSelectionRule.prototype.getSelectedIndexes = function() {
    return tuna.utils.cloneArray(this.__selectedIndexes);
};

/**
 * @override
 */
MultipleSelectionRule.prototype.selectIndex = function(index) {
    if (this._selectionGroup.isIndexEnabled(index)) {
        var indexPosition = tuna.utils.indexOf(index, this.__selectedIndexes);
        if (indexPosition === -1) {
            if (this._eventDispatcher.dispatch('select', index)) {

                this._selectionView.applySelectionAt(index);
                this.__selectedIndexes.push(index);

                return true;
            }
        } else {
            if (this._eventDispatcher.dispatch('deselect', index)) {

                this._selectionView.destroySelectionAt(index);
                this.__selectedIndexes.splice(indexPosition, 1);

                return true;
            }
        }
    }

    return false;
};

/**
 * @override
 */
MultipleSelectionRule.prototype.isSelected = function(index) {
    return tuna.utils.indexOf(index, this.__selectedIndexes) !== -1;
};

/**
 * @override
 */
MultipleSelectionRule.prototype.clearSelection = function() {
    while (this.__selectedIndexes.length > 0) {
        this._selectionView.destroySelectionAt
            (this.__selectedIndexes.shift());
    }
};

/**
 * @constructor
 * @extends {MultipleSelectionRule}
 */
tuna.ui.selection.rule.MultipleSelectionRule = MultipleSelectionRule;

/**
 * @interface
 */
var ISelectionView = function() {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.disableItemAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.enableItemAt = function(index) {};

/**
 *
 */
ISelectionView.prototype.update = function() {};

/**
 * @interface
 * @extends {ISelectionView}
 */
tuna.ui.selection.view.ISelectionView = ISelectionView;
/**
 * @constructor
 * @implements {tuna.ui.selection.view.ISelectionView}
 */
var AbstractSelectionView = function() {
    /**
     * @protected
     * @type tuna.ui.selection.items.IItemsCollection
     */
    this._itemsCollection = null;

    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;
};

tuna.utils.implement
    (AbstractSelectionView, tuna.ui.selection.view.ISelectionView);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionView.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
AbstractSelectionView.prototype.setItemsCollection = function(collection) {
    this._itemsCollection = collection;
};

/**
 * @override
 */
AbstractSelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.disableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.enableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.update = function() {};

/**
 * @constructor
 * @extends {AbstractSelectionView}
 */
tuna.ui.selection.view.AbstractSelectionView = AbstractSelectionView;
/**
 * @constructor
 * @extends {tuna.ui.selection.view.AbstractSelectionView}
 * @param {!Node} target
 */
var ClassSelectionView = function(target) {
    tuna.ui.selection.view.AbstractSelectionView.call(this);

    /**
     * @private
     * @type !Node
     */
    this._target = target;

    /**
     * @private
     * @type ?string
     */
    this._itemSelector = '';

    /**
     * @private
     * @type string
     */
    this._selectionClass = '';

    /**
     * @private
     * @type string
     */
    this._disabledClass = 'disabled';
};

tuna.utils.extend(ClassSelectionView, tuna.ui.selection.view.AbstractSelectionView);

/**
 * @param {string} selector
 */
ClassSelectionView.prototype.setItemSelector = function(selector) {
    this._itemSelector = selector;
};

/**
 * @param {string} className
 */
ClassSelectionView.prototype.setSelectionClass = function(className) {
    this._selectionClass = className;
};

/**
 * @param {string} className
 */
ClassSelectionView.prototype.setDisabledClass = function(className) {
    this._disabledClass = className;
};

/**
 * @override
 */
ClassSelectionView.prototype.applySelectionAt = function(index) {
    var item = this._itemsCollection.getItemAt(index)
    if (item !== null) {
        tuna.dom.addClass(item, this._selectionClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.destroySelectionAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.removeClass(item, this._selectionClass);
    }
};


/**
 * @override
 */
ClassSelectionView.prototype.disableItemAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.addClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.enableItemAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.removeClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.update = function() {
    if (this._itemSelector !== null) {
        this._selectionGroup.clearSelection();
        this._itemsCollection.clear();

        var possibleItems = tuna.dom.select(this._itemSelector, this._target);

        var i = 0,
            l = possibleItems.length;

        var index = null;
        var item = null;
        while (i < l) {
            item = possibleItems[i];
            if (tuna.dom.getParentMatches
                (item, this._itemSelector, this._target) === null) {

                index = this._itemsCollection.addItem(item);
                if (index !== null &&
                    tuna.dom.hasClass(item, this._selectionClass)) {
                    this._selectionGroup.selectIndex(index);
                }
            }

            i++;
        }
    }
};


tuna.ui.selection.view.ClassSelectionView = ClassSelectionView;

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var FormModule = function() {
    tuna.ui.Module.call(this, 'form.j-form');
};

tuna.utils.extend(FormModule, tuna.ui.Module);

/**
 * @override
 */
FormModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.Form(target);
};

tuna.ui.modules.register('form', new FormModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var NavigationModule = function() {
    tuna.ui.Module.call(this, '.j-navigation');
};

tuna.utils.extend(NavigationModule, tuna.ui.Module);

/**
 * @override
 */
NavigationModule.prototype.initInstance = function(target) {
    return new tuna.ui.selection.Navigation(target);
};

tuna.ui.modules.register('navigation', new NavigationModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupModule = function() {
    tuna.ui.Module.call(this, '.j-popup');
};

tuna.utils.extend(PopupModule, tuna.ui.Module);

/**
 * @override
 * @param target
 */
PopupModule.prototype.initInstance = function(target) {
    return tuna.ui.popups.create(target);
};

tuna.ui.modules.register('popup', new PopupModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupButtonModule = function() {
    tuna.ui.Module.call(this, '.j-popup-button');
};

tuna.utils.extend(PopupButtonModule, tuna.ui.Module);

/**
 * @override
 * @param target
 */
PopupButtonModule.prototype.initInstance = function(target) {
    var popupElement =
        tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

    var popup = null;

    if (popupElement !== null) {
        popup = tuna.ui.popups.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            popup.open();
        });
    }

    return popup;
};

tuna.ui.modules.register('popup-button', new PopupButtonModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SelectionGroupModule = function() {
    tuna.ui.Module.call(this, '.j-selection-group');
};

tuna.utils.extend(SelectionGroupModule, tuna.ui.Module);

/**
 * @override
 */
SelectionGroupModule.prototype.initInstance = function(target) {

    var selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);

    var selectionEvent = selectionGroup.getOption('selection-event');
    var itemSelector = selectionGroup.getOption('item-selector');

    if (selectionEvent !== null && itemSelector !== null) {
        tuna.dom.addChildEventListener(
            target, itemSelector, selectionEvent, function() {
                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );
    }

    return selectionGroup;
};



tuna.ui.modules.register('selection-group', new SelectionGroupModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var TemplateTransformerModule = function() {
    tuna.ui.Module.call(this, '.j-template-transformer');
};

tuna.utils.extend(TemplateTransformerModule, tuna.ui.Module);

/**
 * @override
 */
TemplateTransformerModule.prototype.initInstance = function(target) {
    return new tuna.ui.transformers.TemplateTransformer(target);
};

tuna.ui.modules.register
    ('template-transformer', new TemplateTransformerModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ControlContainerModule = function() {
    tuna.ui.Module.call(this, '.j-control-container');
};

tuna.utils.extend(ControlContainerModule, tuna.ui.Module);

/**
 * @override
 */
ControlContainerModule.prototype._findTargets = function(context) {
    return tuna.dom.select(this._selector, context);
};

/**
 * @override
 */
ControlContainerModule.prototype.initInstance = function(target) {
    return new tuna.ui.containers.ControlContainer(target);
};

tuna.ui.modules.register
    ('control-container', new ControlContainerModule(), true);

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ButtonGroupModule = function() {
    tuna.ui.Module.call(this, '.j-button-group');
};

tuna.utils.extend(ButtonGroupModule, tuna.ui.Module);

/**
 * @override
 * @param target
 */
ButtonGroupModule.prototype.initInstance = function(target) {
    return new tuna.ui.buttons.ButtonGroup(target);
};

tuna.ui.modules.register('button-group', new ButtonGroupModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SWFModule = function() {
    tuna.ui.Module.call(this, '.j-swf');
};

tuna.utils.extend(SWFModule, tuna.ui.Module);

/**
 * @override
 */
SWFModule.prototype.initInstance = function(target) {
    return new tuna.ui.flash.SWF(target);
};

tuna.ui.modules.register('swf', new SWFModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var InputFilterModule = function() {
    tuna.ui.Module.call(this, '.j-input-filter');
};

tuna.utils.extend(InputFilterModule, tuna.ui.Module);

/**
 * @override
 */
InputFilterModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.InputFilter(target);
};

tuna.ui.modules.register('input-filter', new InputFilterModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var AutocompleteModule = function() {
    tuna.ui.Module.call(this, '.j-autocomplete');
};

tuna.utils.extend(AutocompleteModule, tuna.ui.Module);

/**
 * @override
 */
AutocompleteModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.Autocomplete(target);
};

tuna.ui.modules.register('autocomplete', new AutocompleteModule());

/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var CarouselModule = function() {
    tuna.ui.Module.call(this, '.j-carousel');
};

tuna.utils.extend(CarouselModule, tuna.ui.Module);

/**
 * @override
 */
CarouselModule.prototype.initInstance = function(target) {
    return new tuna.ui.selection.Carousel(target);
};

tuna.ui.modules.register('carousel', new CarouselModule());

/**
 * @private
 * @type Object.<string, tuna.view.ViewController>
 */
tuna.view.__idTable = {};

/**
 * @private
 * @type tuna.view.ViewController
 */
tuna.view.__mainController = null;

/**
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.setMainController = function(controller) {
    tuna.view.__mainController = controller;
};

/**
 * @param {!string} targetId
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.registerController = function(targetId, controller) {
    tuna.view.__idTable[targetId] = controller;
};

/**
 * @param {Node} target
 * @return {tuna.view.ViewController}
 */
tuna.view.getController = function(target) {
    if (target === document.body) {
        return tuna.view.__mainController;
    } else if (target !== null &&
               tuna.view.__idTable[target.id] !== undefined) {
        return tuna.view.__idTable[target.id];
    }

    return null;
};

/**
 *
 */
tuna.view.init = function() {
    (new tuna.ui.containers.ControlContainer(document.body)).initController();
};

/**
 * @constructor
 * @implements {tuna.ui.transformers.ITransformHandler}
 */
var ViewController = function() {

    /**
     * @protected
     * @type tuna.ui.containers.Container
     */
    this._container = null;
};

tuna.utils.implement(ViewController, tuna.ui.transformers.ITransformHandler);

/**
 * @param {tuna.ui.containers.Container} container
 */
ViewController.prototype.setContainer = function(container) {
    this._container = container;
};

/**
 *
 */
ViewController.prototype.bootstrap = function() {
    this.init();
};

/**
 *
 */
ViewController.prototype.terminate = function() {
    this.destroy();
};

/**
 * @protected
 */
ViewController.prototype.init = function() {
    this._requireModules();
    this._container.initModules();
    this._initActions();
};

/**
 * @protected
 */
ViewController.prototype._requireModules = function() {};

/**
 * @protected
 */
ViewController.prototype._initActions = function() {};

/**
 * @protected
 */
ViewController.prototype.destroy = function() {
    this._destroyActions();
    this._container.destroyModules();
};

/**
 * @protected
 */
ViewController.prototype._destroyActions = function() {};

/**
 * @override
 */
ViewController.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {

    var i = 0,
        l = createdElements.length;

    while (i < l) {
        this._container.initModules(createdElements[i]);
        i++;
    }
};

/**
 * @override
 */
ViewController.prototype.handleTransformStart = function(target) {};

/**
 * @override
 */
ViewController.prototype.handleDestroy = function(target, removedElements) {};


/**
 * @constructor
 * @extends {ViewController}
 */
tuna.view.ViewController = ViewController;


/**
 * @constructor
 * @extends {tuna.view.ViewController}
 */
var NavigationViewController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @protected
     * @type (tuna.ui.selection.Navigation|tuna.ui.ModuleInstance)
     */
    this._navigation = null;

    /**
     * @protected
     * @type Node
     */
    this._currentPage = null;

    /**
     * @private
     * @type Object.<string, tuna.view.ViewController>
     */
    this.__pageControllers = {};
};

tuna.utils.extend(NavigationViewController, tuna.view.ViewController);

/**
 * @override
 */
NavigationViewController.prototype._requireModules = function() {
    this._container.requireModule('control-container');
    this._container.requireModule('navigation');
};

/**
 * @override
 */
NavigationViewController.prototype._initActions = function() {
    this._navigation = this._container.getOneModuleInstance('navigation');

    if (this._navigation !== null) {
        var self = this;

        this._navigation.addEventListener('select', function(event, index) {
            if (!self._canClose(index)) {
                event.preventDefault();
            }
        });

        this._navigation.addEventListener('open', function(event, data) {
            self._setCurrentPage
                (self._navigation.getLastSelectedIndex(), data);
        });

        var currentIndex = this._navigation.getLastSelectedIndex();
        if (currentIndex !== null) {
            this._setCurrentPage(currentIndex);
        }
    }

};

/**
 * @protected
 * @param {string} index
 * @return {boolean}
 */
NavigationViewController.prototype._canClose = function(index) {
    if (this._currentPage !== null) {
        var controller = this.__getPageController(this._currentPage);
        if (controller !== null) {
            return controller.canClose();
        }
    }

    return true;
};

/**
 * @param {string} index
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._setCurrentPage = function(index, args) {
    var newPage = this._navigation.getItemAt(index);
    var oldPage = this._currentPage;

    if (oldPage !== null) {
        this._handlePageClose(oldPage, newPage);
        this._closePage();
    }

    this._currentPage = newPage;

    this._openPage(args);
    this._handlePageOpen(newPage, oldPage);
};

/**
 * @protected
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._openPage = function(args) {
    if (!this.__isPageInit(this._currentPage)) {
        this.__initPage(this._currentPage);
    }

    var controller = this.__getPageController(this._currentPage);
    if (controller !== null) {
        controller.open(args);
    }
};

/**
 * @protected
 */
NavigationViewController.prototype._closePage = function() {
    var controller = this.__getPageController(this._currentPage);
    if (controller !== null) {
        controller.close();
    }
};

/**
 * @param {Node} page
 * @return {tuna.view.ViewController}
 */
NavigationViewController.prototype.__getPageController = function(page) {
    return this.__pageControllers[page.id];
};

/**
 * @private
 * @param {Node} page
 */
NavigationViewController.prototype.__initPage = function(page) {
    var controller = null;
    var container
        = this._container.getModuleInstanceByName('control-container', page.id);

    if (container !== null) {
        container.initController();
        controller = container.getController();
    }

    if (controller !== null) {
        controller.setNavigation(this._navigation);
    }

    this.__pageControllers[page.id] = controller;
};

/**
 * @private
 * @param {Node} page
 * @return {boolean}
 */
NavigationViewController.prototype.__isPageInit = function(page) {
    return this.__pageControllers[page.id] !== undefined;
};

/**
 * @protected
 * @param {Node} currentPage
 * @param {Node} newPage
 */
NavigationViewController.prototype._handlePageClose
    = function(currentPage, newPage) {};

/**
 * @protected
 * @param {Node} currentPage
 * @param {?Node} oldPage
 */
NavigationViewController.prototype._handlePageOpen
    = function(currentPage, oldPage) {};

/**
 * @constructor
 * @extends {NavigationViewController}
 */
tuna.view.NavigationViewController = NavigationViewController;

/**
 * @constructor
 * @extends {tuna.view.ViewController}
 */
var PageViewController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @protected
     * @type tuna.ui.selection.Navigation
     */
    this._navigation = null;
};

tuna.utils.extend(PageViewController, tuna.view.ViewController);

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
PageViewController.prototype.setNavigation = function(navigation) {
    this._navigation = navigation;
};

/**
 * @return {tuna.ui.selection.Navigation} navigation
 */
PageViewController.prototype.getNavigation = function() {
    return this._navigation;
};

/**
 * @param {string} index
 */
PageViewController.prototype.canClose = function(index) {
    return true;
};

/**
 *
 */
PageViewController.prototype.close = function() {};

/**
 * @param {Object.<string, string>} args
 */
PageViewController.prototype.open = function(args) {};

/**
 * @constructor
 * @extends {PageViewController}
 */
tuna.view.PageViewController = PageViewController;
/**
 * @namespace
 */
var model = {};

/**
 * @namespace
 */
model.records = {};

/**
 * @namespace
 */
var rest = {};

/**
 * @namespace
 */
rest.social = {};

/**
 * @namespace
 */
rest.social.vk = {};

/**
 * @namespace
 */
rest.social.vk.friends = {};

/**
 * @namespace
 */
rest.social.vk.users = {};

/**
 * @namespace
 */
rest.social.vk.wall = {};

/**
 * @namespace
 */
rest.social.ok = {};

/**
 * @namespace
 */
rest.social.ok.users = {};

/**
 * @namespace
 */
var ui = {};

/**
 * Точка входа в приложение
 */
function main() {
    tuna.utils.config.init(tuna.utils.decodeSearch(location.search));

    tuna.dom.setSelectorEngine(jQuery.find);

    tuna.ui.popups.registerConfirm(tuna.dom.selectOne('#confirm_popup'));

    tuna.view.init();
}
(function() {

    var DataImage = function(target) {
        tuna.events.EventDispatcher.call(this);
        
        this.__targetImage = target;
    };

    tuna.utils.extend(DataImage, tuna.events.EventDispatcher);

    DataImage.prototype.getTarget = function() {
        return this.__targetImage;
    };

    DataImage.prototype.setData = function(data, type) {
        if (type === undefined) {
            type = 'image/jpeg';
        }

        if (!tuna.utils.IS_IE) {
            this.__targetImage.src = 'data:' + type + ';base64,' + data;
            this.dispatch('loaded', this.__targetImage);
        } else {
            var self = this;
            var form = document.createElement('form');
            form.method = 'POST';
            form.target = 'support_frame';
            form.action = '/api/?method=utils.base64Echo&type=' + type;

            var dataInput = document.createElement('input');
            dataInput.type = 'hidden';
            dataInput.name = 'data';
            dataInput.value = data;

            form.appendChild(dataInput);
            
            document.body.appendChild(form);

            var frame = tuna.dom.selectOne('#support_frame');
            tuna.dom.addOneEventListener(frame, 'load', function() {
                var image = tuna.dom.selectOne
                    ('img', frame.contentWindow.document.body);

                if (image !== null) {
                    self.__replaceTarget(image);
                } else {
                    self.dispatch('error');
                }

                document.body.removeChild(form);
            });

            form.submit();
        }
    };

    DataImage.prototype.__replaceTarget = function(image) {
        var parent = this.__targetImage.parentNode;
        if (parent !== null) {
            parent.replaceChild(image, this.__targetImage);

            if (this.__targetImage.id !== null) {
                image.id = this.__targetImage.id;
            }

            this.__targetImage = image;

            this.dispatch('loaded', this.__targetImage);
        } else {
            this.dispatch('error');
        }
    };

    var idTable = {};

    DataImage.create = function(target) {
        if (target.id !== null) {
            if (idTable[target.id] === undefined) {
                idTable[target.id] = new DataImage(target);
            }

            return idTable[target.id];
        }

        return new DataImage(target);
    };

    ui.DataImage = DataImage;
})();
(function() {
    var ImagePopup = function() {
        tuna.ui.Module.call(this, 'img.j-image-popup');
    };

    tuna.utils.extend(ImagePopup, tuna.ui.Module);

    ImagePopup.prototype.initInstance = function(target) {
        var popupElement = tuna.dom.selectOne('#image_popup');
        var popup = tuna.ui.popups.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);

            var altText = tuna.dom.selectOne('.j-alt-text', popupElement);
            var image = tuna.dom.selectOne('.j-popup-image', popupElement);

            altText.innerText = target.getAttribute('alt');
            image.src = target.getAttribute('data-image-src');

            popup.open();
        });

        return popup;
    };

    tuna.ui.modules.register('image-popup', new ImagePopup());
    
})();
(function() {

    var Datepicker = function() {
        tuna.ui.Module.call(this, 'input.j-datepicker');
    };

    tuna.utils.extend(Datepicker, tuna.ui.Module);

    Datepicker.prototype.initInstance = function(target) {
        var minTime = (new Date().getTime() + 3*24*60*60*1000);

        $(target).keydown(function(event){ event.preventDefault(); })
                 .datepicker({
                     'minDate': new Date(minTime)
                 });

        return target;
    };

    tuna.ui.modules.register('datepicker', new Datepicker());
    
})();
(function() {

    var DataImage = function() {
        tuna.ui.Module.call(this, 'img.j-data-image');
    };

    tuna.utils.extend(DataImage, tuna.ui.Module);

    DataImage.prototype.initInstance = function(target, container, options) {
        return ui.DataImage.create(target);
    };

    tuna.ui.modules.register('data-image', new DataImage());
})();

(function() {

    var DataImageCopy = function() {
        tuna.ui.Module.call
            (this, 'img.j-data-image-copy');
    };

    tuna.utils.extend(DataImageCopy, tuna.ui.Module);

    DataImageCopy.prototype.initInstance = function(target) {
        var imageSelector = target.getAttribute('data-image-selector');
        if (imageSelector !== null) {
            var currentImage = target;

            var targetDataImage = ui.DataImage.create
                                    (tuna.dom.selectOne(imageSelector));

            var replaceImage = function() {
                var image = targetDataImage.getTarget();
                var parent = currentImage.parentNode;
                if (parent !== null) {
                    var newImage = image.cloneNode(false);
                    newImage.id = currentImage.id;
                    newImage.className = currentImage.className;

                    parent.replaceChild(newImage, currentImage);

                    currentImage = newImage;
                }
            };

            targetDataImage.addEventListener('loaded', replaceImage);
            replaceImage();

            return currentImage;
        }

        return null;
    };

    tuna.ui.modules.register('data-image-copy', new DataImageCopy());
})();

(function() {
    var FriendsPopup = function() {
        tuna.ui.Module.call(this, '.j-friends-popup');
    };

    tuna.utils.extend(FriendsPopup, tuna.ui.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        var popup = null;
        var self = this;

        var popupElement =
                tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

        var inputFilter = new tuna.ui.forms.InputFilter(popupElement);

        if (popupElement !== null) {
            popup = tuna.ui.popups.create(popupElement);

            tuna.dom.addEventListener(target, 'click', function(event) {
                popup.open();
            });
        }

        tuna.rest.call('social.friends.get', null, function(result) {
            inputFilter.setData(result);
        });


        tuna.dom.addChildEventListener(
            popupElement, '.j-send-button', 'click', function() {
                self.postImage(this.getAttribute('data-user-id'));
            }
        );

        inputFilter.init();

        return this;
    };

    FriendsPopup.prototype.postImage = function(userId) {
        var currentCake = model.cakes.getCurrentCake();

        tuna.rest.call('social.wall.post', {
            'image': currentCake.imageBase64,
            'user_id': userId
        }, function() {
            tuna.ui.popups.alert('Торт успешно опубликован!');
        });
    };

    tuna.ui.modules.register('friends-popup', new FriendsPopup());

})();
/**
 * @constructor
 * @extends {tuna.rest.Method}
 * @param {string} name
 */
var CommonMethod = function (name) {
    tuna.rest.Method.call(this, name);
    
    /**
     * @private
     * @type tuna.net.Request
     */
    this.__request = new tuna.net.Request();
    this.__request.method = 'POST';
    this.__request.setURL('/api/?method=' + name);

    var self = this;
    this.__request.addEventListener('complete', function(event, data) {
        self._handleResponse(data);
    });
};

tuna.utils.extend(CommonMethod, tuna.rest.Method);

/**
 * @override
 */
CommonMethod.prototype.call = function(args) {
    this.__request.setData(args);
    this.__request.send();
};

/**
 * @param {string} data
 */
CommonMethod.prototype._handleResponse = function(data) {
    var result = null;

    try {
        result = JSON.parse(data);
    } catch (error) {
        this.dispatch('error', data);
    }

    if (result !== null) {
        var response = result['response'];
        if (response !== undefined) {
            this.dispatch('result', response);
        } else {
            this.dispatch('error', result['errors']);
        }
    }
};

/**
 * @constructor
 * @extends {CommonMethod}
 */
rest.CommonMethod = CommonMethod;
/**
 * @constructor
 * @implements {tuna.rest.IMethodFactory}
 */
var CommonFactory = function() {};

tuna.utils.implement(CommonFactory, tuna.rest.IMethodFactory);

/**
 * @override
 */
CommonFactory.prototype.createMethod = function(name) {
    return new rest.CommonMethod(name);
};

tuna.rest.methodFactory.setDefaultFactory(new CommonFactory());

(function() {

    var Cakes = function() {
        this.__currentCake = null;
    };

    Cakes.prototype.createCake = function(markupJSON, imageBase64,
                                          photoBase64) {

        var markup = JSON.parse(markupJSON);

        var cake = new model.records.Cake();
        cake.markupJson = markupJSON;
        cake.imageBase64 = imageBase64;
        cake.photoBase64 = photoBase64;

        cake.content = markup.content;

        cake.weight = markup.dimensions.mass;
        cake.shape = markup.dimensions.shape;
        cake.personsCount = markup.dimensions.persons_count;

        return cake;
    };

    Cakes.prototype.createCampaingCake = function(weight, imageUrl) {
        var cake = new model.records.Cake();
        cake.weight = weight;
        cake.imageUrl = imageUrl;

        return cake;
    };

    Cakes.prototype.setCurrentCake = function(cake) {
        this.__currentCake = cake;
    };

    Cakes.prototype.getCurrentCake = function() {
        return this.__currentCake;
    };

    model.cakes = new Cakes();

})();

(function() {

    var Orders = function() {
        this.__order = null;
    };

    Orders.prototype.getOrder = function() {
        return this.__order;
    };

    Orders.prototype.updateCampaignOrder = function(campaign, cake, price) {
        if (this.__order === null) {
            this.__initOrder();
        }

        this.__order.campaign = campaign;

        this.__order.cake = cake.clone();

        this.__order.payment = new model.records.Payment();
        this.__order.payment.totalPrice = price;
    };

    Orders.prototype.updateOrder = function() {
        if (this.__order === null) {
            this.__initOrder();
        }

        this.__order.cake = model.cakes.getCurrentCake().clone();
        this.__updateOrderPrice();
    };

    Orders.prototype.__initOrder = function() {
        this.__order = new model.records.Order();

        var user = model.users.getCurrentUser();
        if (user !== null) {
            this.__order.user = user.clone();
        }
    };

    Orders.prototype.setOrderRecipe = function(recipe) {
        this.__order.recipe = recipe;
        this.__updateOrderPrice();
    };

    Orders.prototype.setOrderBakery = function(bakery) {
        this.__order.bakery = bakery;
        this.__updateOrderPrice();
    };

    Orders.prototype.getOrderRecipe = function() {
        return this.__order.recipe;
    };

    Orders.prototype.getOrderBakery = function() {
        return this.__order.bakery;
    };

    Orders.prototype.__updateOrderPrice = function() {
        if (this.__order.payment === null) {
            this.__order.payment = new model.records.Payment();
        }

        var payment = this.__order.payment;

        payment.decoPrice = this.__getDecorationPrice(this.__order.cake);

        if (this.__order.recipe !== null) {
            payment.recipePrice = this.__getRecipePrice
                (this.__order.cake, this.__order.recipe);
        }

        if (this.__order.bakery !== null) {
            payment.deliveryPrice = this.__order.bakery.deliveryPrice;
        }

        payment.totalPrice
            = payment.decoPrice + payment.recipePrice + payment.deliveryPrice;
    };

    Orders.prototype.__getRecipePrice = function(cake, recipe) {
        var weightKey = (cake.weight).toString().replace('.', '_');
        return recipe.dimensionPrices[weightKey].price;
    };

    Orders.prototype.__getDecorationPrice = function(cake) {
        var price = 0;

        if (cake.content.deco !== undefined) {
            var deco = cake.content.deco;

            var i = 0,
                l = deco.length;

            while (i < l) {
                price += this.__getDecorationItemPrice(deco[i].name);
                i++;
            }
        }

        return price;
    };

    Orders.prototype.__getDecorationItemPrice = function(name) {
        switch (name) {
            case 'cherry': case 'grape': case 'kiwi': case 'raspberry':
            case 'strawberry': case 'orange': case 'peach': case 'lemon':
            case 'blueberry': case 'currant':
                return 10;

            case 'pig1': case 'car1': case 'hare1': case 'hedgehog1':
            case 'moose1': case 'owl1': case 'pin1': case 'sheep1':
            case 'raven1': case 'bear1': case 'car2': case 'car3': case 'mat1':
            case 'ia': case 'ladybug': case 'pig': case 'rabbit': case 'tiger':
            case 'winnie': case 'winnie1': case 'bootes':
                return 250;

            case 'doll1': case 'doll2':
                return 350;

            case 'flower1': case 'flower2':
                return 300;

            case 'flower3': case 'flower4': case 'flower5': case 'flower6':
            case 'physalis':
                return 200;

            default:
                return 0;
        }
    };

    model.orders = new Orders();
})();

(function() {

    var Recipes = function() {
        this.__list = [];
    };

    Recipes.prototype.clearRecipes = function() {
        this.__list.length = 0;
    };

    Recipes.prototype.addRecipe = function(recipe) {
        this.__list.push(recipe);
    };

    Recipes.prototype.getRecipeAt = function(index) {
        return this.__list[index];
    };

    Recipes.prototype.getList = function() {
        return this.__list;
    };

    model.recipes = new Recipes();

})();

(function() {

    var Bakeries = function() {
        this.__list = []
    };

    Bakeries.prototype.addBakery = function(bakery) {
        this.__list.push(bakery);
    };

    Bakeries.prototype.getBakeryAt = function(index) {
        return this.__list[index];
    };

    Bakeries.prototype.getList = function() {
        return this.__list;
    };

    model.bakeries = new Bakeries();

})();

(function() {

    var Users = function() {
        this.__currentUser = null;
    };

    Users.prototype.setCurrentUser = function(user) {
        this.__currentUser = user;
    };

    Users.prototype.getCurrentUser = function() {
        return this.__currentUser;
    };

    model.users = new Users();

})();

(function() {

    var Bakery = function() {
        this.id = '';
        this.city = '';
        this.deliveryPrice = 0;
    };

    tuna.utils.extend(Bakery, tuna.model.Record);

    model.records.Bakery = Bakery;

})();
(function() {

    var Cake = function() {
        this.imageUrl = '';

        this.markupJson = '';
        this.imageBase64 = '';
        this.photoBase64 = '';

        this.content = null;

        this.weight = '';
        this.personsCount = 0;
    };

    tuna.utils.extend(Cake, tuna.model.Record);

    model.records.Cake = Cake;

})();
(function() {

    var Order = function() {
        this.id = null;
        this.user = null;
        this.cake = null;

        this.bakery = null;
        this.recipe = null;

        this.payment = null;

        this.campaign = '';
    };

    tuna.utils.extend(Order, tuna.model.Record);

    model.records.Order = Order;

})();
(function() {

    var Payment = function() {
        this.decoPrice = 0;
        this.recipePrice = 0;
        this.deliveryPrice = 0;

        this.totalPrice = 0;
    };

    tuna.utils.extend(Payment, tuna.model.Record);

    model.records.Payment = Payment;

})();
(function() {

    var Recipe = function() {

        /**
         *
         * @type {string}
         */
        this.id = '';

        /**
         *
         * @type {string}
         */
        this.name = '';

        /**
         *
         * @type {string}
         */
        this.desc = '';

        /**
         *
         * @type {number}
         */
        this.price = 0;

        /**
         *
         * @type {string}
         */
        this.imageUrl = '';

        /**
         *
         * @type {Object}
         */
        this.dimensionPrices = {};
    };

    tuna.utils.extend(Recipe, tuna.model.Record);

    model.records.Recipe = Recipe;

})();
(function() {

    var User = function() {
        this.id = '';
        this.name = '';
        this.city = '';
        this.userpicUrl = '';
        this.network = ''
    };

    tuna.utils.extend(User, tuna.model.Record);

    model.records.User = User;

})();
(function() {

    var MainController = function() {
        tuna.view.NavigationViewController.call(this, null);
    };

    tuna.utils.extend(MainController, tuna.view.NavigationViewController);

    MainController.prototype._initActions = function() {
        tuna.view.NavigationViewController.prototype._initActions.call(this);

        tuna.rest.call('social.users.getCurrent', null, function(user) {
            model.users.setCurrentUser(user);
        });
    };

    tuna.view.setMainController(new MainController());

})();

(function() {

    var TitleController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(TitleController, tuna.view.PageViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('selection-group');
        this._container.requireModule('carousel');
        this._container.requireModule('popup-button');
        this._container.requireModule('button-group');
        this._container.requireModule('template-transformer');
    };

    TitleController.prototype._initActions = function() {
        var self = this;
        var cakes = {};

        var cakeListTransformer = this._container.getModuleInstanceByName
                                        ('template-transformer', 'cake-list');

        var cakesControls = this._container.getModuleInstanceByName
                                            ('button-group', 'cake-list');

        cakesControls.addEventListener('buy', function(event, button) {
            var cakeId = button.getOption('cake-id');

            var i = 0,
                l = cakes.length;

            while (i < l) {
                if (cakes[i].id === cakeId) {
                    break;
                }

                i++;
            }

            self._navigation.navigate('designer_step', cakes[i]);
        });

        tuna.rest.call('cakes.getPromoted', null, function(result) {
            cakes = result;
            cakeListTransformer.applyTransform(cakes);
        });


    };

    tuna.view.registerController('title_step', new TitleController());

})();

(function() {

    var DesignerController = function() {
        tuna.view.PageViewController.call(this);

        /**
         * @private
         * @type tuna.ui.flash.SWF
         */
        this.__designerSWF = null;

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__weightsList = [];

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__ratioList =[];

        /**
         *
         * @type Array.<number>
         * @private
         */
        this.__personsList = [];

        /**
         *
         * @type boolean
         * @private
         */
        this.__isDesignerReady = false;

        /**
         *
         * @type boolean
         * @private
         */
        this.__isDimensionsLoaded = false;

        /**
         *
         * @type HTMLObjectElement
         * @private
         */
        this.__movie = null;

        /**
         *
         * @type ?string
         * @private
         */
        this.__cakePreset = null;
    };

    tuna.utils.extend(DesignerController, tuna.view.PageViewController);

    var DECO_SELECTORS =
    [
        { "deco": [
            { "url" : "/img/deco/cherry.png", "autorotate":true, "name" : "cherry", "description" : "Вишня"},
            { "url" : "/img/deco/grape.png", "autorotate":true, "name" : "grape", "description" : "Виноград"},
            { "url" : "/img/deco/kiwi.png", "autorotate":true, "name" : "kiwi", "description" : "Киви"},
            { "url" : "/img/deco/raspberry.png", "autorotate":true, "name" : "raspberry", "description" : "Малина"},
            { "url" : "/img/deco/strawberry.png", "autorotate":true, "name" : "strawberry", "description" : "Клубника"},
            { "url" : "/img/deco/orange.png", "autorotate":true, "name" : "orange", "description" : "Апельсин"},
            { "url" : "/img/deco/blueberry.png", "autorotate":true, "name" : "blueberry", "description" : "Черника"},
            { "url" : "/img/deco/currant.png", "autorotate":true, "name" : "currant", "description" : "Смородина"},
            { "url" : "/img/deco/peach.png", "autorotate":true, "name" : "peach", "description" : "Персик"},
            { "url" : "/img/deco/lemon.png", "autorotate":true, "name" : "lemon", "description" : "Лимон"},
            { "url" : "/img/deco/physalis.png", "autorotate":false, "name" : "physalis", "description" : "Физалис" }
        ]},
        { "deco": [
            { "url" : "/img/deco/pig1.png", "autorotate":false, "name" : "pig1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/car1.png", "autorotate":false, "name" : "car1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/hare1.png", "autorotate":false, "name" : "hare1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/hedgehog1.png", "autorotate":false, "name" : "hedgehog1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/moose1.png", "autorotate":false, "name" : "moose1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/owl1.png", "autorotate":false, "name" : "owl1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/pin1.png", "autorotate":false, "name" : "pin1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/sheep1.png", "autorotate":false, "name" : "sheep1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/raven1.png", "autorotate":false, "name" : "raven1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/bear1.png", "autorotate":false, "name" : "bear1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/car2.png", "autorotate":false, "name" : "car2", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/car3.png", "autorotate":false, "name" : "car3", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/mat1.png", "autorotate":false, "name" : "mat1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/ladybug.png", "autorotate":false, "name" : "ladybug", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/tiger.png", "autorotate":false, "name" : "tiger", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/winnie.png", "autorotate":false, "name" : "winnie", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/winnie1.png", "autorotate":false, "name" : "winnie1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/rabbit.png", "autorotate":false, "name" : "rabbit", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/ia.png", "autorotate":false, "name" : "ia", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/doll1.png", "autorotate":false, "name" : "doll1", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/doll2.png", "autorotate":false, "name" : "doll2", "description" : "Сахарная фигурка"},
            { "url" : "/img/deco/bootes.png", "autorotate":false, "name" : "bootes", "description" : "Сахарная фигурка"}
        ]},
        { "deco": [
            { "url" : "/img/deco/flower1.png", "autorotate":false, "name" : "flower1", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower2.png", "autorotate":false, "name" : "flower2", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower3.png", "autorotate":false, "name" : "flower3", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower4.png", "autorotate":false, "name" : "flower4", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower5.png", "autorotate":false, "name" : "flower5", "description" : "Сахарная фигурка" },
            { "url" : "/img/deco/flower6.png", "autorotate":false, "name" : "flower6", "description" : "Сахарная фигурка" }
        ]}
    ];

    DesignerController.prototype._requireModules = function() {
       this._container.requireModule('data-image');
       this._container.requireModule('swf');
    };

    DesignerController.prototype._initActions = function() {
        this.__designerSWF = this._container.getOneModuleInstance('swf');

        var self = this;
        tuna.rest.call('dimensions.get', null, function(result) {
            var i = 0,
                l = result.length;

            var dimension = null;
            while (i < l) {
                dimension = result[i];
                if (dimension.shape === 'round') {
                    self.__weightsList.push(dimension.weight);
                    self.__ratioList.push(dimension.ratio);
                    self.__personsList.push(dimension.persons_count);
                }

                i++;
            }

            self .__isDimensionsLoaded = true;
            if (self.__isDesignerReady) {
                self.__initDesigner();
            }
        });
    };

    DesignerController.prototype.onFlashReady = function() {
        this.__isDesignerReady = true;
        if (this.__isDimensionsLoaded) {
            this.__initDesigner();
        }
    };

    DesignerController.prototype.__initDesigner = function() {
        this.__movie = this.__designerSWF.getMovie();

        this.__movie.initialize(JSON.Stringify({
            'weightsList': this.__weightsList,
            'ratiosList': this.__ratioList,
            'personsList': this.__personsList,
            'decoSelectors': DECO_SELECTORS
        }), 'round', 0.6);

        if (this.__cakePreset !== null) {
            var self = this;
            setTimeout(function() {
                self.__movie.loadCakePreset(self.__cakePreset);
            }, 1000);
        }
    };

    DesignerController.prototype.confirmShapeChange = function(shape) {
        var self = this;

        tuna.ui.popups.confirm(
            'При изменении формы торта, все оформление будет утеряно!',
            function(result) {
                if (result) {
                    self.__movie.changeShape(shape);
                }
            }
        );
    };

    DesignerController.prototype.canClose = function() {
        return this.__movie !== null;
    };

    DesignerController.prototype.open = function(cake) {
        if (cake !== null && cake.markup !== undefined) {
            if (this.__movie === null) {
                this.__cakePreset = cake.markup;
            } else {
                this.__movie.loadCakePreset(cake.markup)
            }
        } else {
            this.__cakePreset = null;
        }
    };

    DesignerController.prototype.close = function() {
        var data = this.__movie.getCakeData();

        var cake = model.cakes.createCake
            (data.shift(), data.shift(), data.shift());

        var cakeDataImage = this._container.getOneModuleInstance('data-image');
        cakeDataImage.setData(cake.imageBase64);

        model.cakes.setCurrentCake(cake);
    };

    var controller = new DesignerController();

    window.onFlashReady = tuna.utils.bind(controller.onFlashReady, controller);
    window.confirmShapeChange = tuna.utils.bind(controller.confirmShapeChange, controller);
    window.openMessageBox = tuna.ui.popups.alert;

    tuna.view.registerController('designer_step', controller);
})();
(function() {

    var ShareController = function() {
        tuna.view.PageViewController.call(this);

        this.__wallPostMethod = null;
        this.__imageData = null;
    };

    tuna.utils.extend(ShareController, tuna.view.PageViewController);

    ShareController.prototype.open = function() {
        var currentCake = model.cakes.getCurrentCake();
        this.__imageData = currentCake.imageBase64;

        var downloadDataInput = tuna.dom.selectOne('#download_data_input');
        downloadDataInput.value = this.__imageData;
    };

    ShareController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
        this._container.requireModule('friends-popup');
    };

    ShareController.prototype._initActions = function() {
        var friendsPopup = this._container.getOneModuleInstance('friends-popup');
        var postLink = tuna.dom.selectOne('#wall_post_link');
        if (postLink !== null) {
            tuna.dom.addEventListener(
                postLink, 'click', function(event) {
                    tuna.dom.preventDefault(event);
                    friendsPopup.postImage();
                }
            );
        }
    };

    tuna.view.registerController('share_step', new ShareController());
})();
(function() {

    var RecipeController = function() {
        tuna.view.PageViewController.call(this);

        this.__popupRecipe = null;
        this.__popupIndex = -1;

        this.__cityPopup = null;
        this.__cityAutocomplete = null;

        this.__transformer = null;
    };

    tuna.utils.extend(RecipeController, tuna.view.PageViewController);

    RecipeController.prototype.open = function() {
        model.orders.updateOrder();

        this.__cityPopup.open();

        this.__updateView();
    };

    RecipeController.prototype._requireModules = function() {
        this._container.requireModule('template-transformer');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('autocomplete');
        this._container.requireModule('popup-button');
    };

    RecipeController.prototype._initActions = function() {
        model.orders.updateOrder();

        this.__transformer
            = this._container.getOneModuleInstance('template-transformer');
        this.__transformer.setTransformHandler(this);

        this.__initCityPopup();

        this.__loadBakeries();

        this.__initRecipeSelection();

        this.__initDescriptionPopup();

        this.__updateView();
    };

    RecipeController.prototype.__initCityPopup = function() {
        var self = this;

        this.__cityAutocomplete
            = this._container.getOneModuleInstance('autocomplete');

        this.__cityAutocomplete.setItemSerializeCallback(function(bakery) {
            return bakery.city;
        });

        var okButton = tuna.dom.selectOne('#city_ok_button');
        this.__cityAutocomplete.addEventListener('change', function() {
            if (null === self.__cityAutocomplete.getSelectedData()) {
                tuna.dom.addClass(okButton, 'disabled');
            } else {
                tuna.dom.removeClass(okButton, 'disabled');
            }
        });

        this.__cityPopup
            = tuna.ui.popups.create(tuna.dom.selectOne('#city_selection_popup'));

        var bakery = null;

        this.__cityPopup.addEventListener('popup-open', function(event) {
            bakery = model.orders.getOrderBakery();
        });

        this.__cityPopup.addEventListener('popup-apply', function(event) {
            var selectedBakery = self.__cityAutocomplete.getSelectedData();
            if (selectedBakery === null) {
                event.preventDefault();
            } else {
                if (bakery !== selectedBakery) {
                    model.orders.setOrderBakery(selectedBakery);

                    self.__loadRecipes();
                    self.__updateView();
                }
            }
        });

    };

    RecipeController.prototype.__initDescriptionPopup = function() {
        var descriptionPopup = tuna.ui.popups.create
                            (tuna.dom.selectOne('#recipe_description_popup'));

        var self = this;
        descriptionPopup.addEventListener('popup-apply', function() {
            self.__selectRecipeAt(self.__popupIndex);
        });
    };

    RecipeController.prototype.__initRecipeSelection = function() {
        var self = this;
        var target = this._container.getTarget();

        tuna.dom.addChildEventListener(
            target, '.j-recipe-image', 'click', function(event) {
                var index = this.getAttribute('data-index');

                self.__popupRecipe = model.recipes.getRecipeAt(index);
                self.__popupIndex = index;

                self.__updateView();
            }
        );

        tuna.dom.addChildEventListener(
            target, 'input.j-recipe-radio', 'click',
            function(event) {
                var recipe = model.recipes.getRecipeAt(this.value);
                model.orders.setOrderRecipe(recipe);

                self.__updateView();
            }
        );
    };

    RecipeController.prototype.__updateView = function() {
        this.__transformer.applyTransform({
            'order': model.orders.getOrder(),
            'recipes': model.recipes.getList(),
            'popup_recipe': this.__popupRecipe
        });
    };

    RecipeController.prototype.__selectRecipeAt = function(index) {
        var input = tuna.dom.selectOne
            ('input[value=' + index + '].j-recipe-radio');

        input.checked = true;

        tuna.dom.dispatchEvent(input, 'click');
    };

    RecipeController.prototype.__loadRecipes = function() {
        var self = this;
        var bakery = model.orders.getOrderBakery();

        tuna.rest.call('recipes.get', { 'bakery_id': bakery.id },
            function(result) {
                model.recipes.clearRecipes();

                var i = 0,
                    l = result.length;

                var value = null;
                var recipe = null;
                while (i < l) {
                    value = result[i];

                    recipe = new model.records.Recipe();
                    recipe.id = value.id;
                    recipe.name = value.name;
                    recipe.desc = value.desc;
                    recipe.price = value.price;
                    recipe.imageUrl = value.image_url;
                    recipe.dimensionPrices = value.dimension_prices;

                    model.recipes.addRecipe(recipe);

                    i++;
                }


                self.__updateView();
                self.__selectRecipeAt(0);
            }
        );
    };

    RecipeController.prototype.__loadBakeries = function() {
        var self = this;

        tuna.rest.call('users.getBakeries', null, function(result) {
            var i = 0,
                l = result.length;

            var value = null;
            var bakery = null;
            while (i < l) {
                value = result[i];

                bakery = new model.records.Bakery();
                bakery.id = value.id;
                bakery.city = value.city.name;
                bakery.deliveryPrice = value.delivery_price;

                model.bakeries.addBakery(bakery);

                i++;
            }

            self.__cityAutocomplete.setData(model.bakeries.getList());

            var user = model.users.getCurrentUser();
            if (user !== null) {
                self.__cityAutocomplete.selectValue(user.city);
            }
        });
    };

    tuna.view.registerController('recipe_step', new RecipeController());

})();
(function() {

    var OrderController = function() {
        tuna.view.PageViewController.call(this);

        this.__form = null;
        this.__cakeImage = null;

        this.__transformer = null;

        /**
         *
         * @type {?string}
         * @private
         */
        this.__orderId = null;
    };

    tuna.utils.extend(OrderController, tuna.view.PageViewController);

    OrderController.prototype._requireModules = function() {
        this._container.requireModule('template-transformer');
        this._container.requireModule('data-image-copy');
        this._container.requireModule('datepicker');
        this._container.requireModule('form');
    };

    OrderController.prototype._initActions = function() {
        var self = this;

        this.__transformer
            = this._container.getOneModuleInstance('template-transformer');
        this.__transformer.setTransformHandler(this);

        this.__form = this._container.getOneModuleInstance('form');
        this.__form.addEventListener('result', function(event, result) {
            self._navigation.navigate('result_step', result.cake);
        });

        this.__cakeImage
            = this._container.getOneModuleInstance('data-image-copy');
    };

    OrderController.prototype.open = function(args) {
        if (args.image !== undefined) {
            this.__cakeImage.src = args.image;

            var cake = model.cakes.createCampaingCake(args.weight, args.image);
            model.orders.updateCampaignOrder(args.campaign, cake, args.price);
        }

        var order = model.orders.getOrder();

        this.__form.setEnabled(false);

        var self = this;
        tuna.rest.call('orders.add', {
            'bakery_id': order.bakery.id,
            'recipe_id': order.recipe.id,

            'cake_shape': order.cake.shape,
            'cake_weight': order.cake.weight,
            'cake_markup_json': order.cake.markupJson,
            'cake_image_base64': order.cake.imageBase64,
            'cake_photo_base64': order.cake.photoBase64
        }, function(result) {
            order.id = result.id;

            self.__form.setEnabled(true);
            self.__transformer.applyTransform(order);
        });

        this.__transformer.applyTransform(order);
    };

    tuna.view.registerController('order_step', new OrderController());
})();

(function() {

    var ResultController = function() {
        tuna.view.PageViewController.call(this);
    };

    tuna.utils.extend(ResultController, tuna.view.PageViewController);

    ResultController.prototype._requireModules = function() {
        this._container.requireModule('data-image-copy');
    };

    ResultController.prototype.open = function(args) {
        var image = this._container.getOneModuleInstance('data-image-copy');
        image.src = args.image_url;
    };

    tuna.view.registerController('result_step', new ResultController());
})();

(function() {

    var VKMethod = function(name) {
        tuna.rest.Method.call(this, name);

        this._handleResponse = tuna.utils.bind(this._handleResponse, this);
    };

    tuna.utils.extend(VKMethod, tuna.rest.Method);

    VKMethod.prototype.call = function(args) {
        VK.api(this._name, this._completeArguments(args), this._handleResponse);
    };

    VKMethod.prototype._completeArguments = function(args) {
        return args;
    };

    VKMethod.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            this.dispatch('result', this._mapResponse(data.response));
        } else {
            this.dispatch('error', data);
        }
    };

    VKMethod.prototype._mapResponse = function(response) {
        return null;
    };

    rest.social.vk.VKMethod = VKMethod;

})();

(function() {

    var GetCurrent = function() {
        rest.social.vk.VKMethod.call(this, 'getProfiles');

        this.__user = null;

        this.__handleCity = tuna.utils.bind(this.__handleCity, this);
    };

    tuna.utils.extend(GetCurrent, rest.social.vk.VKMethod);

    GetCurrent.prototype._completeArguments = function(args) {
        return {
            'fields': 'uid,first_name,last_name,city',
            'uid': tuna.utils.config.get('viewer_id')
        };
    };

    GetCurrent.prototype._handleResponse = function(data) {
        if (data.response !== undefined) {
            var value = data.response[0];

            this.__user = new model.records.User();
            this.__user.id = value.uid;
            this.__user.name = value.first_name + ' ' + value.last_name;
            this.__user.userpicUrl = value.photo;
            this.__user.network = 'vk';

            VK.api('places.getCityById', {
                'cids': value.city
            }, this.__handleCity);

        } else {
            this.dispatch('error', data);
        }
    };

    GetCurrent.prototype.__handleCity = function(data) {
        if (data.response !== undefined) {
            this.__user.city = data.response[0].name;
            this.dispatch('result', this.__user);
        } else {
            this.dispatch('error', data);
        }
    };

    tuna.rest.methodFactory.registerMethod('social.users.getCurrent', new GetCurrent())

})();

(function() {

    var GetList = function() {
        rest.social.vk.VKMethod.call(this, 'friends.get');
    };

    tuna.utils.extend(GetList, rest.social.vk.VKMethod);

    GetList.prototype._completeArguments = function(args) {
        return { 'fields': 'uid,first_name,last_name,photo' };
    };

    GetList.prototype._mapResponse = function(response) {
        var result = [];

        var i = 0,
            l = response.length;

        var value = null;
        var user = null;
        while (i < l) {
            value = response[i];

            user = new model.records.User();
            user.id = value.uid;
            user.name = value.first_name + ' ' + value.last_name;
            user.userpicUrl = value.photo;

            result.push(user);

            i++;
        }


        return result;
    };

    tuna.rest.methodFactory.registerMethod('social.friends.get', new GetList())

})();

(function() {

    var Post = function() {
        rest.CommonMethod.call(this, 'social.vk.uploadImage');

        this.__userID = null;
        this.__imageData = null;

        this.__handleSavePhoto = tuna.utils.bind(this.__handleSavePhoto, this);
        this.__handleWallPost  = tuna.utils.bind(this.__handleWallPost, this);
        this.__handleUploadURL = tuna.utils.bind(this.__handleUploadURL, this);
    };

    tuna.utils.extend(Post, rest.CommonMethod);

    Post.prototype.call = function(args) {
        if (args !== undefined) {
            this.__userID = args.user_id || null;
            this.__imageData = args.image || null;
        }

        var params = {};
        if (this.__userID  !== null) {
            params.uid = this.__userID;
        }

        VK.api('photos.getWallUploadServer', params, this.__handleUploadURL);
    };

    Post.prototype.__handleUploadURL = function(result) {
        if (result.response !== undefined) {
            result.response.image = this.__imageData;
            rest.CommonMethod.prototype.call.call(this, result.response);
        } else {
            this.dispatch('error', result);
        }
    };

    Post.prototype._handleResponse = function(data) {
        var result = null;

        try {
            result = JSON.parse(data);
        } catch (error) {}

        if (result !== null && result.response !== undefined) {
            VK.api('photos.saveWallPhoto', result.response, this.__handleSavePhoto);
        } else {
            this.dispatch('error', data);
        }
    };

    Post.prototype.__handleSavePhoto = function(result) {
        if (result.response !== undefined && result.response.length > 0) {
            var photo = result.response[0];
            
            var userID = this.__userID;
            if (userID === null) {
                userID = photo.owner_id;
            }

            VK.api('wall.post', {
                'owner_id': userID,
                'message': 'Смотри, какой у меня получился торт!',
                'attachments': photo.id
            }, this.__handleWallPost);
        } else {
            this.dispatch('error', result);
        }
    };

    Post.prototype.__handleWallPost = function(result) {
        if (result.response !== undefined) {
            this.dispatch('result', true);
        } else {
            this.dispatch('error', result);
        }
    };

    tuna.rest.methodFactory.registerMethod('social.wall.post', new Post())

})();

