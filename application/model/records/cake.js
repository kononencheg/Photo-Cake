/**
 * @extends {tuna.model.Record}
 * @constructor
 */
var Cake = function() {

    /**
     * @type {string}
     */
    this.id = '';

    /**
     * @type {string}
     */
    this.imageUrl = '';

    /**
     * @type {string}
     */
    this.photoUrl = '';

    /**
     * @type {string}
     */
    this.markup = '';

    /**
     * @type {string}
     */
    this.shape = 'round';

    /**
     * @type {number}
     */
    this.weight = 0;
};

tuna.utils.extend(Cake, tuna.model.Record);


/**
 * @override
 */
Cake.prototype.populate = function(data) {
    this.id = data['id'];
    this.imageUrl = data['image_url'];
    this.photoUrl = data['photo_url'];
    this.markup = data['markup'];
    this.shape = data['dimension']['shape'];
    this.weight = data['dimension']['weight'];
};

/**
 * @override
 */
Cake.prototype.serialize = function() {
    return {
        'id': this.id,
        'imageUrl': this.imageUrl,
        'photoUrl': this.photoUrl,
        'shape': this.shape,
        'weight': this.weight
    };
};


/**
 * @extends {Cake}
 * @constructor
 */
model.records.Cake = Cake;

tuna.model.recordFactory.registerRecord('cake', new model.records.Cake());