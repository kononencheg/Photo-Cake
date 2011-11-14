<?php

namespace cakes\db\common;

interface IRecordFactory {

    /**
     * @abstract
     * @param string $name
     * @return \cakes\db\IRecord
     */
    function create($name);
}
