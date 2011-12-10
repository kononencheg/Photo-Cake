<?php

namespace api\social\vk\wall;

class Post extends \api\social\vk\VKMethod {

    private $_imageFileData;

    /**
     * @return void
     */
    protected function test() {
        $this->_imageFileData = base64_decode($this->image_data, true);

        if ($this->_imageFileData === false) {
            $this->addError('image_data', 'Данные изображения не корректны');
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        $fileName = FILE_FOLDER . uniqid('temp_cake_image_') . '.jpg';
        file_put_contents($fileName, $this->_imageFileData, FILE_BINARY);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->upload_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, array(
            "photo" => '@' . $fileName,
        ));

        $result = curl_exec($ch);

        curl_close($ch);
        unlink($fileName);

        return json_decode($result);
    }
}

