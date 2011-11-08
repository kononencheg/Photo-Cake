<?php

namespace api;

class APIService {

    protected $_mongo;

    public function __construct() {
        $this->_mongo = new \Mongo();
    }
}
