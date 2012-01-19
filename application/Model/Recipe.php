<?php

namespace Model;

class Recipe extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var string
     */
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

    /**
     * @var array
     */
    protected $spanFields = array(
        'orders' => array('title', 'desc', 'id'),
    );
}
