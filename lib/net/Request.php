<?php

namespace net;

class Request {

    const GET = 0;

    const POST = 1;

    private $_source;

    private function __construct($type = -1) {
        $this->initSource($type);
    }

    private function initSource($type) {
        switch ($type) {
            case self::GET: {
                $this->_source = $_GET;
                break;
            }

            case self::POST: {
                $this->_source = $_POST;
                break;
            }

            default: {
                $this->_source = array_merge($_GET, $_POST);
            }
        }
    }

    public function &__get($name) {
        if (isset($this->_source[$name])) {
            return $this->_source[$name];
        }
        
        return NULL;
    }

    public function __isset($name) {
        return isset($this->_source[$name]);
    }

    public function getSource() {
        return $this->_source;
    }

    public function fetch($name) {
        $result = $this->$name;
        
        unset($this->$name);

        return $result;
    }


    private static $instance = NULL;

    /**
     * @static
     * @return \net\Request
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new Request();
        }

        return self::$instance;
    }
}
