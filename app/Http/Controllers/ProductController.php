<?php

namespace App\Http\Controllers;

use App\DTOs\ProductDTO;
use App\Http\Requests\CreateProduct;
use App\Http\Requests\UpdateProduct;
use App\Repositories\Products\RepositoryInterface;
use App\Services\Product\DeleteProduct;
use App\Services\Product\StoreProduct;
use App\Services\Product\UpdateProductService;
use Illuminate\Http\Request;



class ProductController extends Controller
{
    private $repository;
    const DEFAULT_PAGE = 1;
    const DEFAULT_ITEMS = 9;

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        try {
            $products = $this->repository
                ->paginate(
                    $request->input('items'),
                    $request->input('page')
                );
            $this->repository
                ->getImageOfEachItem($products);
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }

    public function store(CreateProduct $request, StoreProduct $storeProduct)
    {
        $productsDto = new ProductDTO(
            $request->input('name'),
            $request->input('slug'),
            $request->input('description'),
            $request->input('price'),
            $request->input('status'),
            $request->input('stock'),
            $request->file('image')
        );

        try {
            $created = $storeProduct->execute($productsDto);
            if($created){
                $products = $this->repository->paginate(self::DEFAULT_ITEMS, self::DEFAULT_PAGE);
                $this->repository->getImageOfEachItem($products);
                return response()->json(['data' => $products], 201);
            }
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function update(UpdateProduct $request, UpdateProductService $updateProduct, $id)
    {
        try {
            $productsDto = new ProductDTO(
                $request->input('name'),
                $request->input('slug'),
                $request->input('description'),
                $request->input('price'),
                $request->input('status'),
                $request->input('stock'),
                $request->file('image')
            );
            $updated = $updateProduct->execute($productsDto, $id);

            if($updated){
                $products = $this->repository->paginate(self::DEFAULT_ITEMS, self::DEFAULT_PAGE);
                $this->repository->getImageOfEachItem($products);
                return response()->json(['data' => $products], 200);
            }
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function delete(DeleteProduct $deleteProduct, $id)
    {
        try {
           $deleted = $deleteProduct->execute($id);
            if($deleted){
                $products = $this->repository->paginate(self::DEFAULT_ITEMS, self::DEFAULT_PAGE);
                $this->repository->getImageOfEachItem($products);
                return response()->json(['data' => $products], 200);
            }

        } catch (\Throwable $th) {
            return response()->json(['errors' => $th->getMessage()], 400);
        }
    }


}
