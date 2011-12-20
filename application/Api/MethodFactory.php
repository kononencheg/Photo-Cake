<?php

namespace Api;

use PhotoCake\Http\Session;
use PhotoCake\Social\Network;

class MethodFactory implements \PhotoCake\Api\MethodFactoryInterface
{
    /**
     * @var \PhotoCake\Api\MethodFactoryInterface
     */
    private $_sessionFactory = NULL;

    public function __construct()
    {
        $session = Session::getInstance();

        $this->_sessionFactory = $this->createSessionFactory($session->network);
    }

    /**
     * @param string $name
     * @return \PhotoCake\Api\Method
     * @throws \Exception
     */
    public function create($name)
    {
        $parsedName = explode('.', $name);
        switch ($parsedName[0]) {
            case 'social':
                return $this->_sessionFactory->create($name);

            default:
                return $this->createOtherMethod($name);
        }
    }

    /**
     * @param string $name
     * @return \PhotoCake\Api\Method
     * @throws \Exception
     */
    private function createOtherMethod($name)
    {
        switch ($name) {
            case 'util.base64Echo':
                return new \Api\Util\Base64Echo();
        }

        return NULL;
    }

    /**
     * @param string $network
     * @return \PhotoCake\Api\MethodFactoryInterface
     * @throws \Exception
     */
    private function createSessionFactory($network)
    {
        switch ($network) {
            case Network::OK:
                return NULL;

            case Network::VK:
                return new \Api\Social\Vk\MethodFactory();
        }

        return NULL;

    }
}