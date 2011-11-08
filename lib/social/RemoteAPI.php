<?php

namespace social;

class RemoteAPI {

    protected $_url;

    public function call($method, $arguments) {
        $query = $this->buildQuery($arguments, $method);
        $url = $this->buildURL($method);

        return file_get_contents($url . $query);
    }

    public function setURL($apiURL) {
        $this->_url = $apiURL;
    }

    protected function buildQuery($arguments, $method) {
        return NULL;
    }

    protected function buildURL($method) {
        return NULL;
    }
}