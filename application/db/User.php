<?php

namespace db;

class User extends \cakes\db\mongo\MongoRecord {

    const CLIENT = 1;
    const ADMIN = 2;

    /**
     * @var string
     */
    protected $password = NULL;

    /**
     * @var string
     */
    public $email = NULL;

    /**
     * @var int
     */
    public $role = self::CLIENT;

    /**
     * @param string $password
     * @return bool
     */
    public function testPassword($password) {
        return $this->password === md5($password . ' and salty cake');
    }

    /**
     * @return void
     */
    public function saltPassword() {
        $this->password = md5($this->password . ' and salty cake');
    }
}
