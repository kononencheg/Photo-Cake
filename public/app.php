<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = \cakes\globals\Request::getInstance();
$session = \cakes\globals\Session::getInstance();

$session->network = $request->fetch('net');
$session->app = $request->getSource();

$page = new \cakes\view\Page();

$page->setBase('app/');
$page->render('layout');

?>