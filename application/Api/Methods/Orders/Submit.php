<?php

namespace Api\Methods\Orders;

use \PhotoCake\Api\Arguments\Filter;

class Submit extends \PhotoCake\Api\Method\Method
{
    /**
     * @var array
     */
    protected $arguments = array(
        'photo' => Filter::BASE64,
        'image' => Filter::BASE64,
        'markup' => Filter::JSON,
        'recipe' => Filter::STRING,

        'name' => Filter::STRING,
        'phone' => Filter::PHONE,
        'email' => Filter::EMAIL,

        'date' => Filter::INTEGER,
        'city' => Filter::STRING,
        'address' => Filter::STRING,

        'comment' => Filter::STRING,
    );

    /**
     * @return void
     */
    protected function filter()
    {
        $this->applyFilter(array(
            'image' => array( NULL => 'Ошибка обработки данных торта.' ),
            'markup' => array( NULL => 'Ошибка обработки данных торта.' ),
            'recipe' => array( NULL => 'Ошибка обработки данных торта.' ),

            'name' => array( NULL => 'Имя не задано.' ),
            'phone' => array(
                NULL => 'Телефон не задан.',
                false => 'Телефон введен неправильно.'
            ),
            'email' => array(
                NULL => 'Email не задан.',
                false => 'Email введен не правильно.'
            ),

            'date' => array( NULL => 'Дата не задана.' ),
            'city' => array( NULL => 'Город не задан.' ),
            'address' => array( NULL => 'Адрес не задан.' ),
        ), array(
            'date' => 'testDate'
        ));
    }

    protected function testDate($date)
    {
        $interval = new \DateInterval('P3D');

        $today = new \DateTime();
        $today->setTime(0, 0);
        $edgeDate = $today->add($interval);

        $targetDate = new \DateTime();
        $targetDate->setTimestamp($date);

        if ($targetDate->getTimestamp() < $edgeDate->getTimestamp()) {
            $this->response->addParamError
                ('date', 'Срок обработки заказа минимум двое суток.');
        }
    }

    /**
     * @return mixed
     */
    protected function apply()
    {
        $application = new \Api\Resources\Application();

        $cakes = new \Api\Resources\Cakes();
        $clients = new \Api\Resources\Clients();
        $orders = new \Api\Resources\Orders();
        $payments = new \Api\Resources\Payments();
        $recipes = new \Api\Resources\Recipes();
        $deliveries = new \Api\Resources\Deliveries();

        $cake = $cakes->initCake($this->image, $this->photo, $this->markup);
        $client = $clients->initClient(
            $this->email, $this->name, $this->phone,
            $application->getNetworkName(),
            $application->getNetworkUserId()
        );


        $recipe = $recipes->getByName($this->recipe);
        $delivery = $deliveries->initDelivery
            ($this->city, $this->address, $this->date);

        $payment = $payments->initPayment($this->markup, $recipe, $delivery);

        $order = $orders->initOrder
            ($cake, $recipe, $client, $delivery, $payment, $this->comment);

        return $orders->emailOrder($order);
    }
}
