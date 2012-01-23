<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

use PhotoCake\Http\Session;
use PhotoCake\Http\Request;
use PhotoCake\View\Page;

$request = Request::getInstance();
$session = Session::getInstance();

$session->set('network', $request->fetch('network'));

$page = new Page();
$page->render('layout');

?>