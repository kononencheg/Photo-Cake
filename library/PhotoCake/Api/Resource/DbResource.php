<?php

namespace PhotoCake\Api\Resource;

use PhotoCake\Db\Connection\ConnectionManager;

class DbResource implements ResourceInterface
{
    /**
     * @var \PhotoCake\Db\Collection\CollectionFactoryInterface
     */
    protected $collectionFactory;

    public function __construct()
    {
        $connection = ConnectionManager::getInstance()->getDefaultConnection();
        $this->collectionFactory = $connection->getCollectionFactory();
    }

    protected function getCollection($name) {
        return $this->collectionFactory->create($name);
    }
}
