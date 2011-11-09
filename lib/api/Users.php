<?php

namespace api;

class Users extends APIService {

    /**
     * @var MongoCollection
     */
    private $_users;

    public function init() {
        $this->_users = $this->_db->selectCollection('users');
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //  login
    //
    ///////////////////////////////////////////////////////////////////////////

    public function filterLogin($params, &$errors) {
        return $this->filter($params, array(
            'email' => FILTER_VALIDATE_EMAIL,
            'password' => FILTER_UNSAFE_RAW
        ), array(
            'email' => array(
                NULL => 'Email не задан.',
                false => 'Email имеет неверный формат.'
            ),
            'password' => array( NULL => 'Пароль не задан.' )
        ), $errors);
    }

    public function prepareLogin($email, $password, &$errors) {
        if (!isset($errors['email']) && !isset($errors['password'])) {
            $user = $this->_users->findOne(array( 'email' => $email ));

            if ($user === NULL || $user['password'] !== md5($password . ' and salty cake')) {
                $errors = 'Пользователя с адресом ' . $email .
                                      ' не существует либо пароль неверный!';
            } else {
                $this->_session->user = $user;
            }
        }
    }

    public function applyLogin() {
        unset($this->_session->user['password']);

        return $this->_session->user;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //  register
    //
    ///////////////////////////////////////////////////////////////////////////

    public function filterRegister($params, &$errors) {
        return $this->filter($params, array(
            'email' => FILTER_VALIDATE_EMAIL,
            'password' => FILTER_UNSAFE_RAW
        ), array(
            'email' => array(
                NULL => 'Email не задан.',
                false => 'Email имеет неверный формат.'
            ),
            'password' => array( NULL => 'Пароль не задан.' )
        ), $errors);
    }

    public function prepareRegister($email, $password, &$errors) {
        if (!isset($errors['password'])) {
            $length = strlen($password);
            if ($length < 6 || $length > 32 ) {
                $errors['password'] = 'Длинна пароля должна быть не менее 6 и не более 32 символов!';
            }
        }

        if (!isset($errors['email'])) {
            $user = $this->_users->findOne(array( 'email' => $email ));
            if ($user !== NULL) {
                $errors['email'] = 'Пользователь с адресом ' . $email . ' уже зарегистрирован!';
            }
        }
    }

    public function applyRegister($email, $password) {
        $user = array(
            'email' => $email,
            'password' => md5($password . ' and salty cake')
        );

        $this->_db->selectCollection('users')->save($user);

        return $user;
    }

}
