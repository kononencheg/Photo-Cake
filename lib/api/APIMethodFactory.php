<?php

namespace api;

class APIMethodFactory {

    /**
     * @return \api\APIMethod
     */
    public static function create($method) {
        $result = NULL;

        $parsedMethod = explode('.', $method);
        if (count($parsedMethod) === 2) {
            $class = '\\api\\' . $parsedMethod[0] . '\\' .
                        ucwords($parsedMethod[1]);

            if (class_exists($class)) {
                $result = new $class;
            } else {
                throw new \Exception('Unknown method "' . $method . '"');
            }
        } else {
            throw new \Exception('Param "method" must be set');
        }

        return $result;
    }
}
