<?php

namespace db;

class RecordFactory implements IRecordFactory {

    /**
     * @param string $name
     * @return \db\IRecord
     */
    public function create($name) {
        switch($name) {
            case 'users': return new \model\User();
        }

        return NULL;
    }
}
