<?php

namespace cakes\api;

abstract class Method {
    /**
     * @var array
     */
    protected $_params = array();

    /**
     * @var string|array
     */
    private $_errors = NULL;

    /**
     * @abstract
     * @return void
     */
    protected function filter() {}

    /**
     * @abstract
     * @return void
     */
    protected function test() {}

    /**
     * @abstract
     * @return mixed
     */
    abstract protected function apply();

    /**
     * @param mixed $params
     * @return mixed
     */
    public function call($params) {
        $this->_params = $params;

        $this->filter();

        if (empty($this->_errors)) {
            $this->test();
        }

        if (empty($this->_errors)) {
            return $this->apply();
        }

        return NULL;
    }

    /**
     * @param $name
     * @return mixed
     */
    public function __get($name) {
        if (isset($this->_params[$name])) {
            return $this->_params[$name];
        }

        return NULL;
    }

    public function __set($name, $value) {
        $this->_params[$name] = $value;
    }

    /**
     * @param $filters
     * @param $messages
     * @return void
     */
    protected function applyFilter($filters, $messages) {
        $filteredParams = filter_var_array($this->_params, $filters);

        foreach($filteredParams as $name => $value) {
            if (isset($messages[$name]) &&
                isset($messages[$name][$value])) {

                $this->addError($name, $messages[$name][$value]);
            }
        }
    }

    /**
     * @param string $name
     * @return bool
     */
    protected function hasError($name) {
        return isset($this->_errors[$name]);
    }

    /**
     * @param $name
     * @param $message
     * @return void
     */
    protected function addError($name, $message) {
        $this->_errors[$name] = $message;
    }

    protected function setMethodError($message) {
        $this->_errors = $message;
    }

    /**
     * @return array
     */
    public function getErrors() {
        return array( 'errors' => $this->_errors );
    }
}
