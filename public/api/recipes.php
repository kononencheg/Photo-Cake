<?php

class Responce {
    public function render() {

    }
}

$mongo = new Mongo();
$db = $mongo->selectDB('tortdb');

$cursor = $db->selectCollection('recipes')->find(array(
    'isVisible' => true
));

$result = array();
foreach ($cursor as $obj) {
    array_push($result, $obj);
}

echo json_encode($result);