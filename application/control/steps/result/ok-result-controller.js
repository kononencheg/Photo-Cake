/**
 * @extends {tuna.control.PageViewController}
 * @constructor
 */
var OkResultController = function() {
    tuna.control.PageViewController.call(this);

    /**
     * @type {?string}
     * @private
     */
    this.__orderId = null;

    /**
     * @type {number}
     * @private
     */
    this.__totalPrice = -1;

    /**
     * @override
     */
    this._modules = [ 'data-image-copy', 'button' ];
};

tuna.utils.extend(OkResultController, tuna.control.PageViewController);

/**
 * @override
 */
OkResultController.prototype._initActions = function() {
    var self = this;

    var payButton = this._container.getModuleInstanceByName
        ('button', 'pay-button');

    var cashButton = this._container.getModuleInstanceByName
        ('button', 'cash-button');

    cashButton.addEventListener('click', function() {
        tuna.ui.popups.alert('Спасибо за заказ!');
        self._navigation.navigate('title');
    });

    payButton.addEventListener('click', function() {
        if (self.__orderId !== null) {
            window.API_callback = function(method, status, attrs) {
                if (status === 'ok' && method === 'showPayment') {
                    debugger;
                    alert(attrs);
                }

                window.API_callback = null;
            };

            FAPI.UI.showPayment(
                'Тортик', 'Покупаете тортик?',
                self.__orderId, 1,
                null, null, 'RUR', 'true'
            );
        }
    });
};

/**
 * @override
 */
OkResultController.prototype.open = function(order) {
    if (order !== null) {
        this.__orderId = order.id;
        this.__totalPrice = order.payment.getTotalPrice();
    }
};

tuna.control.registerController('result_step', new OkResultController());
