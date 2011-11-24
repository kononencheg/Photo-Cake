<?php
session_start();

$request = array_merge($_GET, $_POST);

$user = file_get_contents(
    'http://ulogin.ru/token.php?token=' . $request['token'] .
                               '&host=' . $_SERVER['HTTP_HOST']
);

$_SESSION['user'] = json_decode($user);

?>
<script type="text/javascript">
    parent.uLogin.hideAll();

    parent.<?php echo $request['callback'] ?>('<?php echo $request['token'] ?>');

    if (parent.uLogin.query && parent.uLogin.query.display !== 'window') {
        history.back();
    }
</script>