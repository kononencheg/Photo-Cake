<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

use Api\Resources\Application;

use PhotoCake\Http\Request;
use PhotoCake\View\Page;

$request = Request::getInstance();

$app = new Application();
$app->setupNetworkEnvironment($request->fetch('network'), $request->get());

$page = new Page();
$page->render('layout');

?>