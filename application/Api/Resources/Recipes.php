<?php

namespace Api\Resources;

class Recipes extends \PhotoCake\Api\Resource\DbResource
{
    /**
     * @param $name
     * @return \PhotoCake\Db\Record\RecordInterface
     */
    public function initRecipe($name)
    {
        return $this->getCollection('recipes')->fetchOne(array('name' => $name));
    }
}
