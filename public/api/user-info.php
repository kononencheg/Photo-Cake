<?php

require_once('../../lib/auth/session.php');

class RemoteAPI {

    protected $_url;

    public function call($method, $arguments) {
        $query = $this->buildQuery($arguments);
        $url = $this->buildURL($method);

        return file_get_contents($url . $query);
    }

    public function setURL($apiURL) {
        $this->_url = $apiURL;
    }

    protected function buildQuery($arguments) {
        return NULL;
    }

    protected function buildURL($method) {
        return NULL;
    }

}

class OdnoklassnikiAPI extends RemoteAPI {

    private $_sig;

    private $_sessionKey;

    private $_applicationKey;

    public function __construct($applicationKey, $sessionKey, $sig) {
        $this->_applicationKey = $applicationKey;
        $this->_sessionKey = $sessionKey;
        $this->_sig = $sig;
    }

    protected function buildQuery($arguments) {
        $arguments['application_key'] = $this->_applicationKey;
        $arguments['session_key'] = $this->_sessionKey;
        $arguments['sig'] = $this->_sig;

        return http_build_query($arguments);
    }

    protected function buildURL($method) {
        return $this->_url . 'fb.do?method=' . $method . '&';
    }
}

$session = new Session();

$api = new OdnoklassnikiAPI($session->app['application_key'], $session->app['session_key'], $session->app['sig']);
$api->setURL($session->app['api_server']);

echo $api->call('users.getInfo', array(
                    'fields' => 'uid,first_name,last_name,current_location',
                    'uid' => $session->app['logged_user_id']
               ));
