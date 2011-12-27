<?php

namespace Api;

use PhotoCake\Http\Session;
use PhotoCake\Social\Network;

class MethodFactory implements \PhotoCake\Api\Method\MethodFactoryInterface
{
    /**
     * @var \PhotoCake\Api\Method\MethodFactoryInterface
     */
    private $sessionFactory = NULL;

    public function __construct()
    {
        $network = Session::getInstance()->get('network');
        $this->sessionFactory = $this->createSessionFactory($network);
    }

    /**
     * @param string $name
     * @return \PhotoCake\Api\Method\Method
     * @throws \Exception
     */
    public function create($name)
    {
        $parsedName = explode('.', $name);
        switch ($parsedName[0]) {
            case 'social':
                return $this->sessionFactory->create($name);

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
            case 'order.submit':
                return new \Api\Order\Submit();

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