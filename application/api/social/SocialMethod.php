<?php

namespace api\social;

abstract class SocialMethod extends \cakes\api\Method {

    /**
     * @var \cakes\social\RemoteAPI
     */
    protected $_api;

    /**
     * @var \cakes\globals\Session
     */
    protected $_session;

    public function __construct() {
        $this->_session = \cakes\globals\Session::getInstance();
    }
}
