<?php

namespace Api\Order;

/**
 * @param photo_data
 * @param image_data
 * @param name
 * @param phone
 * @param email
 * @param address
 * @param day
 * @param month
 * @param year
 * @param comment
 */
class Submit extends \PhotoCake\Api\Method\Method
{
    private $imageData;

    private $photoData;

    private $imageUrl;

    private $photoUrl;

    /**
     * @return void
     */
    protected function filter()
    {
        $this->applyFilter(array(
            'image_data' => FILTER_UNSAFE_RAW,

            'name'  => FILTER_SANITIZE_STRING,
            'phone' => FILTER_SANITIZE_STRING,
            'email' => FILTER_VALIDATE_EMAIL,

            'address' => FILTER_UNSAFE_RAW,
            'city'    => FILTER_UNSAFE_RAW,

            'day'   => FILTER_VALIDATE_INT,
            'month' => FILTER_VALIDATE_INT,
            'year'  => FILTER_VALIDATE_INT,

            'price'  => FILTER_VALIDATE_FLOAT,
            'weight' => FILTER_VALIDATE_INT,
            'recipe' => FILTER_SANITIZE_STRING,
            'recipe_desc' => FILTER_SANITIZE_STRING,
        ), array(
            'image_data' => array( NULL => 'Ошибка обработки данных торта' ),
            'name' => array( NULL => 'Имя должно быть задано' ),
            'phone' => array( NULL => 'Телефон должен быть задан' ),
            'email' => array(
                NULL => 'Адрес должен быть задан',
                false => 'Электронный адрес не корректен'
            ),

            'address' => array( NULL => 'Адрес должен быть задан' ),
            'city' => array( NULL => '' ),

            'day' => array( NULL => 'Дата должна быть задана' ),
            'month' => array( NULL => '' ),
            'year' => array( NULL => '' ),

            'price'  => array( NULL => '' ),
            'weight' => array( NULL => '' ),
            'recipe' => array( NULL => '' ),
            'recipe_desc' => array( NULL => '' ),
        ));
    }

    /**
     * @return void
     */
    protected function test()
    {
        $this->imageData = base64_decode($this->getParam('image_data'), true);
        if ($this->imageData === false) {
            $this->response->addParamError('image_data', 'Данные не корректны');
        }

        $this->photoData = base64_decode($this->getParam('photo_data'), true);
    }

    /**
     * @return mixed
     */
    protected function apply()
    {
        $this->saveImages();

        $to = implode(', ', array(
            'kononencheg@mail.ru', 'kononencheg@gmail.com',
            'visser@yandex.ru', 'visser@creat-present.ru',
            $this->getParam('email')
        ));

        // subject
        $subject = 'Заказ торта!';

        // message
        $message = $this->getMailMarkup();

        $headers  = 'MIME-Version: 1.0' ." \r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= 'From: Тортовый оповещатель <noreply@fotonatorte.ru>' . "\r\n";

        if (!mail($to, $subject, $message, $headers)) {
            $this->response->addError('Ошибка заказа!', 700);
            return null;
        }

        return true;
    }

    private function saveImages() {
        $fileId = uniqid();

        $imageFileName = 'cake_image_' . $fileId . '.jpg';

        if (file_put_contents(FILE_FOLDER . $imageFileName, $this->imageData)) {
            $this->imageUrl = FILE_URL . $imageFileName;
        }

        if ($this->photoData !== '') {
            $photoFileName = 'cake_photo_' . $fileId . '.jpg';;

            if (file_put_contents(FILE_FOLDER . $photoFileName, $this->photoData)) {
                $this->photoUrl = FILE_URL . $photoFileName;
            }
        }
    }

    private function getMailMarkup() {
        return '<html>
            <head>
                <title>Новый Заказ</title>
            </head>
            <body>
                <h1>Заказ</h1>

                <p> Вы заказли торт с помощью приложения Фото На Торте! Спасибо
                    вам огромное! Надеемся, что вам понравится! </p>

                <h2>Параметры заказа</h2>

                <table><tbody>' .
                    $this->getMailRow('Ваше имя', $this->getParam('name')) .
                    $this->getMailRow('Ваш телефон', $this->getParam('phone')) .
                    $this->getMailRow('Город', $this->getParam('city')) .
                    $this->getMailRow('Адрес доставки', $this->getParam('address')) .
                    $this->getMailRow('Дата доставки',
                                      $this->getParam('day') . ' \ ' .
                                      $this->getParam('month') . ' \ ' .
                                      $this->getParam('year')) .
                    $this->getMailRow('Торт', '<img alt="Торт" src="' . $this->imageUrl . '" />') .
                    $this->getMailRow('Изображения для печати',
                                      ($this->photoUrl ?
                                        '<img alt="Изображения для печати" src="' . $this->photoUrl . '" />' :
                                        'Изображение отсутствует')) .
                    $this->getMailRow('Рецепт', $this->getParam('recipe')) .
                    $this->getMailRow('Описание рецепта', $this->getParam('recipe_desc')) .
                    $this->getMailRow('Вес (кг.)', $this->getParam('weight')) .
                    $this->getMailRow('Комментарий', $this->getParam('comment')) .
                    $this->getMailRow('Цена (руб.)', $this->getParam('price') . ' + 450') .
                '</tbody></table>

                <p> По указанному вами телефону в течении дня с вами свяжется
                    представитель компании для уточнения заказа. </p>
            </body>
        </html>';
    }


    private function getMailRow($name, $value) {
        return '<tr><td><b>' . $name . ':</b></td><td>' . $value . '</td></tr>';
    }
}
