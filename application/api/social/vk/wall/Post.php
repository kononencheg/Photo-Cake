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
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $this->upload_url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, array(
            "photo" => "@" . $this->_file,
        ));

        $result = curl_exec($ch);

        var_dump($result);
        return $result;
    }
}