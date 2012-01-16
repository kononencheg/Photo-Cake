<?php

namespace Api\Resources;

class Deliveries implements \PhotoCake\Api\Resource\ResourceInterface
{

    public function initDelivery($city, $address, $time)
    {
        $delivery = new \Model\Delivery();
        $delivery->city = $city;
        $delivery->address = $address;
        $delivery->date = new \MongoDate($time);

        return $delivery;
    }
}
