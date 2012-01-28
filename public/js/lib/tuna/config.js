/**
 * TUNA FRAMEWORK
 *
 * @file config.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace('tuna');

    var Config = function() {
        this.__data = null;
    };

    Config.prototype.init = function(data) {
        this.__data = data;
    };

    Config.prototype.get = function(key) {
        if (this.__data[key] !== undefined) {
            return this.__data[key];
        }

        return null;
    };

    Config.prototype.set = function(key, value) {
        this.__data[key] = value;
    };

    tuna.config = new Config();
})();