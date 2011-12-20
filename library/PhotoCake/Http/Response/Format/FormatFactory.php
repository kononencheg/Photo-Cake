<?php

namespace PhotoCake\Http\Response\Format;

class FormatFactory
{
    /**
     * @param string $name
     * @return \PhotoCake\Http\Response\Format\FormatInterface
     */
    public function create($name = NULL)
    {
        switch ($name) {
            case 'json':
            default:
                return new JSONFormat();
        }
    }
}
