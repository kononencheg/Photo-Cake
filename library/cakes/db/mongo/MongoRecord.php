<?php

namespace cakes\db\mongo;

abstract class MongoRecord implements \cakes\db\common\IRecord {

    /**
     * @var \MongoId
     */
    protected $_id = NULL;

    /**
     * @var string;
     */
    public $id = NULL;

    /**
     * @param mixed $data
     * @return void
     */
    public function populate($data) {
        $params = get_object_vars($this);

        foreach ($params as $name => $value) {
            if (isset($data[$name])) {
                $this->{$name} = $data[$name];
            }
        }

        if ($this->_id !== NULL) {
            $this->id = $this->_id->{'$id'};
        }
    }

    /**
     * Specify data which should be stored in data base.
     *
     * @return mixed
     */
    public function serialize() {
        $result = array();

        $params = get_object_vars($this);
        foreach ($params as $name => $value) {
            if ($name === 'id') {
                continue;
            }

            if ($value !== NULL) {
                $result[$name] = $value;
            }
        }

        return $result;
    }

    /**
     * @return \MongoId
     */
    public function getID() {
        return $this->_id;
    }
}
