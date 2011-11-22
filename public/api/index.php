<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$response = new \cakes\view\Response();

$adapterFactory = \cakes\db\mongo\MongoAdapterFactory::getInstance();
$adapterFactory->setRecordFactory(new db\RecordFactory());

$request = \cakes\globals\Request::getInstance();

$methodFactory = new \api\MethodFactory();
$method = $methodFactory->create($request->fetch('method'));

$result = $method->call($request->getSource());

if ($result === NULL) {
    $response->setData($method->getErrors());
} else {
    $response->setData($result);
}


$response->render($method->isResultFlat());

?>