<?php

namespace cakes\db\mongo;

class MongoAdapterFactory implements \cakes\db\common\ICollectionAdapterFactory {

    /**
     * @var \Mongo
     */
    private $_mongo;

    /**
     * @var \db\common\IRecordFactory
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
    }

    /**
     * @param string $name
     * @return \cakes\db\common\ICollectionAdapter
     */
    public function create($name) {
        if (!isset($this->_adaptersTable[$name])) {
            $adapter = new MongoAdapter
                            ($this->_mongo->selectCollection('cakes', $name));
            $adapter->setRecordFactory($this->_recordFactory);

            $this->_adaptersTable[$name] = $adapter;
        }

        return $this->_adaptersTable[$name];
    }

    /**
     * @param \cakes\db\common\IRecordFactory $recordFactory
     */
    public function setRecordFactory($recordFactory) {
        $this->_recordFactory = $recordFactory;
    }

    /**
     * @var \cakes\db\mongo\MongoAdapterFactory
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \cakes\db\mongo\MongoAdapterFactory
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new MongoAdapterFactory();
        }

        return self::$instance;
    }
}
