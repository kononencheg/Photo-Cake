<?php

require_once('../../lib/auth/session.php');
require_once('../../lib/net/request.php');

$request = new Request();
$session = new Session();

$user = file_get_contents(
    'http://ulogin.ru/token.php?token=' . $request->token .
                               '&host=' . $_SERVER['HTTP_HOST']
);

$session->user = json_decode($user);

?>
<script>
    parent.uLogin.hideAll();

    parent.<?php echo $request->callback ?>('<?php echo $request->token ?>');

    if (parent.uLogin.query && parent.uLogin.query.display !== 'window') {
        history.back();
    }
</script>