<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$request = \cakes\globals\Request::getInstance();

$base = $request->fetch('base');
if ($base === NULL) {
    $base = 'panel';
}

$path = $request->fetch('path');
if ($path === NULL) {
    $path = 'layout';
}

$page = new \cakes\view\Page();
$page->setBase($base . '/');
$page->render($path);

?>