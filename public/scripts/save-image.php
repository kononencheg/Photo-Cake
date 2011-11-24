<?php
session_start();

if (isset($_POST['image_data']) && isset($_SESSION['user'])) {
    $imageID = uniqid('cake_image_');
    
    file_put_contents
        ('../files/' . $imageID . '.jpg', base64_decode($_POST['image_data']));

    $mongo = new Mongo();
    $db = $mongo->cakes;

    $image = array(
        'user' => $_SESSION['user'],
        'cake' => '/files/' . $imageID . '.jpg'
    );

    $db->dummy_cakes->save($image);

    $image['cake'] = 'http://' . $_SERVER['HTTP_HOST'] . $image['cake'];
}
?>

<script>parent.handleImage(<?php echo json_encode($image) ?>);</script>
