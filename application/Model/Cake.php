<?php

namespace Model;

class Cake extends \PhotoCake\Db\Mongo\MongoRecord
{
    public $name = 'cakes';

    /**
     * @var array
     */
    protected $fields = array(
        'image_url' => 'string',
        'photo_url' => 'string',
        'markup' => 'string',
    );

    public function spanSerialize($parent) {

    }
}
