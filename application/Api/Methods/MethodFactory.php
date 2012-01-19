<?php

namespace Api\Methods;

class MethodFactory implements \PhotoCake\Api\Method\MethodFactoryInterface
{
    /**
     * @param $name
     * @return \PhotoCake\Api\Method\Method
     */
    public function create($name)
    {
        switch ($name) {
            case 'social.vk.uploadImage': return new Social\Vk\UploadImage();

            case 'orders.submit': return new Orders\Submit();

            case 'recipes.getList': return new Recipes\GetList();

            case 'utils.base64Echo': return new Utils\Base64Echo();

            default: return NULL;
        }
    }

}