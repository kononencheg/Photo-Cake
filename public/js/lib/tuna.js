/**
 * TUNA FRAMEWORK
 * 
 * @file tuna.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Основная область имен.
 *
 * @namespace
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @public 
 * @static
 * @const
 * @type string
 */
tuna.VERSION = '3.2.70';

/**
 * Является ли текущий браузер IE.
 *
 * @public 
 * @static
 * @const
 * @type boolean
 */
tuna.IS_IE = '\v' == 'v';

/**
 * Convert array-like object to array.
 *
 * @param {Object} list Array-like object.
 * @return {Array} Converted array.
 */
tuna.toArray = function(list) {
    return Array.prototype.slice.call(list);
};

/**
 * Объявление реализации интерфейса.
 *
 * Добавление либо замена (уже существующих) методов прототипа класса 
 * 'интерфейса', неоходимое для оповещения о не реализованных методах.
 *
 * При объявлении интерфейса в каждом объявленном методе следует генерировать 
 * ошибку типа <code>InterfaceMethodError</code>.
 *
 * Данную функцию следует вызывать перез вызовом функции 
 * <code>tuna.extend</code>.
 *
 * @public
 * @static
 * @param {!Object} Class Класс который должен реализовать интерфейс.
 * @param {!Object} Interface Класс "интерфейс" для реализации.
 */
tuna.implement = function(Class, Interface) {
    for (var method in Interface.prototype) {
        if (typeof Interface.prototype[method] === 'function') {
            Class.prototype[method] = Interface.prototype[method];
        }
    }
};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на него, 
 * сохраняя конструктор, а также создает глобальное свойчтво дочернего класса 
 * <code>_super</code> содержащее прототип родительского класса.
 * 
 * Свойство <code>_super</code> необходимо для вызова исходных методов и 
 * конструктора родительского класса.
 * 
 * Пример использования:
 * <code>
 *         Class._super.constructor.call(this, argument);
 * </code>
 *
 * @public
 * @static
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
tuna.extend = function(Class, Parent) {
    var Link = function() {};
    Link.prototype = Parent.prototype;

    Class.prototype = new Link();
    Class.prototype.constructor = Class;
    Class.prototype._super = Parent.prototype;
};

/**
 * Создание сслыки на объект в глобальной области видимости.
 *
 * @public
 * @static
 * @param {!Object} object Объект с полным путем.
 * @param {!string} name Имя переменной в глобальной области видимости.
 */
tuna.typedef = function(object, name) {
    window[name] = object;
};

/**
 * Безопасное объявление области имен.
 *
 * @public
 * @static
 * @param {!string} path Полное имя области имен.
 * @return {Object} Ссылка на область имен.
 */
tuna.namespace = function(path) {

    var pathHash = path.split('.');
    var scope = window, next;

    while(pathHash.length > 0) {
        next = pathHash.shift();

        if (scope[next] === undefined) {
            scope[next] = {};
        }

        scope = scope[next];
    }

    return scope;
};


/**
 * Функция выполнения строки JavaScript кода в глобальной области имен.
 *
 * Не следует использовать нигде(!) в логике приложенния.
 *
 * @public
 * @static
 * @param {!string} code Строка кода.
 * @return {Object} Результат выполнения.
 * @throws Error
 * @deprecated
 */
tuna.eval = function(code) {
    return (window.execScript !== undefined) ?
            window.execScript(code) : window.eval(code);
};

tuna.bind = function(fn, context) {
    if (fn.bind !== undefined) {
        return fn.bind(context);
    } else {
        var args = Array.prototype.slice.call(arguments, 2);

        return function() {
            return fn.apply(context, args.concat(tuna.toArray(arguments)));
        };
    }
};

tuna.nextTick = function(callback) {
    setTimeout(callback, 0);
};

tuna.clone = function(object, clones) {
    if (object instanceof Array) {
        return tuna.cloneArray(object);
    } else if (object instanceof Date) {
        return tuna.cloneDate(object);
    } else if (object instanceof Object) {
        if (clones === undefined) {
            clones = [object];
        } else {
            clones.push(object);
        }

        var result = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (tuna.indexOf(object[key], clones) === -1) {
                    result[key] = tuna.clone(object[key]);
                } else {
                    throw new TypeError('Cloning circular structure');
                }
            }
        }

        return result;
    }

    return object;
};

tuna.cloneDate = function(date) {
    return new Date(date.getTime());
};

tuna.cloneArray = function(array) {
    return array.slice(0);
};

tuna.indexOf = function(element, array) {
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