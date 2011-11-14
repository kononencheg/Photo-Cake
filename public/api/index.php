<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$response = new \cakes\view\Response();

try {
    $adapterFactory = \cakes\db\mongo\MongoAdapterFactory::getInstance();
    $adapterFactory->setRecordFactory(new db\RecordFactory());

    $request = \cakes\globals\Request::getInstance();

    $methodFactory = new \api\MethodFactory();
    $method = $methodFactory->create($request->fetch('method'));

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