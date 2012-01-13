<?php

namespace Model;

class Client extends \PhotoCake\Db\Mongo\MongoRecord
{
    public $name = 'clients';

    /**
     * @var array
     */
    protected $fields = array(
        'email' => 'string',
        'name' => 'string',
        'networks' => 'array',
        'phone' => 'string',
    );
}
