<?php

namespace PhotoCake\View;

use PhotoCake\Http\Session;

class Page
{
    /**
     * @var string
     */
    private $_base = '';

    /**
     * @var \PhotoCake\Http\Session
     */
    private $_session = NULL;

    public function __construct()
    {
        $this->_session = Session::getInstance();

        ob_start();
    }

    public function __destruct()
    {
        echo ob_get_clean();
    }

    /**
     * @param string $path
     * @return string
     */
    public function render(\string $path)
    {
        include $this->_base . $path . '.phtml';
    }

    /**
     * @param string $base
     */
    public function setBase(\string $base)
    {
        $this->_base = $base;
    }
}
