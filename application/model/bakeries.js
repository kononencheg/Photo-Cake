/**
 * @constructor
 */
var Bakeries = function() {
    this.__list = null
};

/**
 * @param {Array.<model.records.Bakery>} bakeries
 */
Bakeries.prototype.setBakeries = function(bakeries) {
    this.__list = bakeries;
};

/**
 * @return {Array.<model.records.Bakery>}
 */
Bakeries.prototype.getBakeries = function() {
    return this.__list;
};

/**
 * @type {Bakeries}
 */
model.bakeries = new Bakeries();

