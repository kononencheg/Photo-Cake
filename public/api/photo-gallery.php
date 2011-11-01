<?php

$mongo = new Mongo();
$db = $mongo->cakes;
$cursor = $db->photo_gallery->find();

$result = array();
foreach ($cursor as $obj) {
    array_push($result, $obj);
}

echo json_encode($result);