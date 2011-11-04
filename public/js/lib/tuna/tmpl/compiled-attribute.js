/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-attribute.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.tmpl");

    var CompiledAttribute = function(rootTemplate) {
        tuna.tmpl.__CompiledSpot.call(this, rootTemplate);

        this.__attributeName = null;
        this.__eventName = null;

        this.__hasEvent = false;
    };

    tuna.extend(CompiledAttribute, tuna.tmpl.__CompiledSpot);

    CompiledAttribute.prototype.setAttributeName = function(attributeName) {
        this.__attributeName = attributeName;
        this.__eventName = attributeName + '-change';
    };

    CompiledAttribute.prototype.setEvent = function(hasEvent) {
        this.__hasEvent = hasEvent;
    };

    CompiledAttribute.prototype._applyValue = function(value) {
        if (value !== null) {
            this.__setAttribute(value);
        } else {
            this.__removeAttribute();
        }

        if (this.__hasEvent) {
            var self = this;
            setTimeout(function() {
                self.__dispatchAttribute(value);
            }, 0);
        }
    };

    CompiledAttribute.prototype.__setAttribute = function(value) {
        var i = this.__nodes.length - 1;
        while (i >= 0) {
            this.__nodes[i].setAttribute(this.__attributeName, value);

            if (this.__hasEvent) {
                tuna.dom.dispatchEvent(this.__nodes[i], this.__eventName, value);
            }

            i--;
        }
    };

    CompiledAttribute.prototype.__removeAttribute = function() {
        var i = this.__nodes.length - 1;
        while (i >= 0) {
            this.__nodes[i].removeAttribute(this.__attributeName);
            i--;
        }
    };

    CompiledAttribute.prototype.__dispatchAttribute = function(value) {
        var i = this.__nodes.length - 1;
        while (i >= 0) {
            tuna.dom.dispatchEvent(this.__nodes[i], this.__eventName, value);

            i--;
        }
    };

    tuna.tmpl.__CompiledAttribute = CompiledAttribute;
})();