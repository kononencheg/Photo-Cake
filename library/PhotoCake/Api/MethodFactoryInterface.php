<?php

namespace PhotoCake\Api;

interface MethodFactoryInterface
{
    /**
     * @param string $name
     * @return \PhotoCake\Api\Method
     */
    function create($name);
}