/**
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 * @constructor
 */
var DataImage = function(target) {
    tuna.ui.ModuleInstance.call(this, target);
};

tuna.utils.extend(DataImage, tuna.ui.ModuleInstance);

/**
 * @param {string} data
 * @param {string} type
 */
DataImage.prototype.setData = function(data, type) {
    if (type === undefined) {
        type = 'image/jpeg';
    }

    if (!tuna.IS_IE) {
        this._target.src = 'data:' + type + ';base64,' + data;
        this.dispatch('loaded', this._target);
    } else {
        var self = this;
        var form = document.createElement('form');
        form.method = 'POST';
        form.target = 'support_frame';
        form.action = '/api/?method=utils.base64Echo&type=' + type;

        var dataInput = document.createElement('input');
        dataInput.type = 'hidden';
        dataInput.name = 'data';
        dataInput.value = data;

        form.appendChild(dataInput);

        document.body.appendChild(form);

        var frame = tuna.dom.selectOne('#support_frame');
        tuna.dom.addOneEventListener(frame, 'load', function() {
            var image = tuna.dom.selectOne
                ('img', frame.contentWindow.document.body);

            if (image !== null) {
                self.__replaceTarget(image);
            } else {
                self.dispatch('error');
            }

            document.body.removeChild(form);
        });

        form.submit();
    }
};

/**
 * @param {!Node} image
 * @private
 */
DataImage.prototype.__replaceTarget = function(image) {
    var parent = this._target.parentNode;
    if (parent !== null) {
        parent.replaceChild(image, this._target);

        if (this._target.id !== null) {
            image.id = this._target.id;
        }

        this._target = image;

        this.dispatch('loaded', this._target);
    } else {
        this.dispatch('error');
    }
};

/**
 * @extends {DataImage}
 * @constructor
 */
ui.DataImage = DataImage;

/**
 *
 * @type {Object.<string, ui.DataImage>}
 * @private
 */
ui.__idTable = {};

/**
 * @param {!Node} target
 * @return {ui.DataImage}
 */
ui.createDataImage = function(target) {
    if (target.id !== null) {
        if (ui.__idTable[target.id] === undefined) {
            ui.__idTable[target.id] = new ui.DataImage(target);
        }

        return ui.__idTable[target.id];
    }

    return new ui.DataImage(target);
};
