<?php

namespace PhotoCake\Db\Record;

interface RecordFactoryInterface
{
    /**
     * @abstract
     * @param string $name
     * @return \PhotoCake\Db\Record\RecordInterface
     */
    function create($name);
}
