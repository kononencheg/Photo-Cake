<?php

namespace PhotoCake\Api\Method;

use \PhotoCake\Http\Response\Response;

abstract class Method
{
    /**
     * @var array
     */
    private $params = array();

    /**
     * @var \PhotoCake\Http\Response\Response
     */
    protected $response = NULL;

    /**
     * @param \PhotoCake\Http\Response\Response $response
     */
    public function setResponse(Response $response) {
        $this->response = $response;
    }

    /**
     * @return void
     */
    protected function filter() {}

    /**
     * @return void
     */
    protected function test() {}

    /**
     * @abstract
     * @return mixed
     */
    abstract protected function apply();

    /**
     * @param array $params
     */
    final public function call(array &$params) {
        $this->params = $params;

        $this->filter();

        if (!$this->response->hasErrors()) {
            $this->test();
        }

        if (!$this->response->hasErrors()) {
            $this->response->setResponse($this->apply());
        }
    }

    /**
     * @param $name
     * @return mixed
     */
    protected function getParam($name) {
        if (isset($this->params[$name])) {
            return $this->params[$name];
        }

        return NULL;
    }

    /**
     * @param $filters
     * @param $messages
     * @return void
     */
    protected function applyFilter(array $filters, array $messages) {
        $filteredParams = filter_var_array($this->params, $filters);

        foreach($filteredParams as $name => $value) {
            if (isset($messages[$name]) &&
                isset($messages[$name][$value])) {

                $this->response->addParamError($name, $messages[$name][$value]);
            }
        }
    }
}
