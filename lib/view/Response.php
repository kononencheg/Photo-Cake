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

        $request = \net\Request::getInstance();
        if (isset($request->__callback)) {
            $this->_callbackName = $request->fetch('__callback');
            $this->_type = self::FRAME;
        }
    }

    public function render() {
        $responseData = json_encode($this->_data);
        if (isset($this->_callbackName)) {
            echo '<script type="text/javascript">
                      parent.' . $this->_callbackName . '(' . $responseData . ');
                  </script>';
        } else {
            echo $responseData;
        }
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
