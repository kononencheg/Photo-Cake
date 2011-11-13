<?php

namespace db;

interface ICollectionAdapterFactory {

    /**
     * @abstract
     * @param string $name
     * @return \db\ICollectionAdapter
     */
    function create($name);
}
