/**
 * @constructor
 * @param {Object=} data
 * @extends {tuna.model.Record}
 */
var Decoration = function (data) {

    /**
     * @type {string}
     */
    this.name = '';

    /**
     * @type {string}
     */
    this.imageUrl = '';

    /**
     * @type {number}
     */
    this.group = 0;

    /**
     * @type {boolean}
     */
    this.isAutorotate = false;

    tuna.model.Record.call(this, data);
};

tuna.utils.extend(Decoration, tuna.model.Record);

/**
 * @override
 */
Decoration.prototype.populate = function(data) {
    this.id = data['id'];
    this.name = data['name'];
    this.group = data['group'];
    this.imageUrl = data['image_url'];
    this.isAutorotate = data['is_autorotate'];
};

/**
 * @override
 */
Decoration.prototype.serialize = function() {
    return {
        'name': this.id,
        'description': this.name,
        'url': this.imageUrl,
        'autorotate': this.isAutorotate
    };
};

/**
 * @constructor
 * @extends {Decoration}
 */
model.records.Decoration = Decoration;

tuna.model.recordFactory.registerRecord('decoration', new model.records.Decoration());