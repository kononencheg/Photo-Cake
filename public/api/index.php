<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$response = new \view\Response();

try {
    
    $request = \net\Request::getInstance();
    $method = \api\APIMethodFactory::create($request->fetch('method'));

    $response->response = $method->call($request->getSource());
    if ($response->response === NULL) {
        $response->response = array(
            'errors' => $method->getErrors()
        );
    }

} catch (Exception $exception) {

    $response->error = $exception->getMessage();
    $response->error_code = $exception->getCode();
    $response->trace = $exception->getTrace();
    
}

$response->render();

?>