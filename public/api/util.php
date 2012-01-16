<?php

/*header('Content-Type: application/json');

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

use PhotoCake\Db\Connection\ConnectionManager;

$connection = new \PhotoCake\Db\Mongo\MongoConnection();
$connection->setDb('cakes');
$connection->setRecordFactory(new \Model\RecordFactory());

ConnectionManager::getInstance()->setDefaultConnection($connection);

$orders = new \Api\Resources\Orders();
$payments = new \Api\Resources\Payments();
$cakes = new \Api\Resources\Cakes();
$recipes = new Api\Resources\Recipes();
$deliveries = new \Api\Resources\Deliveries();

$recipe = $recipes->initRecipe('fresh');
$delivery = $deliveries->initDelivery('Санкт-Петербург', '', time());
$cake = $cakes->initCake('http://localhost', NULL, '{"dimensions":{"persons_count":45,"shape":"round","ratio":0.25,"mass":5},"content":{"base_color":7930374,"deco":[{"transform":[0.026641845703125,-0.9995574951171875,0.9995574951171875,0.026641845703125,151,206],"name":"raspberry"},{"transform":[0.8616485595703125,-0.504669189453125,0.504669189453125,0.8616485595703125,99,184],"name":"kiwi"},{"transform":[-0.9986724853515625,-0.0482635498046875,0.0482635498046875,-0.9986724853515625,183,154],"name":"grape"},{"transform":[-0.955322265625,-0.292449951171875,0.292449951171875,-0.955322265625,177,160],"name":"grape"},{"transform":[1,0,0,1,201,179],"name":"flower3"},{"transform":[1,0,0,1,123,169],"name":"flower4"},{"transform":[1,0,0,1,173,105],"name":"flower2"},{"transform":[1,0,0,1,137,239],"name":"pig1"},{"transform":[1,0,0,1,200,139],"name":"hare1"},{"transform":[1,0,0,1,114,79],"name":"car1"}]}}');
$payments->initPayment($cake, $recipe, $delivery);
$orders->initOrder($cake, )
*/
/*
$price = $cakes->getCakePrice($cake);

$orders->createOrder($cake);*/

/*
array(
    'Model\City' => array(
        'fields' => array(
            'name' => 'string'
        ),
    ),

    'Model\Client' => array(
        'fields' => array(
            'name' => 'string',
            'network' => 'string',
            'phone' => 'string',
            'email' => 'string',
        ),
    ),

    'Model\Order' => array(
        'fields' => array(
            'index'   => 'string',
            'comment' => 'string',
        ),
        'embeddedsOne' => array(
            'cake'     => array('class' => 'Model\CakeEmb'),
            'delivery' => array('class' => 'Model\DeliveryEmb'),
            'payment'  => array('class' => 'Model\PaymentEmb'),
            'client'   => array('class' => 'Model\ClientEmb'),
        ),
    ),

        'Model\CakeEmb' => array(
            'isEmbedded' => true,
            'fields' => array(
                'image_url' => 'string',
                'photo_url' => 'string',
                'markup' => 'string',
            ),
        ),

        'Model\DeliveryEmb' => array(
            'isEmbedded' => true,
            'fields' => array(
                'type' => 'string', // Самовывоз или нет!
                'date' => 'date',
                'status'  => 'string',
                'address'  => 'string',
            ),
            'embeddedsOne' => array(
                'city'     => array('class' => 'Model\CityEmb'),
            ),
        ),
            'Model\CityEmb' => array(
                'isEmbedded' => true,
                'fields' => array(
                    'ref_id' => 'string',
                    'name' => 'string',
                ),
            ),

        'Model\PaymentEmb' => array(
            'isEmbedded' => true,
            'fields' => array(
                'type' => 'string', // Предоплата, постоплата и тд.
                'status'  => 'string',
                'price'  => 'integer',

            ),
        ),

        'Model\ClientEmb' => array(
            'isEmbedded' => true,
            'fields' => array(
                'ref_id' => 'string',
                'name' => 'string',
                'network' => 'string',
                'phone' => 'string',
                'email' => 'string',
            ),
        ),
);*/

?>