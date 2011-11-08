<?php

set_include_path('../lib' . PATH_SEPARATOR . get_include_path());

require_once('auth/access.php');
require_once('auth/session.php');
require_once('auth/user-role.php');

require_once('net/request.php');

require_once('view/page.php');

require_once('utils/object-utils.php');

$session = new Session();
$page = new Page();

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