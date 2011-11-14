<?php

namespace api\users;

class Register extends \api\users\UserMethod {
    /**
     * @return void
     */
    protected function filter(){
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

        if (!$this->hasError('password')) {
            $length = strlen($this->password);
            if ($length < 6 || $length > 32 ) {
                $this->addError('password', 'Длинна пароля должна быть не ' .
                                            'менее 6 и не более 32 символов!');
            }
        }
    }

    /**
     * @return void
     */
    protected function test() {
        $user = $this->_users->fetchOne(array( 'email' => $this->email ));
        if ($user !== NULL) {
            $this->addError('email', 'Пользователь с адресом ' . $this->email .
                                        ' уже зарегистрирован!');
        }
    }

    /**
     * @return mixed
     */
    protected function apply() {
        $user = new \db\User();
        $user->populate($this->_params);
        $user->saltPassword();

        $this->_users->update($user);

        return $user;
    }
}
