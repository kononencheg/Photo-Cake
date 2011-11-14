<?php

namespace cakes\api;

interface IMethodFactory {

    /**
     * @abstract
     * @param string $name
     * @return \cakes\api\Method
     */
    function create($name);
}
