<?php
    if (isset($_POST['email'])) {
        $email = $_POST['email'];

        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mongo = new Mongo();
            $db = $mongo->tortdb;
            $db->emails->save(array(
                'email' => $email
            ));

            echo '<script>parent.handleEmail();</script>';
        } else {
            echo '<script>parent.handleEmailError();</script>';
        }
    }
?>

