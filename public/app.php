<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = \PhotoCake\Http\Request::getInstance();
$session = \PhotoCake\Http\Session::getInstance();

$network = $request->fetch('net');
if ($network !== NULL) {
    $session->set('network', $network);
}

$session->set('app', $request->get());

$page = new \PhotoCake\View\Page();

$page->setBase('app/');
$page->render('layout');

?>