/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var RawCake = function() {

    /**
     * @type {string}
     */
    this.imageBase64 = '';

    /**
     *
     * @type {string}
     */
    this.photoBase64 = '';

    /**
     * 
     * @type {string}
     */
    this.markupJson = '';

    /**
     * 
     * @type {Object}
     */
    this.markup = null;
};

tuna.utils.extend(RawCake, tuna.model.Record);


/**
 * @override
 */
RawCake.prototype.serialize = function() {
    return {
        'weight': this.markup['dimensions']['mass'],
        'personsCount': this.markup['dimensions']['persons_count']
    };
};

/**
 * @return {Object}
 */
RawCake.prototype.getDecorations = function() {
    if (this.markup['content']['deco'] !== undefined) {
        return this.markup['content']['deco'];
    }

    return null;
};

/**
 * @return {number}
 */
RawCake.prototype.getWeight = function() {
    return this.markup['dimensions']['mass'];
};

/**
 * @return {string}
 */
RawCake.prototype.getShape = function() {
    return this.markup['dimensions']['shape'];
};


/**
 * @extends {Cake}
 * @constructor
 */
model.records.RawCake = RawCake;

tuna.model.recordFactory.registerRecord('raw-cake', new model.records.RawCake());