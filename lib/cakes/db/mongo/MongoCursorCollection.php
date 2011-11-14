<?php

namespace cakes\db\mongo;

class MongoCursorCollection implements \Iterator {

    /**
     * @var \SplFixedArray
     */
    private $_data;

    /**
     * @var int
     */
    private $_key;

    /**
     * @var \MongoCursor
     */
    private $_cursor;

    /**
     * @var \db\mongo\MongoAdapter
     */
    private $_adapter;

    /**
     * @param \MongoCursor $cursor
     */
    public function __construct($cursor, $adapter) {
        $this->_cursor = $cursor;

        $this->_key = 0;
        $this->_data = new \SplFixedArray($this->_cursor->count(true));

        $this->_adapter = $adapter;
    }


    /**
     * @return \db\common\IRecord
     */
    public function current() {
        if (!isset($this->_data[$this->_key])) {
            $data = $this->_cursor->current();
            if ($data !== NULL) {
                $this->_data[$this->_key] = $this->_adapter->createRecord($data);
            }
        }

        return $this->_data[$this->_key];
    }

    /**
     * @return void
     */
    public function next() {
        $this->_cursor->next();
        $this->_key++;
    }

    /**
     * @return int
     */
    public function key() {
        return $this->_key;
    }

    /**
     * @return bool
     */
    public function valid() {
        return $this->_cursor->valid();
    }

    /**
     * @return void
     */
    public function rewind() {
        $this->_cursor->rewind();
        $this->_key = 0;
    }
}
