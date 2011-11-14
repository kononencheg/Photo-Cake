<?php

namespace cakes\db\common;

interface IRecord {

    /**
     * @abstract
     * @param mixed $data
     * @return void
     */
    function populate($data);

    /**
     * Specify data which should be stored in data base.
     *
     * @abstract
     * @return mixed
     */
    function serialize();

    /**
     * @abstract
     * @return mixed
     */
    function getID();
}
