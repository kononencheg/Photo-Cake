<?php

namespace PhotoCake\Db\Record;

interface RecordInterface
{
    /**
     * @abstract
     * @param array $data
     * @return void
     */
    public function populate(array $data);

    /**
     * Specify data which should be stored in data base.
     *
     * @abstract
     * @return array
     */
    public function dbSerialize();

    /**
     * Specify data which should be encoded to JSON.
     *
     * @abstract
     * @return mixed
     */
    public function jsonSerialize();

    /**
     * @abstract
     * @param $name
     * @param $value
     */
    public function set($name, $value);

    /**
     * @abstract
     * @param $name
     */
    public function get($name);

}
