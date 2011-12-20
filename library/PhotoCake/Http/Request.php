<?php

namespace PhotoCake\Http;

class Request
{
    const GET = 0;

    const POST = 1;

    /**
     * @var array
     */
    private $_source = NULL;

    /**
     * @param int $type
     */
    private function __construct(\int $type = NULL)
    {
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
    public function get($name = NULL)
    {
        if ($name === NULL) {
            return $this->_source;
        } elseif (isset($this->_source[$name])) {
            return $this->_source[$name];
        }
        
        return NULL;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function fetch($name)
    {
        $result = NULL;

        if (isset($this->_source[$name])) {
            $result = $this->_source[$name];
            unset($this->_source[$name]);
        }

        return $result;
    }

    /**
     * @var \PhotoCake\Http\Request
     */
    private static $instance = NULL;

    /**
     * @static
     * @return \PhotoCake\Http\Request
     */
    public static function getInstance()
    {
        if (self::$instance === NULL) {
            self::$instance = new Request();
        }

        return self::$instance;
    }
}
