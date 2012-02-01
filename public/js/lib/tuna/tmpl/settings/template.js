/**
 * TUNA FRAMEWORK
 * 
 *  template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace('tuna.tmpl.settings');

    /**
     * Template data class.
     *
     * Save data that describe rules to transform data into appropriate app.
     *
     * @public
     * @class
     *
     * @constructor
     */
    tuna.tmpl.settings.Template = function() {
        this.__spots = [];
        this.__lists = [];
        this.__attributes = [];
        this.__conditions = [];
    };

    tuna.tmpl.settings.Template.prototype.addCondition = function(attr) {
        this.__conditions.push(attr);
    };

    tuna.tmpl.settings.Template.prototype.getConditions = function() {
        return this.__conditions;
    };

    tuna.tmpl.settings.Template.prototype.addAttribute = function(attr) {
        this.__attributes.push(attr);
    };

    tuna.tmpl.settings.Template.prototype.getAttributes = function() {
        return this.__attributes;
    };

    tuna.tmpl.settings.Template.prototype.addList = function(list) {
        this.__lists.push(list);
    };

    tuna.tmpl.settings.Template.prototype.getLists = function() {
        return this.__lists;
    };

    tuna.tmpl.settings.Template.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    tuna.tmpl.settings.Template.prototype.getSpots = function() {
        return this.__spots;
    };

})();
