<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$session = new \auth\Session();
$request = new \net\Request();

$user = file_get_contents(
    'http://ulogin.ru/token.php?token=' . $request->token .
                               '&host=' . $_SERVER['HTTP_HOST']
);

$session->user = json_decode($user);

?>
<script type="text/javascript">
    parent.uLogin.hideAll();

    parent.<?php echo $request->callback ?>('<?php echo $request->token ?>');

    if (parent.uLogin.query && parent.uLogin.query.display !== 'window') {
        history.back();
    }
</script>