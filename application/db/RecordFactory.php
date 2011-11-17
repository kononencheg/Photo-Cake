<?php

namespace db;

class RecordFactory implements \cakes\db\common\IRecordFactory {

    /**
     * @param string $name
     * @return \db\IRecord
     */
    public function create($name) {
        switch($name) {
            case 'users': return new \db\User();
            case 'cities': return new \db\City();
        }

        return NULL;
    }
}
