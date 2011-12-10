(function() {
    tuna.namespace('ui');

    var DataImage = function(target) {
        this.__targetImage = target;
    };

    DataImage.prototype.setData = function(data, type) {
        if (type === undefined) {
            type = 'image/jpeg';
        }

        if (!tuna.IS_IE) {
            this.__targetImage.src = 'data:' + type + ';base64,' + data;
        } else {
            var self = this;
            var frame = tuna.dom.selectOne('#support_frame');
            tuna.dom.addOneEventListener(frame, 'load', function() {
                var image = tuna.dom.selectOne
                    ('img', frame.contentWindow.document.body);

                if (image !== null) {
                    self.__replaceTarget(image);
                }
            });

            var form = document.createElement('form');
            form.method = 'POST';
            form.target = 'support_frame';
            form.action = '/api/?method=utils.echoImage&type=' + type;

            var dataInput = document.createElement('input');
            dataInput.type = 'hidden';
            dataInput.name = 'data';
            dataInput.value = data;

            form.appendChild(dataInput);
            form.submit();
        }
    };

    DataImage.prototype.__replaceTarget = function(image) {
        var parent = this.__targetImage.parentNode;
        if (parent !== null) {
            parent.insertBefore(image, this.__targetImage);
            parent.removeChild(this.__targetImage);

            this.__targetImage = image;
        }
    };

    ui.DataImage = DataImage;
})();