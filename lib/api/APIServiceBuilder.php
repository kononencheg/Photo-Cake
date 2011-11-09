<?php

namespace api;

class APIServiceBuilder {

    /**
     * @return \api\APIService
     */
    public static function createService($apiMethod) {
        $service = NULL;

        $parsedMethod = explode('.', $apiMethod);
        if (count($parsedMethod) === 2) {
            $class = '\\' . __NAMESPACE__ . '\\' . ucwords($parsedMethod[0]);
            $method = $parsedMethod[1];

            if (class_exists($class)) {
                $service = new $class();
                $service->setMethod($method);
            } else {
                throw new \Exception('Unknown method alias');
            }
        } else {
            throw new \Exception('Param \"method\" must be set');
        }

        return $service;
    }
}
