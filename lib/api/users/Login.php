<?php

namespace api\users;
 
class Login extends \api\users\UsersMethod {

    /**
     * @var \model\User
     */
    private $_user = NULL;

    /**
     * @return void
     */
    protected function filter() {
        $this->applyFilter(array(
            'email' => FILTER_VALIDATE_EMAIL,
            'password' => FILTER_UNSAFE_RAW
        ), array(
            'email' => array(
                NULL => 'Email не задан.',
                false => 'Email имеет неверный формат.'
            ),
            'password' => array( NULL => 'Пароль не задан.' )
        ));
    }

    /**
     * @return void
     */
    protected function test() {
        $this->_user = $this->_users->fetchOne(array( 'email' => $this->email ));

        if ($this->_user === NULL ||
            !$this->_user->testPassword($this->password)) {

            $this->setMethodError(
                'Пользователя с адресом ' . $this->email .
                ' не существует либо пароль неверный!'
            );
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        $this->_session->user = $this->_user;
        return $this->_session->user;
    }
}
