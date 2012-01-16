<?php

namespace Model;

class RecordFactory implements \PhotoCake\Db\Record\RecordFactoryInterface
{
    /**
     * @param string $name
     * @return \PhotoCake\Db\Record\RecordInterface
     */
    function create($name)
    {
        switch ($name) {
            case 'orders': return new Order();
            case 'recipes': return new Recipe();
            case 'cakes': return new Cake();
        }

        return NULL;
    }

}
