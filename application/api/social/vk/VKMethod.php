<?php

namespace api\social\vk;

abstract class VKMethod extends \api\social\SocialMethod {

    public function __construct() {
        parent::__construct();

        $this->_api = new \cakes\social\VkontakteAPI(
            $this->_session->app['access_token']
        );

        $this->_api->setURL('https://api.vkontakte.ru/method/');
    }
}
