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


        $data = json_decode($this->_api->call('photos.getWallUploadServer', array(
            'uid' => $this->user_id
        )));

        var_dump($data);
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_URL, $data->response->upload_url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, array(
            "photo" => "@" . $this->_file,
        ));

        $options = json_decode(curl_exec($ch));
        $options->uid = $this->user_id;
        
        $data = json_decode($this->_api->call('photos.saveWallPhoto', $options));

        return $data->response[0];
    }
}