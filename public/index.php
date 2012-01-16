<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

use Api\Resources\Application;

use PhotoCake\Http\Request;
use PhotoCake\View\Page;

$request = Request::getInstance();

$application = new Application();
$application->setupEnvironment($request->fetch('net'), $request->get());

$page = new Page();
$page->render('layout');

?>