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

            if ($core instanceof APIService &&
                method_exists($core, $this->_methodName)) {
                
                $errors = array();
                $arguments = $this->filter($params, $core->getFilters($this->_methodName), $errors);

                if (empty($errors)) {
                    $result = call_user_func_array(array($core, $this->_methodName), $arguments);
                } else {
                    $result = $errors;
                }
            }
        }
        
        return $result;
    }

    private function filter($params, $filters, &$errors) {
        $result = array();

        $options = $filters['options'];
        $messages = $filters['messages'];

        $filteredParams = filter_var_array($params, $options);

        foreach($filteredParams as $name => $value) {
            if (isset($messages[$name]) &&
                isset($messages[$name][$value])) {

                $errors[$name] = $messages[$name][$value];
                
                continue;
            }

            array_push($result, $value);
        }

        return $result;
    }
}
