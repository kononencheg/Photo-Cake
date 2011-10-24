<?php
    session_start();

    if (isset($_POST['image_data']) && isset($_SESSION['access_token'])) {

        $mongo = new Mongo();
        $db = $mongo->tortdb;

        $imageData = base64_decode($_POST['image_data']);
        $imageID = uniqid('cake_image_');

        file_put_contents('../../files/' . $imageID . '.jpg', $imageData);

        $image = array(
            'user' => $_SESSION['user'],
            'cake' => '/files/' . $imageID . '.jpg'
        );

        $db->dummy_cakes->save($image);

        echo '<script>parent.handleImage("/files/' . $imageID . '.jpg");</script>';
    }
?>