<?php

namespace cakes\view;

class Page {
    /**
     * @var string
     */
    private $_base = '';

    private $_session = NULL;

    public function __construct() {
        $this->_session = \cakes\globals\Session::getInstance();
        ob_start();
    }

    public function __destruct() {
        echo ob_get_clean();
    }

    /**
     * @param string $path
     * @return string
     */
    public function render($path) {
        include $this->_base . $path . '.phtml';
    }

    /**
     * @param string $base
     */
    public function setBase($base) {
        $this->_base = $base;
    }



}
