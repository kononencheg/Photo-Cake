<?php

namespace net;

class Request {

    const GET = 0;

    const POST = 1;

    private $_source;

    public function __construct($type = -1) {
        $this->initSource($type);
    }

    private function initSource($type) {
        $source = NULL;
        
        switch ($type) {
            case self::GET: {
                $source = $_GET;
                break;
            }

            case self::POST: {
                $source = $_POST;
                break;
            }

            default: {
                $source = array_merge($_GET, $_POST);
            }
        }

        $this->_source = \utils\ObjectUtils::arrayToObject($source);
    }

    public function __get($name) {
        if (isset($this->_source->$name)) {
            return $this->_source->$name;
        }
        
        return NULL;
    }

    public function __isset($name) {
        return isset($this->_source->$name);
    }

    public function getSource() {
        return $this->_source;
    }

    public function fetch($name) {
        $result = $this->$name;
        
        unset($this->$name);
        
        return $result;
    }

    public function validate($name, $filter, $options) {
        return filter_var($this->_source->$name, $filter, $options);
    }
}
