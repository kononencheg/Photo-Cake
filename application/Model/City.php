<?php

namespace Model;

class City extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var array
     */
    protected $fields = array(
        'name' => 'string'
    );
}
