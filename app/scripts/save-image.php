<?php

    session_start();

    // Бререм данные пользователя из соц сети
    // Записываем в базу данные пользователя и ссылку на картинку и время создания

    $mongo = new Mongo();
    $db = $mongo->tortdb;

    if (isset($_POST['image_data'])) {

        $imageData = base64_decode($_POST['image_data']);
        $imageID = uniqid('cake_image_');

        file_put_contents('../../files/' . $imageID . '.jpg', $imageData);

        $db->dummy_cakes->save(array(
            'user' => $_SESSION['user'],
            'cake' => '/files/cake.jpg'
        ));
    }

    $cursor = $db->dummy_cakes->find();
    $result = array();
    foreach ($cursor as $obj) {
        array_push($result, $obj);
    }

    echo json_encode($result);
?>