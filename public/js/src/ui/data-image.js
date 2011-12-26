(function() {
    tuna.namespace('ui');

    var DataImage = function(target) {
        tuna.events.EventDispatcher.call(this);
        
        this.__targetImage = target;
    };

    tuna.extend(DataImage, tuna.events.EventDispatcher);

    DataImage.prototype.getTarget = function() {
        return this.__targetImage;
    };

    DataImage.prototype.setData = function(data, type) {
        if (type === undefined) {
            type = 'image/jpeg';
        }

        if (!tuna.IS_IE) {
            this.__targetImage.src = 'data:' + type + ';base64,' + data;
            this.dispatch('loaded', this.__targetImage);
        } else {
            var self = this;
            var form = document.createElement('form');
            form.method = 'POST';
            form.target = 'support_frame';
            form.action = '/api/?method=util.base64Echo&type=' + type;

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

    DataImage.prototype.__replaceTarget = function(image) {
        var parent = this.__targetImage.parentNode;
        if (parent !== null) {
            parent.replaceChild(image, this.__targetImage);

            if (this.__targetImage.id !== null) {
                image.id = this.__targetImage.id;
            }

            this.__targetImage = image;

            this.dispatch('loaded', this.__targetImage);
        } else {
            this.dispatch('error');
        }
    };

    var idTable = {};

    DataImage.create = function(target) {
        if (target.id !== null) {
            if (idTable[target.id] === undefined) {
                idTable[target.id] = new DataImage(target);
            }

            return idTable[target.id];
        }

        return new DataImage(target);
    };

    ui.DataImage = DataImage;
})();