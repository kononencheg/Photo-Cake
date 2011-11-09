<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = new \net\Request();
$session = new \auth\Session();

$response = new \view\Response();
$response->init($request);

try {
    $mongo = new \Mongo();
    $cakesDB = $mongo->selectDB('cakes');

    $service = \api\APIServiceBuilder::createService($request->fetch('method'));
    $service->setDB($cakesDB);
    $service->setSession($session);
    $service->init();

    $response->response = $service->apply($request->getSource());
} catch (Exception $exception) {
    $response->error = $exception->getMessage();
    $response->error_code = $exception->getCode();
    $response->trace = $exception->getTrace();
}

$response->render();