<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/bootstrap.php');

define('MODEL_DIR', $_SERVER["DOCUMENT_ROOT"] . '/../application/Model');

use Mandango\Mondator\Mondator;

$mondator = new Mondator();
$mondator->setConfigClasses(array(
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
));

$mondator->setExtensions(array(
    new Mandango\Extension\Core(array(
        'metadata_factory_class'  => 'Model\Mapping\MetadataFactory',
        'metadata_factory_output' => MODEL_DIR . '/Mapping',
        'default_output'          => MODEL_DIR,
    )),
));

$mondator->process();

?>