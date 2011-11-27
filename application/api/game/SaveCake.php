<?php

namespace api\game;

class SaveCake extends \cakes\api\Method {

    /**
     * @var \db\ICollectionAdapter
     */
    private $_gameCakes;

    /**
     * @var \cakes\globals\Session
     */
    private $_session;

    /**
     * @var null
     */
    private $_rawData = null;

    public function __construct() {
        $factory = \cakes\db\mongo\MongoAdapterFactory::getInstance();
        
        $this->_gameCakes = $factory->create('game_cakes');
        $this->_session = \cakes\globals\Session::getInstance();
    }

    /**
     * @return void
     */
    protected function filter() {
        $this->applyFilter(array(
            'image_data' => FILTER_UNSAFE_RAW
        ), array(
            'image_data' => array( NULL => 'Данные изображения не заданны' )
        ));
    }

    /**
     * @return void
     */
    protected function test() {
        $this->image_data = str_replace(' ', '+', $this->image_data);
        $this->_rawData = base64_decode($this->image_data, true);

        if ($this->_rawData === false) {
            $this->addError('image_data', 'Данные изображения не корректны');
        }
    }
    
    /**
     * @return mixed
     */
    protected function apply() {
        $fileName = uniqid('game_cake_image_') . '.jpg';

        file_put_contents(FILE_FOLDER . $fileName, base64_decode($this->image_data, true), FILE_BINARY);

        $cake = new \db\GameCake();
        $cake->image_url = FILE_URL . $fileName;

        $this->_gameCakes->update($cake);

        return $cake;
    }
}
