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

            //case 'social.getCurrentUser': return new \api\social\GetCurrentUser();

            case 'cities.getList': return new \api\cities\GetList();

            case 'social.friends.getList': return new \api\social\friends\GetList();

            case 'game.saveCake': return new \api\game\SaveCake();

            case 'utils.downloadImage': return new \api\utils\DownloadImage();

            default:
                throw new \Exception('Unknown method ' . $name . ' calling.');
        }
    }
}