/**
 * TUNA FRAMEWORK
 * 
 * @file path-evaluator.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {
    tuna.namespace("tuna.tmpl");

    var PathEvaluator = function() {
        this.__parsedPath = null;
    };

    PathEvaluator.prototype.setPath = function(path) {
        this.__parsedPath = path.split('/');
    };

    PathEvaluator.prototype.apply = function(dataNode) {
        var result = this.evaluate(dataNode);

        if (result instanceof tuna.tmpl.__DataNode) {
            result = result.getValue();
        }

        return result;
    };

    PathEvaluator.prototype.evaluate = function(dataNode) {
        return this.__applyNextToken(this.__parsedPath, dataNode, 0);
    };

    PathEvaluator.prototype.__applyNextToken = function(tokens, dataNode, index) {
        var token = tokens[index];
        if (dataNode !== null && token !== undefined) {
            return this.__applyNextToken
                (tokens, this.__applyToken(token, dataNode), ++index);
        }

        return dataNode;
    };

    PathEvaluator.prototype.__applyToken = function(token, dataNode) {
        var result = null;

        switch (token) {
            case '': {
                result = dataNode.getRoot();

                break;
            }

            case '.': {
                result = dataNode;
                break;
            }

            case '..': {
                result = dataNode.getParent();
                break;
            }

            case '$key': {
                result = dataNode.getKey();

                break;
            }

            default: {
                result = dataNode.growChild(token);
            }
        }

        return result;
    };

    tuna.tmpl.PathEvaluator = PathEvaluator;
})();