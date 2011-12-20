<?php

    require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

    use Api\MethodFactory;

    use PhotoCake\Http\Request;
    use PhotoCake\Http\Response\Response;
    use PhotoCake\Http\Response\Format\FormatFactory;

    $request = Request::getInstance();

    $methodFactory = new MethodFactory();
    $formatFactory = new FormatFactory();

    $format = $formatFactory->create($request->fetch('format'));
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

?>