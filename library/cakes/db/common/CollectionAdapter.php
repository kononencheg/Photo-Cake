<?php

namespace cakes\db\common;

abstract class CollectionAdapter implements ICollectionAdapter {

    /**
     * @var \cakes\db\common\IRecordFactory
     */
    protected $_recordFactory;

    /**
     * @param \cakes\db\common\IRecordFactory $factory
     * @return void
     */
    public function setRecordFactory($factory) {
        $this->_recordFactory = $factory;
    }

    /**
     * @return \cakes\db\common\IRecord
     */
    public function createRecord() {
        return $this->_recordFactory->create($this->getName());
    }
}
