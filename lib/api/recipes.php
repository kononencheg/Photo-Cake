<?php

$mongo = new Mongo();
$db = $mongo->cakes;

$cursor = $db->recipes->find(array(
    'is_visible' => true
));

$result = array();
foreach ($cursor as $obj) {
    array_push($result, $obj);
}

echo json_encode($result);