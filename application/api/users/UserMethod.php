<?php

namespace api\users;

abstract class UserMethod extends \cakes\api\Method {

    /**
     * @var \db\ICollectionAdapter
     */
    protected $_users;

    /**
     * @var \auth\Session
     */
    protected $_session;

    public function __construct() {
        $factory = \cakes\db\mongo\MongoAdapterFactory::getInstance();
        
        $this->_users = $factory->create('users');
        $this->_session = \cakes\globals\Session::getInstance();
    }
}
