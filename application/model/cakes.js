/**
 * @constructor
 */
var Cakes = function() {
    this.__currentCake = null;
};

/**
 * @param markupJSON
 * @param imageBase64
 * @param photoBase64
 * @return {model.records.RawCake}
 */
Cakes.prototype.createCake = function(markupJSON, imageBase64, photoBase64) {
    var cake = new model.records.RawCake();
    cake.markupJson = markupJSON;
    cake.imageBase64 = imageBase64;
    cake.photoBase64 = photoBase64;
    cake.markup = JSON.parse(markupJSON);

    return cake;
};

/**
 * @param {model.records.RawCake} cake
 */
Cakes.prototype.setCurrentCake = function(cake) {
    this.__currentCake = cake;
};

/**
 * @return {model.records.RawCake}
 */
Cakes.prototype.getCurrentCake = function() {
    return this.__currentCake;
};

/**
 * @type {Cakes}
 */
model.cakes = new Cakes();

