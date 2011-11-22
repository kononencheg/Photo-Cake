<?php

namespace api\social;

class GetCurrentUser extends \api\social\SocialMethod {

    /**
     * @return mixed
     */
    protected function apply() {
        return $this->_api->call('users.getInfo', array(
            'fields' => 'uid,first_name,last_name,location,name,gender,birthday,age,locale',
            'uids' => $this->_session->app['logged_user_id']
        ));
    }
}