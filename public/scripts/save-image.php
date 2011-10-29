<?php
    session_start();

    if (isset($_POST['image_data']) && isset($_SESSION['access_token'])) {
        $imageData = base64_decode($_POST['image_data']);
        $imageID = uniqid('cake_image_');
        file_put_contents('../files/' . $imageID . '.jpg', $imageData);

        echo '<script>parent.handleImage("/files/' . $imageID . '.jpg");</script>';

        $mongo = new Mongo();
        $db = $mongo->tortdb;
        $db->dummy_cakes->save(array(
            'user' => $_SESSION['user'],
            'cake' => '/files/' . $imageID . '.jpg'
        ));
    }
?>