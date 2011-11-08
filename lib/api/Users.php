<?php

namespace api;

class Users extends APIService {

    protected function registerFilters() {
        $this->addFilter('register', array(
            'email' => FILTER_VALIDATE_EMAIL,
            'password' => FILTER_DEFAULT
        ), array(
            'email' => array(
                NULL => 'Email не задан.',
                false => 'Email имеет неверный формат.'
            ),
            'password' => array( NULL => 'Пароль не задан.' )
        ));
    }

    public function login($params) {

    }

    public function register($email, $password) {
        $userData = array(
            'email' => $email,
            'password' => md5($password . 'salty-cake')
        );

        $this->_db->selectCollection('users')->save($userData);

        return $userData;
    }

    public function filterArguments_register($name, $value) {

    }

}
