<?php

namespace PhotoCake\Db\Record;

interface RecordInterface
{
    /**
     * @abstract
     * @param mixed $data
     * @return void
     */
    public function populate($data);

    /**
     * Specify data which should be stored in data base.
     *
     * @abstract
     * @return mixed
     */
    public function serialize();

    /**
     * @abstract
     * @return mixed
     */
    public function getId();
}
