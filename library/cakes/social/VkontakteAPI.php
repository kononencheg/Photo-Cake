<?php

namespace cakes\social;

class VkontakteAPI extends RemoteAPI {

    private $_accessToken;

    public function __construct($accessToken) {
        $this->_accessToken = $accessToken;
    }

    protected function buildQuery($arguments, $method) {
        $arguments['access_token'] = $this->_accessToken;
        
        return $arguments;
    }

    protected function buildURL($method) {
        return $this->_url . $method;
    }
}
