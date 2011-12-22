<?php

namespace PhotoCake\Db\Record;

abstract class AbstractRecord implements RecordInterface
{
    /**
     * @static
     * @param mixed $object
     * @return bool
     */
    public static function isRecord($object)
    {
        return is_subclass_of($object, __CLASS__);
    }

    /**
     * @var array
     */
    protected $fields = array();

    /**
     * @var array
     */
    protected $data = array();

    /**
     * @param mixed $data
     * @return void
     */
    public function populate(array $data)
    {
        foreach ($this->fields as $name => $type) {;
            if (isset($data[$name])) {
                if (class_exists($type, true) &&
                    AbstractRecord::isRecord($type)) {

                    $record = $this->createRecord($type);

                    if ($record !== NULL) {
                        $record->populate($data[$name]);
                        $this->data[$name] = $record;
                    }
                } else {
                    $this->data[$name] = $data[$name];

                    settype($this->data[$name], $type);
                }
            }
        }
    }

    /**
     * @param string $type
     * @return \PhotoCake\Db\Record\RecordInterface
     */
    protected function createRecord($type) {
        return new $type();
    }

    /**
     * Specify data which should be stored in data base.
     *
     * @return array
     */
    public function dbSerialize()
    {
        $result = array();

        foreach ($this->data as $name => $value) {
            if (is_object($value) && AbstractRecord::isRecord($value)) {
                $result[$name] = $value->dbSerialize();
            } else {
                $result[$name] = $value;
            }
        }

        return $result;
    }

    public function jsonSerialize() {
        $result = array();

        foreach ($this->data as $name => $value) {
            if (is_object($value) && AbstractRecord::isRecord($value)) {
                $result[$name] = $value->jsonSerialize();
            } else {
                $result[$name] = $value;
            }
        }

        return $result;
    }

    /**
     * @abstract
     * @return mixed
     */
    abstract public function getId();
}
