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
     * @type {?string}
     */
    this.photoUrl = null;

    /**
     * @type {?string}
     */
    this.markup = null;

    /**
     * @type {Object}
     */
    this.__markupJson = null;

    /**
     * @type {model.records.Dimension}
     */
    this.dimension = null;
};

tuna.utils.extend(Cake, tuna.model.Record);


/**
 * @override
 */
Cake.prototype.populate = function(data) {
    this.id = data['id'];
    this.imageUrl = data['image_url'];
    this.photoUrl = data['photo_url'] || null;
    this.markup = data['markup'];
    this.__markupJson = JSON.parse(data['markup']);
    this.dimension = new model.records.Dimension(data['dimension']);
};

/**
 * @override
 */
Cake.prototype.serialize = function() {
    return {
        'id': this.id,
        'imageUrl': this.imageUrl,
        'photoUrl': this.photoUrl,
        'dimension': this.dimension.serialize()
    };
};

/**
 * @return {Object}
 */
Cake.prototype.getDecorations = function() {
    if (this.__markupJson['content']['deco'] !== undefined) {
        return this.__markupJson['content']['deco'];
    }

    return null;
};

/**
 * @extends {Cake}
 * @constructor
 */
model.records.Cake = Cake;

tuna.model.recordFactory.registerRecord('cake', new model.records.Cake());