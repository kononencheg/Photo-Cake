<?php

namespace Api\Resources;

class Deliveries extends \PhotoCake\Api\Resource\DbResource
{

    public function initDelivery($cityId, $address, $time)
    {
        $cityCollection = $this->getCollection('cities');

        $delivery = new \Model\Delivery();
        $delivery->city = $cityCollection->fetch($cityId);
        $delivery->address = $address;
        $delivery->date = new \MongoDate($time);

        return $delivery;
    }
}
