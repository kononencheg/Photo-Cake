<?php

namespace api\cities;
 
class GetList extends \cakes\api\Method {

    /**
     * @var \db\ICollectionAdapter
     */
    protected $_collection;

    public function __construct() {
        $factory = \cakes\db\mongo\MongoAdapterFactory::getInstance();
        $this->_collection = $factory->create('cities');
    }

    /**
     * @return mixed
     */
    protected function apply() {
        return iterator_to_array($this->_collection->fetchAll());
    }
}
