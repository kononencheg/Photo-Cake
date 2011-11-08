<?php

namespace api;

class City extends APIService {
    function getList() {
        return iterator_to_array($this->_mongo->cakes->cities->find());
    }
}
