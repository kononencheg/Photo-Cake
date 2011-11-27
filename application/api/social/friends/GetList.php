<?php

namespace api\social\friends;

class GetList extends \api\social\SocialMethod {

    /**
     * @return mixed
     */
    protected function apply() {
        $result = array();

        $friendsIDs = $this->_api->call('friends.get');

        $rawResult = $this->_api->call('users.getInfo', array(
            'fields' => 'uid,first_name,last_name,pic_1',
            'uids' => join(',', json_decode($friendsIDs))
        ));

        $friendsList = json_decode($rawResult);
        foreach ($friendsList as $i => $value) {
            $result []= array(
                'id' => $value->uid,
                'name' => $value->first_name . ' ' . $value->last_name,
                'userpic' => $value->pic_1
            );
             $result []= array(
                'id' => $value->uid,
                'name' => $value->first_name . ' ' . $value->last_name,
                'userpic' => $value->pic_1
            );
             $result []= array(
                'id' => $value->uid,
                'name' => $value->first_name . ' ' . $value->last_name,
                'userpic' => $value->pic_1
            );
        }

        return $result;
    }
}