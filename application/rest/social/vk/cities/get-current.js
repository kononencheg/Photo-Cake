/**
 * @extends {rest.social.vk.VKMethod}
 * @constructor
 */
var GetCurrent = function() {
  rest.social.vk.VKMethod.call(this);

  this._name = 'getProfiles';

  this.__handleCity = tuna.utils.bind(this.__handleCity, this);
};

tuna.utils.extend(GetCurrent, rest.social.vk.VKMethod);


/**
 * @override
 */
GetCurrent.prototype._completeArguments = function(args) {
    return {
        'fields': 'uid,first_name,last_name,city',
        'uid': tuna.utils.config.get('viewer_id')
    };
};

/**
 * @override
 */
GetCurrent.prototype._handleResponse = function(data) {
    if (data['response'] !== undefined && data['response'].length > 0) {
        var value = data['response'][0];

        VK.api('places.getCityById', {
            'cids': value['city']
        }, this.__handleCity);

    } else {
        this.dispatch('error', data);
    }
};


/**
 * @param {Object} data
 * @private
 */
GetCurrent.prototype.__handleCity = function(data) {
    if (data['response'] !== undefined) {
        var city = new model.records.City();
        city.name =  data['response'][0]['name'];

        this.dispatch('result', city);
    } else {
        this.dispatch('error', data);
    }
};

tuna.rest.methodFactory.registerMethod('cities.getCurrent', new GetCurrent());

