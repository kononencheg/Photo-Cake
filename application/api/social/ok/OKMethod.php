<?php

namespace api\social\ok;

abstract class OKMethod extends \api\social\SocialMethod {
    public function __construct() {
        parent::__construct();

        $this->_api = new \cakes\social\OdnoklassnikiAPI(
            $this->_session->app['application_key'],
            $this->_session->app['session_key'],
            $this->_session->app['session_secret_key']
        );

        $this->_api->setURL($this->_session->app['api_server']);
    }
}
