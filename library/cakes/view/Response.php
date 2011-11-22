<?php

namespace cakes\view;

class Response {

    const XHR = 0;
    const FRAME = 1;

    /**
     * @var int
     */
    private $_type;

    /**
     * @var mixed
     */
    private $_callbackName;

    /**
     * @var array
     */
    private $_data;

    public function __construct() {
        $this->_type = self::XHR;
        $this->_data = array();

        $request = \cakes\globals\Request::getInstance();
        if (isset($request->__callback)) {
            $this->_callbackName = $request->fetch('__callback');
            $this->_type = self::FRAME;
        }
    }

    public function render($isFlat = false) {
        $responseData = $isFlat ? $this->_data : json_encode($this->_data);

        if (isset($this->_callbackName)) {
            echo '<script type="text/javascript">
                      parent.' . $this->_callbackName . '(' . $responseData . ');
                  </script>';
        } else {
            echo $responseData;
        }
    }

    public function setData($value) {
        $this->_data = $value;
    }
}
