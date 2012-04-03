/**
 * @extends {tuna.rest.Method}
 * @constructor
 */
var VKMethod = function() {
  tuna.rest.Method.call(this);

  /**
   * @type {?string}
   * @private
   */
  this._name = null;

  this._handleResponse = tuna.utils.bind(this._handleResponse, this);
};

tuna.utils.extend(VKMethod, tuna.rest.Method);

/**
 * @param {Object} args
 */
VKMethod.prototype.call = function(args) {
  if (this._name !== null) {
    VK.api(this._name, this._completeArguments(args), this._handleResponse);
  }
};

/**
 * @param {Object} args
 */
VKMethod.prototype._completeArguments = function(args) {
    return args;
};


/**
 * @param {Object} data
 */
VKMethod.prototype._handleResponse = function(data) {
    if (data['response'] !== undefined) {
        this.dispatch('result', this._mapResponse(data['response']));
    } else {
        this.dispatch('error', data);
    }
};


/**
 * @param {Object} response
 */
VKMethod.prototype._mapResponse = function(response) {
    return null;
};

/**
 * @extends {VKMethod}
 * @constructor
 */
rest.social.vk.VKMethod = VKMethod;

