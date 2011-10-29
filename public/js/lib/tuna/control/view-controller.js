(function() {
    tuna.namespace('tuna.control');

    var ViewController = function(targetID) {
        tuna.utils.Notifier.call(this);

        this.__targetID = targetID;

        this.__target = null;
        this.__container = null;
    };

    tuna.extend(ViewController, tuna.utils.Notifier);
    tuna.implement(ViewController, tuna.tmpl.INodeHandler);

    ViewController.prototype.init = function() {
        this.notify('init', this.__target);
    };

    ViewController.prototype.prepare = function(container) {
        this.__target = Sizzle('#' + this.__targetID)[0];

        if (this.__target) {
            this.__container = container;
        }

        this.notify('prepare', this.__container);
    };

    ViewController.prototype.wait = function() {
        ViewController.__waitTable[this.__targetID] = this;
    };

    ViewController.prototype.handleCreated = function(node) {
        this.notify('create-node', node);
    };

    ViewController.prototype.handleRemoved = function(node) {
        this.notify('remove-node', node);
    };

    ViewController.__waitTable = {};

    ViewController.fetchController = function(target) {
        var viewController = ViewController.__waitTable[target.id];

        if (viewController !== undefined) {
            delete ViewController.__waitTable[target.id];;
        }

        return viewController;
    };

    tuna.control.ViewController = ViewController;
})();