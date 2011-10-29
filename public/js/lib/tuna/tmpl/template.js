/**
 * TUNA FRAMEWORK
 * 
 * @file template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    tuna.namespace("tuna.tmpl");


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

        /**
         * Spots array.
         *
         * @private
         * @type {Array.<tuna.tmpl.Spot>}
         */
        this.__spots = [];

        /**
         * Lists array.
         *
         * @private
         * @type {Array.<tuna.tmpl.Spot>}
         */
        this.__lists = [];

        this.__attrs = [];
    };



    Template.prototype.addAttribute = function(attr) {
        this.__attrs.push(attr);
    };

    Template.prototype.getAttributeAt = function(i) {
        return this.__attrs[i];
    };

    Template.prototype.getAttributesCount = function() {
        return this.__attrs.length;
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

    /**
     * Adding spot data.
     *
     * @param {tuna.tmpl.Spot} spot Spot data.
     */
    Template.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    /**
     * Return spot with index.
     *
     * @param {number} i Spot index.
     * @return {tuna.tmpl.Spot} Spot at index.
     */
    Template.prototype.getSpotAt = function(i) {
        return this.__spots[i];
    };

    /**
     * Return spots count.
     *
     * @return {number} Spots count.
     */
    Template.prototype.getSpotsCount = function() {
        return this.__spots.length;
    };

    tuna.tmpl.Template = Template;

})();
