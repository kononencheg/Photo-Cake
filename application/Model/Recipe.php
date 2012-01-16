<?php

namespace Model;

class Recipe extends \PhotoCake\Db\Mongo\MongoRecord
{
    public $name = 'recipes';

    /**
     * @var array
     */
    protected $fields = array(
        'name' => 'string',
        'title' => 'string',
        'desc' => 'string',
        'image_url' => 'string',
        'price' => 'float',
    );
}
