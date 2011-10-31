/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-list.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

	tuna.namespace("tuna.tmpl");

    var CompiledList = function(rootTemplate) {
        tuna.tmpl.__CompiledUnit.call(this, rootTemplate);

        this.__compiler = null;

        this.__itemRenderer = null;
        this.__itemTemplate = null;

        this.__itemsTable = {};
        this.__pathEvaluator = new tuna.tmpl.PathEvaluator();
        this.__keyPathEvaluator = new tuna.tmpl.PathEvaluator();

        this.__listNodeRouter = null;
    };

    tuna.extend(CompiledList, tuna.tmpl.__CompiledUnit);

    CompiledList.prototype.setListNodeRouter = function(router) {
        this.__listNodeRouter = router;
    };

    CompiledList.prototype.setPath = function(path) {
        this.__pathEvaluator.setPath(path);
    };

    CompiledList.prototype.setKeyPath = function(path) {
        this.__keyPathEvaluator.setPath(path);
    };

    CompiledList.prototype.setCompiler = function(compiler) {
        this.__compiler = compiler;
    };

    CompiledList.prototype.setItemRenderer = function(element) {
        this.__itemRenderer = element.cloneNode(true);
        this.__itemRenderer.removeAttribute('id');
    };

    CompiledList.prototype.setItemTemplate = function(template) {
        this.__itemTemplate = template;
    };

    CompiledList.prototype.addCompiledItem = function(compiledItem, key) {
        this.__itemsTable[key] = compiledItem;
    };

    CompiledList.prototype.applyData = function(dataNode) {
        var sampleNode = this.__pathEvaluator.evaluate(dataNode);
        if (sampleNode !== undefined) {
            var sample = sampleNode.getValue();

            var oldItemsTable = this.__itemsTable;
            var newChildren = [];

            this.__itemsTable = {};
            for (var index in sample) {
                this.__updateItem(sampleNode.growChild(index), oldItemsTable, newChildren, index);
            }

            this.__destroyItems(oldItemsTable);

            this.getRootTemplate().handleCreatedChildren(newChildren);
        } else {
            this.__destroyItems(this.__itemsTable);
        }
    };

    CompiledList.prototype.destroy = function() {
        this.__destroyItems(this.__itemsTable);
    };

    CompiledList.prototype.__updateItem
        = function(itemNode, oldItemsTable, newChildren, index) {

        var key = null;

        var keyNode = this.__keyPathEvaluator.evaluate(itemNode);
        if (keyNode === undefined) {
            key = index;
        } else {
            key = keyNode.getValue();
        }

        if (oldItemsTable[key] === undefined) {
            this.addCompiledItem(this.__makeNewItem(newChildren), key);
        } else {
            this.__itemsTable[key] = oldItemsTable[key];
            delete oldItemsTable[key];
        }

        this.__itemsTable[key].applyData(itemNode);
    };

    CompiledList.prototype.__destroyItems = function(itemsTable) {
        for (var key in itemsTable) {
            itemsTable[key].destroy();

            delete itemsTable[key];
        }
    };

    CompiledList.prototype.__makeNewItem = function(newChildren) {
        var itemElement = this.__itemRenderer.cloneNode(true);
        newChildren.push(itemElement);

        var template = this.__compiler.compileTemplate
            (this.__itemTemplate, itemElement, this.getRootTemplate());

        this.__listNodeRouter.append(itemElement);

        return template;
    };


    ///////////////////////////////////////////////////////////////////////////////

    var IListItemRouter = function() {};
    IListItemRouter.prototype.append = function(node) {};

    ///////////////////////////////////////////////////////////////////////////////

    var ListContainerRouter = function(containerNode) {
        this._container = containerNode;
    };

    tuna.implement(ListContainerRouter, IListItemRouter);

    ListContainerRouter.prototype.append = function(node) {
        this._container.appendChild(node);
    };

    tuna.tmpl.__CompiledList = CompiledList;
    tuna.tmpl.__IListItemRouter = IListItemRouter;
    tuna.tmpl.__ListContainerRouter = ListContainerRouter;
})();