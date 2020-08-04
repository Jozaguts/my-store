<?php


namespace App\Services\Product;


use App\DTOs\ProductDTO;
use App\Repositories\Products\Repository;


class UpdateProductService

{
    private $repository;
    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }
    public function execute(ProductDTO $productDto,$id)
    {
        try {
           return $this->repository->update($productDto, $id);

        }catch (\Throwable $exception){
                return response()->json( $exception->getMessage(), $exception->getCode());
        }
    }
}
