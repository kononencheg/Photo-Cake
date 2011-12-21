<?php

namespace Api\Social\Vk\Wall;

class Post extends \PhotoCake\Api\Method\Method
{

    private $imageFileData;

    /**
     * @return void
     */
    protected function test()
    {
        $this->imageFileData = base64_decode($this->getParam('image_data'), true);

        if ($this->imageFileData === false) {
            $this->response->addParamError
                ('image_data', 'Данные изображения не корректны');
        }
    }

    /**
     * @return mixed
     */
    protected function apply()
    {
        $fileName = FILE_FOLDER . uniqid('temp_cake_image_') . '.jpg';
        file_put_contents($fileName, $this->imageFileData, FILE_BINARY);

        $request = curl_init();
        curl_setopt($request, CURLOPT_URL, $this->getParam('upload_url'));
        curl_setopt($request, CURLOPT_POST, true);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_POSTFIELDS, array(
            "photo" => '@' . $fileName,
        ));

        $result = curl_exec($request);

        curl_close($request);
        unlink($fileName);

        return json_decode($result);
    }
}

