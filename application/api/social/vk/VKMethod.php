<?php

namespace api\social\vk;

abstract class VKMethod extends \api\social\SocialMethod {

    /**
     * @var string
     */
    protected $_viewerID ;

    public function __construct() {
        parent::__construct();

        $this->_viewerID = $this->_session->app['viewer_id'];

        $this->_api = new \cakes\social\VkontakteAPI(
            $this->_session->app['access_token']
        );

        $this->_api->setURL('https://api.vkontakte.ru/method/');
    }
}
