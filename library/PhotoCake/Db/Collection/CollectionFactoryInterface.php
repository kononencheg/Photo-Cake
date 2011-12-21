<?php

namespace PhotoCake\Db\Collection;

interface CollectionFactoryInterface
{
    /**
     * @abstract
     * @param string $name
     * @return PhotoCake\Db\Record\RecordInterface
     */
    function create($name);
}
