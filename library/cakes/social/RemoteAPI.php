<?php

namespace cakes\social;

class RemoteAPI {

    protected $_url;

    public function call($method, $arguments = array()) {
        $query = $this->buildQuery((array) $arguments, $method);
        $url = $this->buildURL($method);

        return $this->request($url, $query, 'GET');
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

    public function request($url, $params, $method) {
        $contextParams = array(
            'http' => array(
                'method' => $method,
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'ignore_errors' => true
            )
        );

        if ($params !== null) {
            $params = http_build_query($params);
            if ($method === 'POST') {
                $contextParams['http']['content'] = $params;
            } else {
                $url .= '?' . $params;
            }
        }

        $context = stream_context_create($contextParams);
        $fp = fopen($url, 'rb', false, $context);

        return stream_get_contents($fp);
    }
}

