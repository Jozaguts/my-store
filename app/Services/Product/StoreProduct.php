<?php

namespace App\Services\Product;

use App\DTOs\ProductDTO;
use App\Repositories\Products\Repository;



class StoreProduct
{
    private $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;

    }

    public function execute(ProductDTO $data)
    {
       return $this->repository->create($data);

    }
}
