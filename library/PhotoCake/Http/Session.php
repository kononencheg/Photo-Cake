<?php

namespace PhotoCake\Http;

class Session
{
    private $NULL;

    private function __construct()
    {
        session_start();
    }

    /**
     * @param string $name
     * @param mixed $value
     * @return void
     */
    public function set($name, $value)
    {
        if (is_object($value)) {
            $value = get_object_vars($value);
        }

        $_SESSION[$name] = $value;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function &get($name)
    {
        if (isset($_SESSION[$name])) {
            return $_SESSION[$name];
        }

        return $this->NULL;
    }


    /**
     * @param string $name
     * @return void
     */
    public function remove($name)
    {
        unset($_SESSION[$name]);
    }

    /**
     * @return void
     */
    public function destroy()
    {
        session_destroy();
    }

    /**
     * @var \PhotoCake\Http\Session
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \PhotoCake\Http\Session
     */
    public static function getInstance()
    {
        if (self::$instance === NULL) {
            self::$instance = new Session();
        }

        return self::$instance;
    }

}