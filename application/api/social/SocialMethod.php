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
        $this->_api = new \cakes\social\OdnoklassnikiAPI(
            $this->_session->app['application_key'],
            $this->_session->app['session_key'],
            $this->_session->app['session_secret_key']
        );

        $this->_api->setURL($this->_session->app['api_server']);
    }
}
