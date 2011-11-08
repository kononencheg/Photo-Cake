<?php

namespace api;

class APIRouter {

    private $_className;

    private $_methodName;

    public function __construct($method) {
        $parsedMethod = explode('.', $method);

        if (count($parsedMethod) === 2) {
            $this->_className = ucwords($parsedMethod[0]);
            $this->_methodName = $parsedMethod[1];
        }
    }

    public function apply($params) {
        $result = NULL;

        $fullName = '\\' . __NAMESPACE__ . '\\' . $this->_className;
        if (class_exists($fullName)) {
            $core = new $fullName;

            if (method_exists($core, $this->_methodName)) {
                $result = $core->{$this->_methodName}($params);
            }
        }
        
        return $result;
    }
}
