<?php

namespace Model;

class City extends \PhotoCake\Db\Mongo\MongoRecord
{
    public $name = 'cities';

    /**
     * @var array
     */
    protected $fields = array(
        'name' => 'string'
    );
}
