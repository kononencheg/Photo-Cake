<?php

namespace api\social\vk\wall;

class Post extends \api\social\vk\VKMethod {

    private $_file;

    /**
     * @return void
     */
    protected function test() {
        $this->_file = $_SERVER["DOCUMENT_ROOT"] . $this->image_url;

        if (!file_exists($this->_file)) {
            $this->addError('image_url', 'Файла не существует на сервере');
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
        curl_setopt($ch, CURLOPT_URL, $this->upload_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

        curl_setopt($ch, CURLOPT_REFERER, $_SERVER['HTTP_REFERER']);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);

        curl_setopt($ch, CURLOPT_POSTFIELDS, array(
            "photo" => '@' . $this->_file,
        ));
        
        $result = curl_exec($ch);
        $error = curl_error($ch);

        var_dump($result);
        
        return null;


    }
}

