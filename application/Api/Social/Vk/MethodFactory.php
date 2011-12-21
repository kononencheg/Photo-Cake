<?php

namespace Api\Social\Vk;

use PhotoCake\Http\Session;

class MethodFactory implements \PhotoCake\Api\Method\MethodFactoryInterface
{
    /**
     * @param string $name
     * @return \PhotoCake\Api\Method\Method
     */
    public function create($name)
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