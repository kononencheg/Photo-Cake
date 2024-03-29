/**
 * @extends {rest.CommonMethod}
 * @constructor
 */
var Post = function() {
    rest.CommonMethod.call(this, 'social.vk.uploadImage');

    this.__userID = null;
    this.__imageData = null;

    this.__handleSavePhoto = tuna.utils.bind(this.__handleSavePhoto, this);
    this.__handleWallPost  = tuna.utils.bind(this.__handleWallPost, this);
    this.__handleUploadURL = tuna.utils.bind(this.__handleUploadURL, this);
};

tuna.utils.extend(Post, rest.CommonMethod);

/**
 * @override
 */
Post.prototype.call = function(args) {
    if (args !== undefined) {
        this.__userID = args['user_id'] || null;
        this.__imageData = args['image'] || null;
    }

    var params = {};
    if (this.__userID  !== null) {
        params['uid'] = this.__userID;
    }

    VK.api('photos.getWallUploadServer', params, this.__handleUploadURL);
};

/**
 * @param {Object} result
 * @private
 */
Post.prototype.__handleUploadURL = function(result) {
    if (result['response'] !== undefined) {
        result['response']['image'] = this.__imageData;
        rest.CommonMethod.prototype.call.call(this, result['response']);
    } else {
        this.dispatch('error', result);
    }
};

/**
 * @override
 */
Post.prototype._handleResponse = function(data) {
    var result = null;

    try {
        result = JSON.parse(data);
    } catch (error) {}

    if (result !== null && result['response'] !== undefined) {
        VK.api('photos.saveWallPhoto', result['response'], this.__handleSavePhoto);
    } else {
        this.dispatch('error', data);
    }
};

/**
 * @param {Object} result
 * @private
 */
Post.prototype.__handleSavePhoto = function(result) {
    if (result['response'] !== undefined && result['response'].length > 0) {
        var photo = result['response'][0];

        var userID = this.__userID;
        if (userID === null) {
            userID = photo['owner_id'];
        }

        VK.api('wall.post', {
            'owner_id': userID,
            'message': 'Смотри, какой у меня получился торт!',
            'attachments': photo['id']
        }, this.__handleWallPost);
    } else {
        this.dispatch('error', result);
    }
};

/**
 * @param {Object} result
 * @private
 */
Post.prototype.__handleWallPost = function(result) {
    if (result['response'] !== undefined) {
        this.dispatch('result', true);
    } else {
        this.dispatch('error', result);
    }
};

tuna.rest.methodFactory.registerMethod('social.wall.post', new Post());

