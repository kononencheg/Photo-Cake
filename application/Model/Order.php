<?php

namespace Model;

class Order extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var string
     */
    public $collection = 'orders';

    /**
     * @var array
     */
    protected $fields = array(
        'index'   => 'int',
        'comment' => 'string',

        'cake'    => '\Model\Cake',
        'client'  => '\Model\Client',
    );
}
