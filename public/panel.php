<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$session = new \auth\Session();
$page = new \view\Page();

?>
<!DOCTYPE html>
<html>
    <head>
        <?php $page->render('templates/panel/head.phtml') ?>
    </head>
    <body>
        <?php if (!isset($session->role)) { ?>
            <?php $page->render('templates/panel/login.phtml') ?>
        <?php } else { ?>
            <?php $page->render('templates/panel/main.phtml') ?>
        <?php } ?>

        <?php $page->render('templates/panel/support.phtml') ?>
        <?php $page->render('templates/panel/scripts.phtml') ?>
    </body>
</html>