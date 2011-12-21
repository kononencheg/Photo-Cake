<?php

namespace PhotoCake\Db\Mongo;

use PhotoCake\Db\Collection\CollectionFactoryInterface;

class MongoCollectionFactory implements CollectionFactoryInterface
{

    /**
     * @var \Mongo
     */
    private $mongo = NULL;

    /**
     * @var \PhotoCake\Db\Record\RecordFactoryInterface
     */
    private $recordFactory = NULL;

    /**
     * @var array
     */
    private $collections = array();

    /**
     * 
     */
    private function __construct() {
        // TODO: Set connection options externally
        // TODO: Create connection lazy
        $this->mongo = new \Mongo();
    }

    /**
     * @param string $name
     * @return PhotoCake\Db\Record\RecordInterface
     */
    public function create($name) {
        if (!isset($this->collections[$name])) {
            $collection = new MongoCollection
                            ($this->mongo->selectCollection('cakes', $name));
            $collection->setRecordFactory($this->recordFactory);

            $this->collections[$name] = $collection;
        }

        return $this->collections[$name];
    }

    /**
     * @param \PhotoCake\Db\Record\RecordFactoryInterface $recordFactory
     */
    public function setRecordFactory($recordFactory) {
        $this->recordFactory = $recordFactory;
    }

    /**
     * @var \PhotoCake\Db\Mongo\MongoCollectionFactory
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \PhotoCake\Db\Mongo\MongoCollectionFactory
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new MongoCollectionFactory();
        }

        return self::$instance;
    }
}
