<?php

namespace Api\Util;

use \PhotoCake\Http\Response\Format\RawFormat;

class Base64Echo extends \PhotoCake\Api\Method {

    private $_echoData;

    /**
     * @return void
     */
    protected function filter()
    {
        $this->applyFilter(array(
            'data' => FILTER_UNSAFE_RAW,
            'type' => FILTER_UNSAFE_RAW
        ), array(
            'data' => array( NULL => 'Данные не заданы' ),
            'type' => array( NULL => 'Тип данных не задан' )
        ));
    }

    /**
     * @return void
     */
    protected function test()
    {
        $this->_echoData = base64_decode($this->getParam('data'), true);

        if ($this->_echoData === false) {
            $this->response->addParamError('data', 'Данные не корректны');
        }
    }

    /**
     * @return mixed
     */
    protected function apply()
    {
        $format = new RawFormat();
        $format->setMimeType($this->getParam('type'));

        $this->response->setFormat($format);

        if ($this->getParam('is_downloading')) {
            $this->response->setHeader(
                'Content-Disposition',
                'attachment; filename=' . $this->getParam('file_name')
            );

            $this->response->setHeader(
                'Cache-Control',
                'must-revalidate, post-check=0, pre-check=0'
            );
        }

        return $this->_echoData;
    }
}

