<?php

namespace api\social;

class GetCurrentUser extends \api\social\SocialMethod {

    /**
     * @return mixed
     */
    protected function apply() {
        $rawResult = $this->_api->call('users.getInfo', array(
            'fields' => 'uid,first_name,last_name,location,name,gender,birthday,age,locale',
            'uids' => $this->_session->app['logged_user_id']
        ));

        $result = json_decode($rawResult);

        if (isset($result[0])) {
            return $result[0];
        }

        return $result;
    }
}