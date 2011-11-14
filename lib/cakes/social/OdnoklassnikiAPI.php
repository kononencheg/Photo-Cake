<?php

namespace cakes\social;

class OdnoklassnikiAPI extends RemoteAPI {

    private $_sig;

    private $_sessionKey;

    private $_applicationKey;

    public function __construct($applicationKey, $sessionKey, $sig) {
        $this->_applicationKey = $applicationKey;
        $this->_sessionKey = $sessionKey;
        $this->_sig = $sig;
    }

    protected function buildQuery($arguments, $method) {
        $arguments['application_key'] = $this->_applicationKey;
        $arguments['session_key'] = $this->_sessionKey;

        $sigParams = $arguments;
        $sigParams['method'] = $method;

        ksort($sigParams);

        $arguments['sig'] = md5(urldecode(http_build_query($sigParams, null ,'')) . $this->_sig);

        return http_build_query($arguments);
    }

    protected function buildURL($method) {
        return $this->_url . 'fb.do?method=' . $method . '&';
    }
}
