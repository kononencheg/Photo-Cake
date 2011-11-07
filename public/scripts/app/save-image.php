<?php

require_once('../../../lib/auth/session.php');
require_once('../../../lib/net/request.php');

$request = new Request();
$session = new Session();

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
