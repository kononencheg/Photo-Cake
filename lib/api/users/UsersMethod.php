<?php

namespace api\users;

abstract class UsersMethod extends \api\APIMethod {

    /**
     * @var \db\ICollectionAdapter
     */
    protected $_users;

    /**
     * @var \auth\Session
     */
    protected $_session;

    public function __construct() {
        $this->_users = \db\MongoAdapterFactory::getInstance()->create('users');
        $this->_session = \auth\Session::getInstance();
    }
}
