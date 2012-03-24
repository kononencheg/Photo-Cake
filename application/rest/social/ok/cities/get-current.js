/**
 * @extends {tuna.rest.Method}
 * @constructor
 */
var GetCurrent = function() {
    tuna.rest.Method.call(this);
};

tuna.utils.extend(GetCurrent, tuna.rest.Method);

/**
 * @override
 */
GetCurrent.prototype.call = function() {
    var self = this;
    FAPI.Client.call({
        'method': 'users.getInfo',
        'fields': 'current_location',
        'uids': FAPI.Client['uid']
    }, function(status, data, error) {
        if (status === 'ok') {
            var city = new model.records.City();

            if (data !== null && data.length > 0) {
                var value = data.shift();
                city.name =  value['location']['city'];
            } else {
                city.name = 'Москва';
            }

            self.dispatch('result', city);
        } else {
            self.dispatch('error', error);
        }
    });
};

tuna.rest.methodFactory.registerMethod('cities.getCurrent', new GetCurrent());

