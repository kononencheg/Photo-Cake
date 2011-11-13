<?php

namespace db;

interface ICollectionAdapter {

    /**
     * @abstract
     * @return string
     */
    function getName();

    /**
     * @abstract
     * @param \db\IRecord $record
     * @return void
     */
    function update(&$record);

    /**
     * @abstract
     * @param mixed $data
     * @param mixed $condition
     * @return void
     */
    function updateAll($data, $condition);

    /**
     * @abstract
     * @param mixed $id
     * @return \db\IRecord
     */
    function fetch($id);

    /**
     * @abstract
     * @param mixed $condition
     * @param int $offset
     * @return \db\IRecord
     */
    function fetchOne($condition = NULL, $offset = NULL);

    /**
     * @abstract
     * @param mixed $condition
     * @param mixed $sort
     * @param int $offset
     * @param int $limit
     * @return Iterator
     */
    function fetchAll($condition, $sort, $offset, $limit);

    /**
     * @abstract
     * @param \db\IRecord $record
     * @return void
     */
    function remove($record);

    /**
     * @abstract
     * @param mixed $condition
     * @return void
     */
    function removeAll($condition);

    /**
     * @abstract
     * @param mixed $condition
     * @return int
     */
    function count($condition, $limit, $offset);
    
}
