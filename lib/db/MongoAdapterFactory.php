<?php

namespace db;

class MongoAdapterFactory implements ICollectionAdapterFactory {

    /**
     * @var \Mongo
     */
    private $_mongo;

    /**
     * @var \cakes\db\RecordFactory
     */
    private $_recordFactory;

    /**
     * @var array
     */
    private $_adaptersTable;

    /**
     * @param \MongoDB $db
     */
    private function __construct() {
        // TODO: Set options externally
        $this->_mongo = new \Mongo();
        $this->_adaptersTable = array();
        $this->_recordFactory = new RecordFactory();
    }

    /**
     * @param string $name
     * @return \db\ICollectionAdapter
     */
    public function create($name) {
        if (!isset($this->_adaptersTable[$name])) {
            $adapter = new \db\MongoAdapter
                            ($this->_mongo->selectCollection('cakes', $name));
            $adapter->setRecordFactory($this->_recordFactory);

            $this->_adaptersTable[$name] = $adapter;
        }

        return $this->_adaptersTable[$name];
    }

    /**
     * @var \cakes\db\MongoAdapterFactory
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \db\MongoAdapterFactory|null
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new MongoAdapterFactory();
        }

        return self::$instance;
    }

}
