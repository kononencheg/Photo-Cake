<?php

namespace api\utils;

class DownloadImage extends \cakes\api\Method {

    private $_file;

    /**
     * @return void
     */
    protected function test() {
        $this->_file = $_SERVER["DOCUMENT_ROOT"] . $this->url;

        if (!file_exists($this->_file)) {
            $this->addError('url', 'Файла не существует на сервере');
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($this->_file));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Pragma: public');
        header('Content-Length: ' . filesize($this->_file));

        ob_clean();
        flush();

        readfile($this->_file);

        exit;
    }
}
