<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$page = new \cakes\view\Page();
$page->setBase('panel/');
$page->render('layout');

?>
