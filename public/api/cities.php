<?php

$mongo = new Mongo();
$db = $mongo->cakes;

$cursor = $db->cities->find();

$result = array();
foreach ($cursor as $obj) {
    array_push($result, $obj);
}

echo json_encode($result);