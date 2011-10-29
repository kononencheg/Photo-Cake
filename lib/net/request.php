<?php


class Request {

    const GET = 0;

    const POST = 1;

    private $_source;

    public function __construct($type = -1) {
        initSource($type);
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

    public function __get($name) {
        return $this->_source[$name];
    }

    public function __isset($name) {
        return isset($this->_source[$name]);
    }

    public function validate($name, $filter, $options) {
        return filter_var($this->_source[$name], $filter, $options);
    }
}
