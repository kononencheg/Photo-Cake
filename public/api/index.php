<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = new \net\Request();
$session = new \auth\Session();

$response = new \view\Response();
$response->init($request);

try {
    $service = new \api\APIRouter($request->fetch('method'));
    $response->result = $service->apply($request->getSource());
} catch (ErrorException $exception) {
    $response->error = $exception->getTrace();
}

$response->render();