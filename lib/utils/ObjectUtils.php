<?php

namespace utils;

class ObjectUtils {

    public static function arrayToObject($array) {
        foreach($array as $key => $value){
            if(is_array($value)){
                $array[$key] = self::arrayToObject($value);
            }
        }
        
        return (object) $array;
    }
}
