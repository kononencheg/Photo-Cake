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
        'network' => 'string',
        'network_id' => 'string',
        'phone' => 'string',
    );
}
