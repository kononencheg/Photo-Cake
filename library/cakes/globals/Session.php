<?php

namespace cakes\globals;

class Session {

    private function __construct() {
        session_start();
    }

    /**
     * @param string $name
     * @param mixed $value
     * @return void
     */
    public function __set($name, $value) {
        if (is_object($value)) {
            $value = get_object_vars($value);
        }

        $_SESSION[$name] = $value;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function &__get($name) {
        return $_SESSION[$name];
    }

    /**
     * @param string $name
     * @return bool
     */
    public function __isset($name) {
        return isset($_SESSION[$name]);
    }

    /**
     * @param string $name
     * @return void
     */
    public function __unset($name) {
        unset($_SESSION[$name]);
    }

    /**
     * @return void
     */
    public function destroy() {
        session_destroy();
    }

    /**
     * @var \cakes\globals\Session
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \cakes\globals\Session
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new Session();
        }

        return self::$instance;
    }

}
