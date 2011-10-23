<?php

$mongo = new Mongo();
$db = $mongo->tortdb;

$cursor = $db->recipes->find(array(
    'isVisible' => true
));

$result = array();
foreach ($cursor as $obj) {
    array_push($result, $obj);
}

echo json_encode($result);