<?php

namespace Api\Social\Vk;

use PhotoCake\Http\Session;

class MethodFactory implements \PhotoCake\Api\MethodFactoryInterface
{
    /**
     * @param string $name
     * @return \PhotoCake\Api\Method
     */
    public function create(\string $name)
    {
        switch ($name) {
            case 'social.wall.post':
                return new \Api\Social\Vk\Wall\Post();

             default:
                throw new \Exception
                     ('Unknown VK method ' . $name . ' calling.');
        }
    }
}