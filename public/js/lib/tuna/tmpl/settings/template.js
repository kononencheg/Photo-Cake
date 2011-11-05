/**
 * TUNA FRAMEWORK
 * 
 * @file template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl.settings");


    /**
     * Template data class.
     *
     * Save data that describe rules to transform data into appropriate view.
     *
     * @public
     * @class
     *
     * @constructor
     */
    var Template = function() {
        this.__spots = [];
        this.__lists = [];
        this.__attributes = [];
        this.__conditions = [];
    };

    Template.prototype.addCondition = function(attr) {
        this.__conditions.push(attr);
    };

    Template.prototype.getConditionAt = function(i) {
        return this.__conditions[i];
    };

    Template.prototype.getConditionsCount = function() {
        return this.__conditions.length;
    };

    Template.prototype.addAttribute = function(attr) {
        this.__attributes.push(attr);
    };

    Template.prototype.getAttributeAt = function(i) {
        return this.__attributes[i];
    };

    Template.prototype.getAttributesCount = function() {
        return this.__attributes.length;
    };

    Template.prototype.addList = function(list) {
        this.__lists.push(list);
    };

    Template.prototype.getListAt = function(i) {
        return this.__lists[i];
    };

    Template.prototype.getListsCount = function() {
        return this.__lists.length;
    };

    Template.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    Template.prototype.getSpotAt = function(i) {
        return this.__spots[i];
    };

    Template.prototype.getSpotsCount = function() {
        return this.__spots.length;
    };

    tuna.tmpl.settings.Template = Template;

})();
