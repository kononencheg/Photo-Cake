<?php

namespace api;

class MethodFactory implements \cakes\api\IMethodFactory {

    /**
     * @param string $name
     * @return \cakes\api\Method
     */
    function create($name) {
        switch ($name) {
            case 'users.login': return new \api\users\Login();
            case 'users.register': return new \api\users\Register();

            case 'cities.getList': return new \api\cities\GetList();

            default:
                throw new \Exception('Unknown method ' . $name . ' calling.');
        }
    }
}