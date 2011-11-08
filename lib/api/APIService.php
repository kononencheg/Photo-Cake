<?php

namespace api;

class APIService {

    /**
     * @var array
     */
    private $_filters;

    /**
     * @var MongoDB
     */
    protected $_db;

    public function __construct() {
        $mongo = new \Mongo();
        $this->_db = $mongo->selectDB('cakes');

        $this->_filters = array();
        $this->registerFilters();
    }

    protected function registerFilters() {}

    protected function addFilter($method, $options, $messages) {
        $this->_filters[$method] = array(
            'options' => $options,
            'messages' => $messages
        );
    }

    public function getFilters($method) {
        $result = NULL;

        if (isset($this->_filters[$method])) {
            $result = $this->_filters[$method];
        }

        return $result;
    }
}
