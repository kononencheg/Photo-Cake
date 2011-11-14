<?php

namespace cakes\db\common;

interface ICollectionAdapterFactory {

    /**
     * @abstract
     * @param string $name
     * @return \cakes\db\ICollectionAdapter
     */
    function create($name);
}
