<?php

namespace cakes\globals;

class Request {

    const GET = 0;

    const POST = 1;

    /**
     * @var array|null
     */
    private $_source = NULL;

    /**
     * @param int $type
     */
    private function __construct($type = -1) {
        switch ($type) {
            case self::GET: {
                $this->_source = $_GET;
                break;
            }

            case self::POST: {
                $this->_source = $_POST;
                break;
            }

            default: {
                $this->_source = array_merge($_GET, $_POST);
            }
        }
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function __get($name) {
        if (isset($this->_source[$name])) {
            return $this->_source[$name];
        }
        
        return NULL;
    }

    /**
     * @param string $name
     * @return bool
     */
    public function __isset($name) {
        return isset($this->_source[$name]);
    }

    /**
     * @return array
     */
    public function getSource() {
        return $this->_source;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function fetch($name) {
        $result = $this->$name;

        unset($this->$name);

        return $result;
    }

    /**
     * @var \cakes\globals\Request
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \cakes\globals\Request
     */
    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new Request();
        }

        return self::$instance;
    }
}
