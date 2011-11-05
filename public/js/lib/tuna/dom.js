/**
 * TUNA FRAMEWORK
 *
 * @file dom.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    tuna.namespace("tuna.dom");

    tuna.dom.createFragment = function(html, doc) {
        var fragment = doc.createDocumentFragment();

        var tempContainer = doc.createElement('div');
        tempContainer.innerHTML = html;

        var children = tempContainer.childNodes;
        var i = 0,
            l = children.length;

        while (i < l) {
            fragment.appendChild(children.item(0));

            i++;
        }

        return fragment;
    };

    // TODO: Make remove listener
    tuna.dom.addChildEventListener = function(element, childSelector, type, handler) {
        tuna.dom.addEventListener(element, type, function(event) {
            var target = Sizzle.matches(childSelector, [event.target])[0];

            if (target === undefined) {
                target = tuna.dom.getParentMatches(event.target, childSelector, this);
            }

            if (target !== null) {
                handler.call(target, event);
            }
        });
    };

    tuna.dom.addEventListener = function(element, type, handler) {
        if (element.addEventListener !== undefined) {
            element.addEventListener(type, handler);
        } else if (element.attachEvent !== undefined) {
            element.attachEvent("on" + type, handler);
        }
    };

    // TODO: Make remove listener
    tuna.dom.addOneEventListener = function(element, type, handler) {
        tuna.dom.addEventListener(element, type, function(event) {
            handler.call(element, event);

            tuna.dom.removeEventListener(element, type, arguments.callee);
        });
    };

    tuna.dom.removeEventListener = function(element, type, handler) {
        if (element.removeEventListener !== undefined) {
            element.removeEventListener(type, handler);
        } else if (element.detachEvent !== undefined) {
            element.detachEvent("on" + type, handler);
        }
    };

    tuna.dom.dispatchEvent = function(element, type, data) {
        var result = false;
        var doc = element.ownerDocument;

        if (doc.createEventObject !== undefined){
            var event = doc.createEventObject();
            event.data = data;

            result = element.fireEvent('on' + type, event);
        } else {
            var event = document.createEvent('UIEvents');
            event.initEvent(type, true, true);
            event.data = data;

            result = !element.dispatchEvent(event);
        }

        return result;
    };

    tuna.dom.preventDefault = function(event) {
        if (event.preventDefault !== undefined) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    };

    tuna.dom.stopPropogation = function(event) {
        if (event.stopPropogation !== undefined) {
            event.stopPropogation();
        } else {
            event.cancelBubble = true;
        }
    };

    tuna.dom.getChildIndex = function(element, parent) {
        var result = -1;

        var child;
        if (element.parentNode === parent) {
            result = 0;
            child = parent.firstChild;

            while (child !== undefined && child !== element) {
                result++;

                child = child.nextSibling;
            }
        }

        return result;
    };

    tuna.dom.getChildAt = function(parent, index) {
        return parent.childNodes[index];
    };

    tuna.dom.getParentMatches = function(node, selector, context) {
        var parent = node.parentNode;

        while (parent !== null &&
               parent !== context &&
               Sizzle.matches(selector, [parent]).length === 0) {
            
            parent = parent.parentNode;
        }

        return parent === context ? null : parent;
    };

    tuna.dom.getParentWithClass = function(node, className, context) {
        var parent = node.parentNode;

        while (parent !== null &&
               parent !== context &&
               !tuna.dom.hasClass(parent, className)) {

            parent = parent.parentNode;
        }

        return parent === context ? null : parent;
    };

    // TODO: implement new classList API

    tuna.dom.hasClass = function(element, className) {
        return element.className.match
            (new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };

    tuna.dom.addClass = function(element, className) {
        if (!tuna.dom.hasClass(element, className)) {
            element.className += " " + className;
        }
    };

    tuna.dom.removeClass = function(element, className) {
        if (tuna.dom.hasClass(element, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            element.className = element.className.replace(reg, '');
        }
    };

})();