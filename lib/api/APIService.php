<?php

namespace api;

abstract class APIService {

    /**
     * @var \MongoDB
     */
    protected  $_db;

    /**
     * @var \auth\Session
     */
    protected  $_session;

    /**
     * @var string
     */
    private $_method;

    /**
     * @param MongoDB $db
     */
    public function setDB($db) {
        $this->_db = $db;
    }

    /**
     * @param \auth\Session $session
     */
    public function setSession($session) {
        $this->_session = $session;
    }

    /**
     * @param string $method
     */
    public function setMethod($method) {
        $this->_method = $method;
    }

    abstract public function init();

    public function apply($params) {
        $result = NULL;

        $methodSuffix = ucwords($this->_method);

        $applyMethod = 'apply' . $methodSuffix;
        $filterMethod = 'filter' . $methodSuffix;
        $prepareMethod = 'prepare' . $methodSuffix;
        //$finalizeMethod = 'finalize' . $methodSuffix;

        if (method_exists($this, $applyMethod)) {
            $errors = array();
            $arguments = array();

            if (method_exists($this, $filterMethod)) {
                $arguments = call_user_func(array($this, $filterMethod), $params, &$errors);
            }

            if (method_exists($this, $prepareMethod)) {
                array_push($arguments, &$errors);
                call_user_func_array(array($this, $prepareMethod), $arguments);
                array_pop($arguments);
            }

            if (empty($errors)) {
                $result = call_user_func_array(array($this, $applyMethod), $arguments);
            } else {
                $result = array( 'errors' => $errors );
            }
        } else {
            throw new \Exception('Unknown method name');
        }

        return $result;
    }

    protected function filter($params, $filters, $messages, &$errors) {
        $result = array();

        $filteredParams = filter_var_array($params, $filters);

        foreach($filteredParams as $name => $value) {
            if (isset($messages[$name]) &&
                isset($messages[$name][$value])) {

                $errors[$name] = $messages[$name][$value];
            }

            array_push($result, $value);
        }

        return $result;
    }

}
