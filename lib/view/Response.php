<?php

namespace view;

class Response {

    const XHR = 0;
    const FRAME = 1;

    private $_type;

    private $_callbackName;

    private $_data;

    public function __construct() {
        $this->_type = self::XHR;
        $this->_data = new \stdClass();
    }

    public function init($request) {
        if (isset($request->__callback)) {
            $this->_callbackName = $request->fetch('__callback');
            $this->_type = self::FRAME;
        }
    }

    public function render() {
        echo json_encode($this->_data);
    }

    public function __set($name, $value) {
        $this->_data->$name = $value;
    }

    public function __get($name) {
        return $this->_data->$name;
    }

    public function __isset($name) {
        return isset($this->_data->$name);
    }

    public function __unset($name) {
        unset($this->_data->$name);
    }
}
