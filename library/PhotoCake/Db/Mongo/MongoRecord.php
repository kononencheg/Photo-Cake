<?php

namespace PhotoCake\Db\Mongo;

use PhotoCake\Db\Record\AbstractRecord;

abstract class MongoRecord extends AbstractRecord
{
    /**
     * @var string
     */
    public $collection = NULL;

    /**
     * @var \MongoId
     */
    private $id = NULL;

    /**
     * @param mixed $data
     * @return void
     */
    public function populate(array $data)
    {
        parent::populate($data);

        if (isset($data['_id'])) {
            $this->id = $data['_id'];
        }
    }

    protected function createRecord($type)
    {
        if ($this->collection !== NULL) {
            return new $type($this->collection);
        }

        return NULL;
    }

    /**
     * @return array
     */
    public function dbSerialize()
    {
        $result = parent::dbSerialize();

        if ($this->id !== NULL) {
            $result['_id'] = $this->id;
        }

        return $result;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        $result = parent::jsonSerialize();

        if ($this->id !== NULL) {
            $result['id'] = $this->id->{'$id'};
        }

        return $result;
    }

    /**
     * @return \MongoId
     */
    public function getID()
    {
        return $this->id;
    }
}
