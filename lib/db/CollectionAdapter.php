<?php

namespace db;

abstract class CollectionAdapter implements ICollectionAdapter {

    /**
     * @var \db\IRecordFactory
     */
    protected $_recordFactory;

    /**
     * @param \db\IRecordFactory $factory
     * @return void
     */
    public function setRecordFactory($factory) {
        $this->_recordFactory = $factory;
    }

    /**
     * @return \db\IRecord
     */
    public function createRecord() {
        return $this->_recordFactory->create($this->getName());
    }
}
