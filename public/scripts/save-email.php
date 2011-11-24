<?php
session_start();

$request = array_merge($_GET, $_POST);

if (isset($request['email']) &&
    filter_var($request['email'], FILTER_VALIDATE_EMAIL)) {

    $mongo = new Mongo();
    $db = $mongo->cakes;
    $db->emails->save(array(
        'email' => $request['email']
    ));

    echo '<script>parent.handleEmail();</script>';
    
} else {
    echo '<script>parent.handleEmailError();</script>';
}


?>

