<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = \PhotoCake\Http\Request::getInstance();
$session = \PhotoCake\Http\Session::getInstance();

$session->set('network', $request->fetch('net'));
$session->set('app', $request->get());

$page = new \PhotoCake\View\Page();

$page->setBase('app/');
$page->render('layout');

?>