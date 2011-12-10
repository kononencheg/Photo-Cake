<?php

namespace api;

class MethodFactory implements \cakes\api\IMethodFactory {

    /**
     * @var \cakes\globals\Session
     */
    private $_session;

    public function __construct() {
        $this->_session = \cakes\globals\Session::getInstance();
    }

    /**
     * @param string $name
     * @return \cakes\api\Method
     */
    public function create($name) {
        switch ($name) {
            case 'game.saveCake': return new \api\game\SaveCake();

            case 'utils.downloadImage': return new \api\utils\DownloadImage();
            case 'utils.echoImage': return new \api\utils\EchoImage();

            default: {
                if (strpos($name, 'social.') === 0) {
                    return $this->createSocialMethod($name);
                } else {
                    throw new \Exception
                        ('Unknown method ' . $name . ' calling.');
                }
            }
        }
    }

    private function createSocialMethod($name) {
        switch ($this->_session->network) {
            case 'ok': return $this->createOKMethod($name);
            case 'vk': return $this->createVKMethod($name);

            default:
                throw new \Exception
                    ('Unknown social network ' . $this->_session->network);
        }
    }

    private function createOKMethod($name) {
        switch ($name) {
             default:
                throw new \Exception
                     ('Unknown OK method ' . $name . ' calling.');
        }
    }

    private function createVKMethod($name) {
        switch ($name) {
            case 'social.wall.post':
                return new \api\social\vk\wall\Post();

             default:
                throw new \Exception
                     ('Unknown VK method ' . $name . ' calling.');
        }
    }


}