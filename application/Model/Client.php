<?php

namespace Model;

class Client extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var array
     */
    protected $fields = array(
        'email' => 'string',
        'name' => 'string',
        'networks' => 'array',
        'phone' => 'string',
    );

    protected $embedFields = array(
        'orders' => array(

        ),
    );
}
