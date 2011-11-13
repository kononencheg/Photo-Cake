<?php

namespace model;

class User extends \db\MongoRecord {

    const SALT = ' and salty cake';

    protected $password = NULL;

    public $email = NULL;
    public $role = \auth\UserRole::DEFAULT_ROLE;

    /**
     * @param string $password
     * @return bool
     */
    public function testPassword($password) {
        return $this->password === md5($password . self::SALT);
    }

    public function saltPassword() {
        $this->password = md5($this->password . self::SALT);
    }
}
