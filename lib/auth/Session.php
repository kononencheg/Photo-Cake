<?php

namespace auth;

class Session {

    private function __construct() {
        session_start();
    }

    public function __set($name, $value) {
        $_SESSION[$name] = $value;
    }

    public function &__get($name) {
        return $_SESSION[$name];
    }

    public function __isset($name) {
        return isset($_SESSION[$name]);
    }

    public function __unset($name) {
        unset($_SESSION[$name]);
    }

    public function destroy() {
        session_destroy();
    }

    private static $instance = NULL;

    /**
     * @static
     * @return \auth\Session
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new Session();
        }

        return self::$instance;
    }

}
