<?php

namespace Model;

class Cake extends \PhotoCake\Db\Mongo\MongoRecord
{
    /**
     * @var array
     */
    protected $fields = array(
        'image_url' => 'string',
        'photo_url' => 'string',
        'markup' => 'string',
    );
}
