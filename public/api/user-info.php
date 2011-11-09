<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$session = new Session();

$api = new OdnoklassnikiAPI(
    $session->app['application_key'],
    $session->app['session_key'],
    $session->app['session_secret_key']
);

$api->setURL($session->app['api_server']);

echo $api->call('users.getInfo', array(
    'fields' => 'uid,first_name,last_name,location,name,gender,birthday,age,locale',
    'uids' => $session->app['logged_user_id']
));