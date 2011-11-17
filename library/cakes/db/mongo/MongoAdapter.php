<?php

namespace cakes\db\mongo;

class MongoAdapter extends \cakes\db\common\CollectionAdapter {

    /**
     * @var \MongoCollection
     */
    private $_collection;

    /**
     * @param \MongoCollection $collection
     */
    public function __construct($collection) {
        $this->_collection = $collection;
    }

    /**
     * @return string
     */
    public function getName() {
        return $this->_collection->getName();
    }

    /**
     * @param \db\common\IRecord $record
     * @return void
     */
    public function update(&$record) {
        $data = $record->serialize();
        $this->_collection->save($data);
        $record->populate($data);
    }

    /**
     * @param mixed $data
     * @param mixed $condition
     * @return void
     */
    public function updateAll($data, $condition) {
        $this->_collection->update($condition, $data);
    }

    /**
     * @param mixed $id
     * @return \db\common\IRecord
     */
    public function fetch($id) {
        $data = $this->_collection->findOne(array(
            '_id' => $this->mongoID($id)
        ));
        
        return $this->createRecord($data);
    }

    /**
     * @param mixed $condition
     * @param mixed $offset
     * @return \db\common\IRecord
     */
    public function fetchOne($condition = NULL, $offset = NULL) {
        $result = NULL;
        
        $cursor = $this->_collection->find($condition)
                                    ->limit(1)
                                    ->skip($offset);

        $data = $cursor->getNext();
        if ($data !== NULL) {
            $result = $this->createRecord();
            $result->populate($data);
        }

        return $result;
    }

    /**
     * @param mixed $condition
     * @param mixed $sort
     * @param int $offset
     * @param int $limit
     * @return Iterator
     */
    public function fetchAll($condition = array(),
                             $sort = array(), $offset = NULL, $limit = NULL) {
        
        $cursor = $this->_collection->find($condition)
                                    ->sort($sort)
                                    ->limit($limit)
                                    ->skip($offset);

        return new MongoCursorCollection($cursor, $this);
    }

    /**
     * @param \db\IRecord $record
     * @return mixed
     */
    public function remove($record) {
        return $this->_collection->remove(array(
            '_id' => $this->mongoID($record->getID())
        ));
    }

    /**
     * @param mixed $condition
     * @return mixed
     */
    public function removeAll($condition) {
        return $this->_collection->remove($condition);
    }

    /**
     * @param $condition
     * @return int
     */
    public function count($condition = NULL, $limit = NULL, $offset = NULL) {
        return $this->_collection->count($condition, $limit, $offset);
    }

    /**
     * @param mixed $id
     * @return \MongoId
     */
    private function mongoID($id) {
        if ($id instanceof \MongoId) {
            return $id;
        }

        return new \MongoId($id);
    }
}
