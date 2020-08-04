<?php


namespace App\Services\Product;


use App\Repositories\Products\Repository;

class DeleteProduct
{
    private $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }

    public function execute($id)
    {
       return $this->repository->delete($id);
    }
}
