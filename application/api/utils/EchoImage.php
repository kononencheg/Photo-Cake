<?php

namespace api\utils;

class EchoImage extends \cakes\api\Method {

    private $_echoData;

    /**
     * @return void
     */
    protected function filter() {
        $this->applyFilter(array(
            'data' => FILTER_UNSAFE_RAW,
            'type' => FILTER_UNSAFE_RAW
        ), array(
            'data' => array( NULL => 'Данные изображения не заданны' ),
            'type' => array( NULL => 'Тип изображения не заданы' )
        ));
    }

    /**
     * @return void
     */
    protected function test() {
        $this->data = str_replace(' ', '+', $this->data);
        $this->_echoData = base64_decode($this->data, true);

        if ($this->_echoData === false) {
            $this->addError('data', 'Данные изображения не корректны');
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        if ($this->is_downloading) {
            header('Content-Description: File Transfer');
            header('Content-Disposition: attachment; filename=cake.jpg');
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Pragma: public');
        }

        header("Content-type: ". $this->type);

        echo $this->_echoData;

        exit;
    }
}
