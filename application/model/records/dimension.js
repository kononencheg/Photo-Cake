/**
 * @constructor
 * @param {!Object=} data
 * @extends {tuna.model.Record}
 */
var Dimension = function (data) {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {number}
     */
    this.weight = 0;

    /**
     * @type {string}
     */
    this.shape = '';

    /**
     * @type {number}
     */
    this.ratio = 0;

    /**
     * @type {number}
     */
    this.personsCount = 0;

    tuna.model.Record.call(this, data);
};

tuna.utils.extend(Dimension, tuna.model.Record);

/**
 * @override
 */
Dimension.prototype.populate = function(data) {
    this.id = data['id'];
    this.weight = data['weight'];
    this.shape = data['shape'];
    this.ratio = data['ratio'];
    this.personsCount = data['persons_count'];
};

/**
 * @override
 */
Dimension.prototype.serialize = function() {
    return {
        'weight': this.weight,
        'shape': this.shape,
        'ratio': this.ratio,
        'personsCount': this.personsCount
    };
};

/**
 * @constructor
 * @extends {Dimension}
 */
model.records.Dimension = Dimension;

tuna.model.recordFactory.registerRecord('dimension', new model.records.Dimension());