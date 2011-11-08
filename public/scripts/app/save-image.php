<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

$session = new \auth\Session();
$request = new \net\Request();

if (isset($request->image_data) && isset($session->user)) {
    $imageID = uniqid('cake_image_');
    
    file_put_contents
        ('../../files/' . $imageID . '.jpg', base64_decode($request->image_data));

    $mongo = new Mongo();
    $db = $mongo->cakes;

    $image = array(
        'user' => $session->user,
        'cake' => '/files/' . $imageID . '.jpg'
    );

    $db->dummy_cakes->save($image);
}
?>

<script>parent.handleImage(<?php echo json_encode($image) ?>);</script>
