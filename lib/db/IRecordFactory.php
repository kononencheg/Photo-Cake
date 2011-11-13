<?php

namespace db;

interface IRecordFactory {

    /**
     * @abstract
     * @param string $name
     * @return \db\IRecord
     */
    function create($name);
}
