/**
 * TUNA FRAMEWORK
 * 
 * @file List.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

	tuna.namespace("tuna.tmpl");

    var List = function() {
        tuna.tmpl.Spot.call(this);

        this.__keyPath = '';

        this.__itemRenderer = null;
        this.__itemTemplate = null;
    };

    tuna.extend(List, tuna.tmpl.Spot);

    List.prototype.setItemKeyDataPath = function(path) {
        this.__keyPath = path;
    };

    List.prototype.getItemKeyDataPath = function() {
        return this.__keyPath;
    };

    List.prototype.setItemRendererID = function(id) {
        this.__itemRendererID = id;
    };

    List.prototype.getItemRendererID = function() {
        return this.__itemRendererID;
    };

    List.prototype.setItemTemplate = function(template) {
        this.__itemTemplate = template;
    };

    List.prototype.getItemTemplate = function() {
        return this.__itemTemplate;
    };

    tuna.tmpl.List = List;

})();



