<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

use Api\MethodFactory;

use PhotoCake\Http\Request;
use PhotoCake\Http\Response\Response;
use PhotoCake\Http\Response\Format\FormatFactory;

$request = Request::getInstance();

$methodFactory = new MethodFactory();
$formatFactory = new FormatFactory();

$format = $formatFactory->create($request->fetch('format'), $request);
$method = $methodFactory->create($request->fetch('method'));

$response = new Response();
$response->setFormat($format);

if ($method !== NULL) {
    $method->setResponse($response);
    $method->call($request->get());
} else {
    $response->addError('Unknown method calling', 404);
}

$response->render();

/*
$order = new \Model\Order();
$order->populate(array(
    'index'   => 0,
    'comment' => 'hello',
    'cake' => array(
        'image_url' => 'http://image.jpg',
        'photo_url' => 'http://photo.jpg',
        'markup' => '{ "base_color": "0x000000" }',
    ),
));

var_dump($order->dbSerialize());
var_dump($order->jsonSerialize());*/

?>