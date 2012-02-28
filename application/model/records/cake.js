/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Cake = function() {

    /**
     * 
     * @type {string}
     */
    this.imageUrl = '';

    /**
     * 
     * @type {string}
     */
    this.markupJson = '';

    /**
     * 
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
     * @type {Object}
     */
    this.content = null;

    /**
     * 
     * @type {number}
     */
    this.weight = 0;

    /**
     * 
     * @type {number}
     */
    this.personsCount = 0;
};

tuna.utils.extend(Cake, tuna.model.Record);

/**
 * @extends {Cake}
 * @constructor
 */
model.records.Cake = Cake;
