<?php

namespace Model;

class Delivery extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var array
     */
    protected $fields = array(
        'city' => 'string',
        'address' => 'string',
        'date' => '\MongoDate',
    );


}
